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
import { BeneficiarioService } from 'src/app/services/beneficiario.service';
import { BuscarSenhaPage } from '../buscar-senha/buscar-senha.page';
@Component({
    selector: 'app-abrir-sem-senha-domiciliar',
    templateUrl: './abrir-sem-senha-domiciliar.page.html',
    styleUrls: ['./abrir-sem-senha-domiciliar.page.scss'],
})
export class AbrirSemSenhaDomiciliarPage implements OnInit {

  public formAbrirSemSenhaDomiciliar: FormGroup;  
  public showFiltros: boolean = false

  public buscarSenhaPage: BuscarSenhaPage;

  public flgTrabalhaComSenha: number
  public flagGeraSenhaAleatoria: number

  public usuarioComecouAlterarPerfil: boolean = false

  public listaPerfisFormulario = []
  public listaPrestadores = [] 
  public listaEstados = []
  public listaBeneficiario = []

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private navCtrl: NavController,
              private networkService: NetworkService,
              private loading: SaudiLoadingComponent,
              private storageService: StorageService,
              private toast: SaudiToastComponent,
              private prestadorService: PrestadorService,
              private beneficiarioService: BeneficiarioService,
              public atrCtrl: AlertController,
             ) { }
  
  ngOnInit() {
    moment.locale('pt-br');
    let usuario: Usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
    this.flgTrabalhaComSenha = usuario.operadora.flagUtilizaSenhaAcompMedico;
    this.flagGeraSenhaAleatoria = usuario.operadora.flagGeraSenhaAleatoria;
    this.formAbrirSemSenhaDomiciliar = this.formBuilder.group({
        perfilFormulario:[usuario.configFormulario.idConfigFormulario],
        nomeBeneficiario: ['', Validators.compose([Validators.required])],
        carteiraBeneficiario: ['', Validators.compose([Validators.required]) ],
        filtroPrestador: [''],
        prestador: [{
          value: '',
          disabled: true
        }, Validators.compose([Validators.required])]
    })       
          
    this.listaPerfisFormulario = usuario.listaConfigFormulario   
  }
  
  ionViewWillEnter() {
    this.ngOnInit()    
  }

  get perfilFormulario(){
    return this.formAbrirSemSenhaDomiciliar.get("perfilFormulario")
  }
  
  get carteiraBeneficiario(){
    return this.formAbrirSemSenhaDomiciliar.get('carteiraBeneficiario')
  }
  
  get nomeBeneficiario(){
    return this.formAbrirSemSenhaDomiciliar.get('nomeBeneficiario')
  }

  get prestador() {
    return this.formAbrirSemSenhaDomiciliar.get('prestador')
  }

  get filtroPrestador(){
    return this.formAbrirSemSenhaDomiciliar.get('filtroPrestador')
  }


  alteraPerfilFormulario(){ 
    if (!this.usuarioComecouAlterarPerfil) { 
      this.limparBuscarPrestador()
      return;
    }
    this.usuarioComecouAlterarPerfil = false; // reseta
    let usuario: Usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
    let confFormulario = this.listaPerfisFormulario.find(x=> x.idConfigFormulario === this.perfilFormulario.value)
    usuario.configFormulario = confFormulario    
    localStorage.setItem('@appAcompanhamentoMedico:dadosUsuario',JSON.stringify(usuario))
    
    if(usuario.configFormulario.codDominio == Constantes.PERFIL_DOMICILIAR){
      this.limparBuscarPrestador()
      return;
    }else{  
      if(this.flgTrabalhaComSenha == 1){
        this.router.navigateByUrl('/menu-principal/buscar-senha', { replaceUrl: true });        
      }else{
        this.router.navigateByUrl('/menu-principal/abrir-sem-senha', { replaceUrl: true }); 
      }
    }  
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
    let operadora = new Operadora()
    let prestador = new Prestador()
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'))
    prestador.operadora = operadora
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
    let operadora: Operadora = new Operadora()
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario'));
    const loading = await this.loading.presentLoading('Buscando prestador(es)...')    

    if(this.listaPrestadores.length > 0){
      loading.dismiss()   
      this.prestador.enable()
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
                                              x.prestador.idPrestador === this.prestador.value &&
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
      let usuario: Usuario = new Usuario()
      usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
      acompanhamentoMedico.operadora = usuario.operadora
      acompanhamentoMedico.senhaAutorizacao = senhaAutorizacao
      
      acompanhamentoMedico.dataAbertura = moment(new Date()).format("DD/MM/YYYY")
      acompanhamentoMedico.dispositivoMovel = usuario.dispositivoMovel
      acompanhamentoMedico.motivoAlta = new DominioCodigo()
  
      beneficiario.carteiraBeneficiario = this.carteiraBeneficiario.value
      beneficiario.nomeBeneficiario = this.nomeBeneficiario.value
      senhaAutorizacao.beneficiario = beneficiario
      acompanhamentoMedico.beneficiario = senhaAutorizacao.beneficiario

      prestador = this.listaPrestadores.find(x => x.idPrestador === this.prestador.value)

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
      this.router.navigateByUrl('menu-principal/exibirFormDomiciliar', navigationExtras)
  }

  async buscarPrestador() {
    this.networkService.CheckNetworkStatus()
    if (this.networkService.NetworkStatus.value){
      this.buscarPrestadorOnline()
    }else{
      this.buscarPrestadorOffline()
    }
  }

  async buscarSegurado(){
    let beneficiario : Beneficiario = new Beneficiario()
    let prestadorModel : Prestador = new Prestador()    
    prestadorModel = this.listaPrestadores.find(x => x.idPrestador === this.prestador.value)
    beneficiario.carteiraBeneficiario = this.carteiraBeneficiario.value;
    beneficiario.nomeBeneficiario = this.nomeBeneficiario.value;
    //mensagem que ira aparecer ao clicar no botão buscar
    const loading = await this.loading.presentLoading('Buscando segurado(os)...')
    this.beneficiarioService.getBeneficiarios(beneficiario).subscribe((data: any) => {
      if(data != null && data.length > 0){
        let lista = data
        loading.dismiss()     
        let navigationExtras: NavigationExtras = {
          state: {
            lista,
            prestadorModel
          }
        };
        this.router.navigateByUrl('menu-principal/listar-beneficiarios', navigationExtras)
      }else{
        loading.dismiss()
        this.toast.errorToast("Nenhum segurado encontrado.")
      }       
    }, error => {
      this.toast.errorToast(error)
      loading.dismiss()
    })
  }

  async buscarPrestadorOnline(){
    this.listaPrestadores = []   
    this.prestador.disable()
    let prestador = new Prestador()   
    prestador.codNomePrestador = this.filtroPrestador.value;
    prestador.operadora.codOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora')).codOperadora;
    const loading = await this.loading.presentLoading('Buscando prestador(es)...')    
    this.prestadorService.getPrestadores(prestador).subscribe((data: any) => {
      this.listaPrestadores = data
      loading.dismiss()
      this.prestador.enable()
    }, error => {
      this.toast.errorToast(error)
      loading.dismiss()
    })
  }

  async buscarPrestadorOffline(){
    this.listaPrestadores = []   
    this.prestador.disable()
    let codNomePrestador = this.filtroPrestador.value;
    let operadora: Operadora = new Operadora()
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario'));
    const loading = await this.loading.presentLoading('Buscando prestador(es)...')    
    operadora.listaPrestadores.forEach(item =>{
      if(item.codPrestador.includes(codNomePrestador) || item.nomePrestador.includes(codNomePrestador.toUpperCase())){
        this.listaPrestadores.push(item)
      }      
    })
    if(this.listaPrestadores.length > 0){      
      loading.dismiss()   
      this.prestador.enable()
      if(this.listaPrestadores.length == 1){
        this.formAbrirSemSenhaDomiciliar.get("prestador").setValue(this.listaPrestadores[0].idPrestador)
        this.exibirFiltros()
      }
    }else{
      this.toast.errorToast("Nenhum prestador localizado.")
      loading.dismiss()
    }  
  }

  async limparBuscarPrestador(){
    this.listaPrestadores = []    
    this.prestador.enable()
    this.prestador.reset()
    this.showFiltros = false;  
    this.carteiraBeneficiario.reset()
    this.nomeBeneficiario.reset()
  } 
}