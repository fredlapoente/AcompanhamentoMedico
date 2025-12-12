import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavigationExtras, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/Usuario.model';
import { NetworkService } from 'src/app/services/network.service';
import { Operadora } from 'src/app/model/Operadora.model';
import Constantes from 'src/app/config/constantes/constantes';
import { SaudiLoadingComponent } from 'src/app/components/saudi-loading/saudi-loading.component';
import { StorageService } from 'src/app/services/storage.service';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { PrestadorService } from 'src/app/services/prestador.service';
import { DominioCodigo } from 'src/app/model/DominioCodigo.model';
import { Prestador } from 'src/app/model/Prestador.model';
import { ConfigFormulario } from 'src/app/model/ConfigFormulario.model';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';
import { SenhaAutorizacao } from 'src/app/model/SenhaAutorizacao.model';
import { Beneficiario } from 'src/app/model/Beneficiario.model';
import { AlertController, NavController, PopoverController } from '@ionic/angular';
import { PopoverCalendarioComponent } from 'src/app/components/popover-calendario/popover-calendario.component';

@Component({
    selector: 'app-abrir-sem-senha',
    templateUrl: './abrir-sem-senha.page.html',
    styleUrls: ['./abrir-sem-senha.page.scss'],
})
export class AbrirSemSenhaPage implements OnInit {

    public formAbrirSemSenha: FormGroup;  
    public showFiltros: boolean = false
    public flgTrabalhaComSenha: number
    public flagGeraSenhaAleatoria: number
    public prestador: Prestador     
    public listaPerfisFormulario = []
    public listaPrestadores = [] 
    public listaEstados = []

    public usuarioComecouAlterarPerfil: boolean = false

    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private networkService: NetworkService,
                private loading: SaudiLoadingComponent,
                private storageService: StorageService,
                private toast: SaudiToastComponent,
                private prestadorService: PrestadorService,
                public atrCtrl: AlertController,
                private popover: PopoverController,){}

    ngOnInit() {
        moment.locale('pt-br');
        let usuario: Usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
        this.flgTrabalhaComSenha = usuario.operadora.flagUtilizaSenhaAcompMedico;
        this.flagGeraSenhaAleatoria = usuario.operadora.flagGeraSenhaAleatoria
        let senha: string = ''
        //let getNav = this.router.getCurrentNavigation()
        //if (getNav.extras.state) {            
        //    this.prestador = getNav.extras.state.prestador 
        //    senha = getNav.extras.state.senha   
        //    this.showFiltros = true               
       // }

        this.formAbrirSemSenha = this.formBuilder.group({
            perfilFormulario:[usuario.configFormulario.idConfigFormulario],
            dataInternacao: ['', Validators.compose([Validators.required]) ],
            carteiraBeneficiario: ['', Validators.compose([Validators.required]) ],
            nomeBeneficiario: ['', Validators.compose([Validators.required])],
            estado: [{value: '',disabled: false}],
            prestadorSelecionado: [{value: this.prestador ? this.prestador.idPrestador : '',disabled: true}, !this.prestador ? Validators.compose([Validators.required]) : ''],
            senha:[senha, this.prestador ? Validators.compose([Validators.required]) : '']  
        })       
             
        this.listaPerfisFormulario = usuario.listaConfigFormulario       
        this.listaEstados = []          
        this.buscarUf()   
        
        //Se operadora não utiliza senha ou utiliza senha, mas gera senha, entao gera senha aleatoria e preenche a variavel de senha
        if(this.flgTrabalhaComSenha == 0 || (this.flgTrabalhaComSenha == 1 && this.flagGeraSenhaAleatoria == 1)){          
          let dataAtual = new Date() 
          this.formAbrirSemSenha.get("senha").setValue(dataAtual.getFullYear() + "" + ('0' + (dataAtual.getMonth() + 1)).slice(-2) + "" + ('0' + dataAtual.getDate()).slice(-2) + "" + ('0' + dataAtual.getHours()).slice(-2) + "" + ('0' + dataAtual.getMinutes()).slice(-2) + "" + ('0' + dataAtual.getSeconds()).slice(-2)+ "" + dataAtual.getMilliseconds())
          this.senha.disable()
        }  
    }

    ionViewWillEnter() {
      this.ngOnInit()
    }

    get perfilFormulario(){
      return this.formAbrirSemSenha.get("perfilFormulario")
    }

    get estado(){
        return this.formAbrirSemSenha.get("estado")
    }

    get senha(){
      return this.formAbrirSemSenha.get('senha')
    }

    get dataInternacao(){
      return this.formAbrirSemSenha.get('dataInternacao')
    }
    
    get carteiraBeneficiario(){
      return this.formAbrirSemSenha.get('carteiraBeneficiario')
    }
    
    get nomeBeneficiario(){
      return this.formAbrirSemSenha.get('nomeBeneficiario')
    }

    get prestadorSelecionado() {
      return this.formAbrirSemSenha.get('prestadorSelecionado')
    }


    alteraPerfilFormulario(){
      if (!this.usuarioComecouAlterarPerfil) {
        return;
      }
      this.usuarioComecouAlterarPerfil = false; // reseta
      let usuario: Usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
      let confFormulario = this.listaPerfisFormulario.find(x=> x.idConfigFormulario === this.perfilFormulario.value)
      usuario.configFormulario = confFormulario    
      localStorage.setItem('@appAcompanhamentoMedico:dadosUsuario',JSON.stringify(usuario))

      if(usuario.configFormulario.codDominio == Constantes.PERFIL_DOMICILIAR){
        this.router.navigateByUrl('/menu-principal/abrir-sem-senha-domiciliar', { replaceUrl: true });
      }else{
        if(this.flgTrabalhaComSenha == 1){
          this.router.navigateByUrl('/menu-principal/buscar-senha', { replaceUrl: true }); 
        }else{
          return;
        }  
      }
    }

    async buscarUf(){
      this.networkService.CheckNetworkStatus()
      if (this.networkService.NetworkStatus.value){
        this.buscarUfOnline()
      }else{
         this.buscarUfOffline()
      }        
    }
    
    async buscarUfOnline(){
      let operadora = new Operadora()
      operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
      const loading = await this.loading.presentLoading('Buscando estado(s)...') 
      this.prestadorService.getUFPrestadores(operadora).subscribe((data: any) => {
          this.listaEstados = data
          loading.dismiss()   
          this.prestadorSelecionado.enable() 
      }, async error => {
          await this.buscarUfOffline()
          loading.dismiss()
      })
    }
    
    async buscarUfOffline(){
      const loading = await this.loading.presentLoading('Buscando estado(s)...') 
      this.storageService.buscarTodos(Constantes.STORAGE_UF).then(items=>{        
        if(items != null){          
          this.listaEstados = items
          this.prestadorSelecionado.enable()
          loading.dismiss()                  
        }else{
          this.listaEstados = []
          this.prestadorSelecionado.disable()
          loading.dismiss()
          this.toast.errorToast("Nenhum Estado localizado.")
        }
      }, error => {        
        this.toast.errorToast(error)
        loading.dismiss()
      })  
    }

    async exibirPrestador(){
      this.networkService.CheckNetworkStatus()
      if (this.networkService.NetworkStatus.value){
        this.exibirPrestadorOnline()
      }else{
        this.exibirPrestadorOffline()
      }
    }
    
    async exibirPrestadorOnline(){
      this.listaPrestadores = []
      this.showFiltros = false; 
      let uf = new DominioCodigo()
      let operadora = new Operadora()
      let prestador = new Prestador()
      operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'))
      uf.seqDominio = this.estado.value
      prestador.operadora = operadora
      prestador.uf = uf
      const loading = await this.loading.presentLoading('Buscando prestador(es)...')  
      this.prestadorService.getPrestadoresPorUf(prestador).subscribe((data: any) => {
        this.listaPrestadores = data
        loading.dismiss()        
      }, error => {
        this.exibirPrestadorOffline()
        loading.dismiss()        
      })   
    }
    
    async exibirPrestadorOffline(){
      this.listaPrestadores = []
      this.showFiltros = false;
      let uf = this.estado.value;
      let operadora: Operadora = new Operadora()
      operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario'));
      const loading = await this.loading.presentLoading('Buscando prestador(es)...')    
      operadora.listaPrestadores.forEach(item =>{
        if(item.uf.seqDominio == uf){
          this.listaPrestadores.push(item)
        }      
      })
      if(this.listaPrestadores.length > 0){
        loading.dismiss()   
        this.prestadorSelecionado.enable()
      }else{
        this.toast.errorToast("Nenhum prestador localizado.")
        loading.dismiss()
        this.listaPrestadores = []
        this.showFiltros = false;
      } 
    }
   
    exibirFiltros(){    
      this.showFiltros = true;    
    }    
   
    async incluirAcompanhamento(){
        let flgPossuiAcomp: boolean = false
        let usuario: Usuario = new Usuario()
        let configFormulario: ConfigFormulario
        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
        //Busca formulario ativo para o usuário
        configFormulario = usuario.listaConfigFormulario.find(x => x.statusAtualConfigFormulario === 'ATIVO')
        if(configFormulario != null){          
          //Verifica se o usuário já possui acompanhamento medico cadastrado 
          this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(items=>{  
            if(items != null){  
              let acompanhamentoMedico: AcompanhamentoMedico
              //Busca acompanhamento para benficiario, prestador e formulario
              acompanhamentoMedico = items.find(x => x.beneficiario.carteiraBeneficiario === this.carteiraBeneficiario.value && 
                                                x.prestador.idPrestador === this.prestadorSelecionado.value &&
                                                x.dataInternacao == moment(this.dataInternacao.value).format("DD/MM/YYYY") &&
                                                x.configFormulario.idConfigFormulario === usuario.configFormulario.idConfigFormulario &&
                                                (x.dataEncerramento === null || x.dataEncerramento === ''))
              if(acompanhamentoMedico != null){
                //Exibe mensagem para confirmar se o usuario quer ou não abrir o acompanhamento existente
                this.confirmarAbrirAcompanhamentoBeneficiarioExistente(acompanhamentoMedico)
                flgPossuiAcomp = true
              }
            }
            if(!flgPossuiAcomp){          
              this.abreNovoFormulario()    
            }
          })  
        }else{
          this.toast.errorToast("Sr. Usuário, não existe configuração de formulário cadastrada. É necessário criar a configuração no SAUDI !")
        }  
    }

    async confirmarAbrirAcompanhamentoBeneficiarioExistente(acompanhamentoMedico: AcompanhamentoMedico) {
        let flgAbrindo: boolean = false
        let mensagem = "Já existe um acompanhamento para este Paciente neste Prestador. Abrir acompanhamento existente?"
        const alert = await this.atrCtrl.create({
          header: 'Abrir Acompanhamento Médico',
          message: mensagem,
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: (blah) => {}
            }, {
              text: 'Confirmar',
              handler: () => {
                let navigationExtras: NavigationExtras = {
                  state: {
                    acompanhamentoMedico, 
                    flgAbrindo
                  }
                }                  
                this.router.navigateByUrl('menu-principal/exibirFormulario', navigationExtras)
              }
            }
          ]
        });
        await alert.present();
    }

    abreNovoFormulario(){
        //abre formulario
        let flgAbrindo: boolean = true
        let acompanhamentoMedico: AcompanhamentoMedico = new AcompanhamentoMedico()
        let senhaAutorizacao: SenhaAutorizacao = new SenhaAutorizacao()
        let beneficiario: Beneficiario = new Beneficiario()
        let prestador: Prestador = new Prestador();
        let dataInternacao = this.dataInternacao.value
        let usuario: Usuario = new Usuario()
        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
        acompanhamentoMedico.operadora = usuario.operadora
        senhaAutorizacao.senha = this.senha.value
        senhaAutorizacao.dataInternacao = dataInternacao
        acompanhamentoMedico.senhaAutorizacao = senhaAutorizacao
        acompanhamentoMedico.dataInternacao = dataInternacao
        
        acompanhamentoMedico.dataAbertura = moment(new Date()).format("DD/MM/YYYY")
        acompanhamentoMedico.dispositivoMovel = usuario.dispositivoMovel
        acompanhamentoMedico.motivoAlta = new DominioCodigo()
    
        beneficiario.carteiraBeneficiario = this.carteiraBeneficiario.value
        beneficiario.nomeBeneficiario = this.nomeBeneficiario.value
        senhaAutorizacao.beneficiario = beneficiario
        acompanhamentoMedico.beneficiario = senhaAutorizacao.beneficiario

        if(this.prestador){
          prestador = this.prestador
        }else{
          prestador = this.listaPrestadores.find(x => x.idPrestador === this.prestadorSelecionado.value)
        }  
        senhaAutorizacao.prestador = prestador
        acompanhamentoMedico.prestador = senhaAutorizacao.prestador

        acompanhamentoMedico.configFormulario = usuario.configFormulario
        acompanhamentoMedico.usuario = usuario
        acompanhamentoMedico.status = Constantes.STATUS_ABERTO
        acompanhamentoMedico.statusSincronismo = Constantes.STATUS_PENDENTE             
    
        let navigationExtras: NavigationExtras = {
            state: {
                acompanhamentoMedico, 
                flgAbrindo
            }
        }                  
        this.router.navigateByUrl('menu-principal/exibirFormulario', navigationExtras)
    }
    
    async abrirCalendarioDataInternacao(ev: any){
      let diaFinal
      if(this.dataInternacao.value != null && this.dataInternacao.value != ''){
        diaFinal = new Date(moment(this.dataInternacao.value,"DD/MM/YYYY").toISOString())
      }else{
        diaFinal = new Date()
      }  
      
      const pop = await this.popover.create({
          component: PopoverCalendarioComponent,
          event: ev,
          cssClass: 'popover-custon',
          componentProps: {
            titulo: 'Data de Internação',
            data: diaFinal
          },      
          translucent: true            
      });   
      
      pop.onDidDismiss().then((result) => {
        if(result.data){ 
          this.formAbrirSemSenha.get("dataInternacao").setValue(moment(result.data).format("DD/MM/YYYY"))
        }  
      }); 
      return await pop.present() 
    } 
}