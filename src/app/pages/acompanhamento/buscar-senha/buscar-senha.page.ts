import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController, PopoverController } from '@ionic/angular';
import { SaudiLoadingComponent } from 'src/app/components/saudi-loading/saudi-loading.component';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { NavigationExtras, Router } from '@angular/router';
import * as moment from 'moment';
import { PrestadorService } from 'src/app/services/prestador.service';
import { Prestador } from 'src/app/model/Prestador.model';
import { Operadora } from 'src/app/model/Operadora.model';
import { StorageService} from 'src/app/services/storage.service';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';
import { NetworkService } from 'src/app/services/network.service';
import Constantes from 'src/app/config/constantes/constantes';
import { Usuario } from 'src/app/model/Usuario.model';
import { ConfigFormulario } from 'src/app/model/ConfigFormulario.model';
import { SenhaAutorizacao } from 'src/app/model/SenhaAutorizacao.model';
import { SenhaAutorizacaoService } from 'src/app/services/senhaAutorizacao.service';
import { PopoverCalendarioComponent } from 'src/app/components/popover-calendario/popover-calendario.component';

@Component({
  selector: 'app-buscar-senha',
  templateUrl: './buscar-senha.page.html',
  styleUrls: ['./buscar-senha.page.scss'],
})
export class BuscarSenhaPage implements OnInit {

  public formBuscarSenha: FormGroup;  
  public showFiltros: boolean = false 
  
  public listaPerfisFormulario = []
  public listaPrestadores = [] 

  public customPickerOptionsFiltroIni: any;
  public customPickerOptionsFiltroFim: any;

  public usuarioComecouAlterarPerfil: boolean = false
   
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private navCtrl: NavController,
    private loading: SaudiLoadingComponent,
    private toast: SaudiToastComponent,
    private prestadorService: PrestadorService,
    private senhaAutorizacaoService: SenhaAutorizacaoService,
    private storageService: StorageService,
    private networkService: NetworkService,
    public atrCtrl: AlertController,
    private popover: PopoverController,
    ) { }

  ngOnInit() {
    moment.locale('pt-br');
    this.criarFormulario()    
  }

  ionViewWillEnter() {
    this.ngOnInit()
  }

  get perfilFormulario(){
    return this.formBuscarSenha.get("perfilFormulario")
  }
  
  get prestador() {
    return this.formBuscarSenha.get('prestador')
  }  
  
  get filtroPrestador(){
    return this.formBuscarSenha.get('filtroPrestador')
  }

  get filtroSenha(){
    return this.formBuscarSenha.get('filtroSenha')
  }

  get filtroPaciente(){
    return this.formBuscarSenha.get('filtroPaciente')
  }

  get filtroInicioPeriodo(){
    return this.formBuscarSenha.get('filtroInicioPeriodo')
  }

  get filtroFinalPeriodo(){
    return this.formBuscarSenha.get('filtroFinalPeriodo')
  } 
  
  criarFormulario() {
    let usuario: Usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
    const lastYear = moment();
    lastYear.subtract(1, "year");
    this.formBuscarSenha = this.formBuilder.group({
      perfilFormulario:[usuario.configFormulario.idConfigFormulario],
      filtroPrestador: [''],
      prestador: [{
        value: '',
        disabled: true
      }, Validators.compose([Validators.required])],      
      filtroSenha: [''],      
      filtroPaciente: [''],
      filtroInicioPeriodo: [lastYear.format("DD/MM/YYYY")],
      filtroFinalPeriodo: [moment(new Date()).format("DD/MM/YYYY")]         
    })    
       
    this.listaPerfisFormulario = usuario.listaConfigFormulario
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
      if(usuario.operadora.flagUtilizaSenhaAcompMedico == 1){
        return;
      }else{
        this.router.navigateByUrl('/menu-principal/abrir-sem-senha', { replaceUrl: true });        
      }
    }  
  }

  verificarData() { 
    if(this.filtroInicioPeriodo.value != '' && this.filtroInicioPeriodo.value != null &&
       this.filtroFinalPeriodo.value != '' && this.filtroFinalPeriodo.value != null){ 
      let dataDe = new Date(moment(this.filtroInicioPeriodo.value,"DD/MM/YYYY").toISOString())
      let dataAte = new Date(moment(this.filtroFinalPeriodo.value,"DD/MM/YYYY").toISOString()) 
      if(dataAte.getTime() < dataDe.getTime()){
        this.filtroFinalPeriodo.setErrors({
          'incorrect': true
        })
        this.toast.errorToast('Data Inicial maior que a Data Final.')
      } else { 
        this.filtroFinalPeriodo.updateValueAndValidity()
      }
    }  
  }  

  async buscarPrestador() {
    this.networkService.CheckNetworkStatus()
    if (this.networkService.NetworkStatus.value){
      this.buscarPrestadorOnline()
    }else{
      this.buscarPrestadorOffline()
    }
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
      if(this.listaPrestadores.length == 1){
        this.formBuscarSenha.get("prestador").setValue(this.listaPrestadores[0].idPrestador)
        this.exibirFiltros()
      }   
    }, error => {
      this.buscarPrestadorOffline()
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
        this.formBuscarSenha.get("prestador").setValue(this.listaPrestadores[0].idPrestador)
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
    this.filtroSenha.reset()
    this.filtroPaciente.reset()
    this.filtroInicioPeriodo.reset()
    const lastYear = moment();
    lastYear.subtract(1, "year");
    this.formBuscarSenha.get("filtroInicioPeriodo").setValue(lastYear.format("DD/MM/YYYY"))  
    this.filtroFinalPeriodo.reset()
    this.formBuscarSenha.get("filtroFinalPeriodo").setValue(moment(new Date()).format("DD/MM/YYYY"))    
  } 

  exibirFiltros(){    
     this.showFiltros = true;    
  }

  async buscarSenhas(){
    //Valida o preenchimento dos filtros
    this.validaBuscaSenha().then(()=>{    
      let flgPossuiAcomp: boolean = false
      let usuario: Usuario = new Usuario()
      let configFormulario: ConfigFormulario
      usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
      //Busca formulario ativo para o usuário
      configFormulario = usuario.listaConfigFormulario.find(x => x.statusAtualConfigFormulario === 'ATIVO')
      if(configFormulario != null){
        //Verifica se está online ou offline
        this.networkService.CheckNetworkStatus()
        if (this.networkService.NetworkStatus.value){
          this.buscarSenhaOnline()     
        }else{
          //Verifica se o usuario preencheu o filtro de senha
          if(this.filtroSenha.value != ''){ 
            let acompanhamentoMedico: AcompanhamentoMedico
            //Verifica se o usuário já possui acompanhamento medico cadastrado              
            this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(items=>{  
              if(items != null){                 
                //Busca acompanhamento para usuario, formulario e senha
                acompanhamentoMedico = items.find(x => x.senhaAutorizacao.senha === this.filtroSenha.value && 
                                                  x.configFormulario.idConfigFormulario === usuario.configFormulario.idConfigFormulario )
                if(acompanhamentoMedico != null){
                  //Exibe mensagem para confirmar se o usuario quer ou não abrir o acompanhamento existente
                  this.confirmarAbrirAcompanhamentoSenhaExistente(acompanhamentoMedico)
                  flgPossuiAcomp = true
                }
              } 
            })                                                                                
          }
          if(this.filtroSenha.value == '' || !flgPossuiAcomp){
            if(usuario.operadora.flagUtilizaOfflineAcompMedico == 0){
              this.toast.errorToast("Sem acesso à internet. Não foi possível estabelecer conexão com  a internet.")
            }else{
              //Exibe mensagem para confirmar se o usuario quer ou não abrir o acompanhamento offline no dispositivo
              let mensagem = "Sem acesso a internet. Deseja abrir um acompanhamento a partir do dispositivo ?"
              this.confirmarAbrirAcompanhamentoDispositivo(mensagem)
            }   
          }
        }
      }else{
        //Se usuário não possui nenhum formulário ativo
        this.toast.errorToast("Não há formulários ativos para este usuário")
      }      
    }).catch((error) => {
      this.toast.errorToast(error) 
    })
  }

  validaBuscaSenha(){
    return new Promise((resolve) => {
      if(this.filtroSenha.value == '' && this.filtroPaciente.value == '' && 
         (this.filtroInicioPeriodo.value == '' || this.filtroInicioPeriodo.value == null) && 
         (this.filtroFinalPeriodo.value == '' ||  this.filtroFinalPeriodo.value == null)){
        this.toast.errorToast('Pelo menos um dos filtros deve ser preenchido.')          
      }else{
        if(((this.filtroInicioPeriodo.value != '' || this.filtroInicioPeriodo.value != null) && 
            (this.filtroFinalPeriodo.value == ''  || this.filtroFinalPeriodo.value == null)) ||
            ((this.filtroInicioPeriodo.value == '' || this.filtroInicioPeriodo.value == null) && 
             (this.filtroFinalPeriodo.value != ''  || this.filtroFinalPeriodo.value != null))){
            this.toast.errorToast('É obrigatório o preenchimento do campo De e Até do Período de Emissão da Senha.')                
        }else{
          if(this.filtroPaciente.value != '' && (this.filtroInicioPeriodo.value == '' || this.filtroInicioPeriodo.value == null || 
                                                 this.filtroFinalPeriodo.value == ''  || this.filtroFinalPeriodo.value == null)){
            this.toast.errorToast('É obrigatório o preenchimento do campo De e Até do Período de Emissão da Senha junto com o campo Paciente.') 
          }else{
            resolve(true)
          }  
        }
      }    
    })     
  }

  async buscarSenhaOnline(){    
    let senhaAutorizacao = new SenhaAutorizacao()
    if(this.filtroSenha.value != ''){
      senhaAutorizacao.senha = this.filtroSenha.value
    }
 
    if(this.filtroPaciente.value != ''){
      senhaAutorizacao.beneficiario.carteiraBeneficiario = this.filtroPaciente.value
    } 
 
    if(this.filtroInicioPeriodo.value != '' && this.filtroFinalPeriodo.value != ''){
      senhaAutorizacao.dataAutorizacaoInicial = this.filtroInicioPeriodo.value
      senhaAutorizacao.dataAutorizacaoFinal = this.filtroFinalPeriodo.value
    }

    senhaAutorizacao.prestador.idPrestador = this.prestador.value     
    let usuario: Usuario = new Usuario()
    usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario')) 
    senhaAutorizacao.operadora = usuario.operadora
    const loading = await this.loading.presentLoading('Buscando senha...')  
    this.senhaAutorizacaoService.getSenhasAutorizacao(senhaAutorizacao).subscribe((data: any) => {
      if(data != null && data.length > 0){
        let lista = data
        loading.dismiss()     
        let navigationExtras: NavigationExtras = {
          state: {
            lista
          }
        };
        this.navCtrl.navigateForward(['menu-principal/listar-senhas'], navigationExtras); 
      }else{
        loading.dismiss()
        if(usuario.operadora.flagUtilizaOfflineAcompMedico === 0){
          this.toast.errorToast("Nenhuma Senha de Autorização localizada.")
        }else{          
          let mensagem = "Senha não encontrada. Deseja abrir um acompanhamento a partir do dispositivo ?"
          this.confirmarAbrirAcompanhamentoDispositivo(mensagem)
        }        
      }       
    }, error => {
      this.toast.errorToast(error)
      loading.dismiss()
    })
  }

  async confirmarAbrirAcompanhamentoDispositivo(mensagem: string) {   
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
            let prestador = this.listaPrestadores.find(x=> x.idPrestador === this.prestador.value)
            let senha = this.filtroSenha.value
            let navigationExtras: NavigationExtras = {
              state: {
                prestador,
                senha
              }
            }
            this.router.navigateByUrl('menu-principal/abrir-sem-senha', navigationExtras)
          }
        }
      ]
    });
    await alert.present();
  }  

  async confirmarAbrirAcompanhamentoSenhaExistente(acompanhamentoMedico: AcompanhamentoMedico) {
    let mensagem = "Já existe um acompanhamento para a senha: "+acompanhamentoMedico.senhaAutorizacao.senha+" Abrir acompanhamento existente?"
    let flgAbrindo: boolean = false
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

  async abrirCalendarioPeriodoIni(ev: any){
    let diaIni
    if(this.filtroInicioPeriodo.value != null && this.filtroInicioPeriodo.value != ''){
      diaIni = new Date(moment(this.filtroInicioPeriodo.value,"DD/MM/YYYY").toISOString())
    }else{
      diaIni = new Date()
    }  
    
    const pop = await this.popover.create({
        component: PopoverCalendarioComponent,
        event: ev,
        cssClass: 'popover-custon',
        componentProps: {
          titulo: 'Período Inicial de Emissão de Senha',
          data: diaIni
        },      
        translucent: true            
    });   
    
    pop.onDidDismiss().then(async(result) => {
      if(result.data){ 
        this.formBuscarSenha.get("filtroInicioPeriodo").setValue(moment(result.data).format("DD/MM/YYYY"))
        await this.verificarData()
      }  
    }); 
    return await pop.present() 
  }
  
  async abrirCalendarioPeriodoFinal(ev: any){
    let diaFinal
    if(this.filtroFinalPeriodo.value != null && this.filtroFinalPeriodo.value != ''){
      diaFinal = new Date(moment(this.filtroFinalPeriodo.value,"DD/MM/YYYY").toISOString())
    }else{
      diaFinal = new Date()
    }  
    
    const pop = await this.popover.create({
        component: PopoverCalendarioComponent,
        event: ev,
        cssClass: 'popover-custon',
        componentProps: {
          titulo: 'Período Final de Emissão de Senha',
          data: diaFinal
        },      
        translucent: true            
    });   
    
    pop.onDidDismiss().then((result) => {
      if(result.data){ 
        this.formBuscarSenha.get("filtroFinalPeriodo").setValue(moment(result.data).format("DD/MM/YYYY"))
        this.verificarData()
      }  
    }); 
    return await pop.present() 
  } 
}