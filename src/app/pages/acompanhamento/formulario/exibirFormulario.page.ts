import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController, PopoverController } from '@ionic/angular';
import { SaudiLoadingComponent } from 'src/app/components/saudi-loading/saudi-loading.component';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { Router, NavigationExtras } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario.model';
import { Operadora } from 'src/app/model/Operadora.model';
import { DominioCodigo } from 'src/app/model/DominioCodigo.model';
import Constantes from 'src/app/config/constantes/constantes';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';
import { NetworkService } from 'src/app/services/network.service';
import { StorageService } from 'src/app/services/storage.service';
import { AcompanhamentoMedicoDia } from 'src/app/model/AcompanhamentoMedicoDia.model';
import { AcompanhamentoMedicoDado } from 'src/app/model/AcompanhamentoMedicoDado.model';
import { ParametrosService } from 'src/app/services/parametros.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { PopoverCalendarioComponent } from 'src/app/components/popover-calendario/popover-calendario.component';
import { SenhaAutorizacao } from 'src/app/model/SenhaAutorizacao.model';
import { SenhaAutorizacaoService } from 'src/app/services/senhaAutorizacao.service';
import { Prestador } from 'src/app/model/Prestador.model';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
    selector: 'app-exibirFormulario',
    templateUrl: './exibirFormulario.page.html',
    styleUrls: ['./exibirFormulario.page.scss'],
  })
export class ExibirFormularioPage implements OnInit {
      
  public formAcompanhamento: FormGroup;
  public acompanhamentoMedico: AcompanhamentoMedico = new AcompanhamentoMedico()
  public listaDiasAcompanhamento: AcompanhamentoMedicoDia[]
  public listaMotivosAlta: DominioCodigo[] = []
  public listaTipoAcomodacao: DominioCodigo[] = []
  public listaTipoInternacao: DominioCodigo[] = []
  public listaCaraterAtendimento: DominioCodigo[] = []
  public listaOrigemInternacao: DominioCodigo[] = []
  public opcaoExibir: string = "paciente"    
  public flgErroJustificativa: boolean = false
  public flgErroAcomodacao: boolean = false
  public flgErroTipoInternacao: boolean = false
  public flgErroCaraterAtendimento: boolean = false
  public flgErroOrigemInternacao: boolean = false
  public flgErroDataInternacao: boolean = false
  public flgErroHoraInternacao: boolean = false
  public flgErroMedicoAssistente: boolean = false  
  public flgErroCrmMedicoAssistente: boolean = false 
  public flgErroCidDiagnostico: boolean = false 
  public flgErroDataEstimadaAlta: boolean = false
  public latitude: number
  public longitude: number
  public exibeDadosPaciente: boolean = false
  public exibeDadosAutorizacao: boolean = false
  public exibeDadosAcompanhamento: boolean = false
  public exibeDadosUltimaInternacao: boolean = false
  public versionNumber: string
  
  constructor(
      public router: Router,
      private formBuilder: FormBuilder,
      private navCtrl: NavController,
      private loading: SaudiLoadingComponent,
      private toast: SaudiToastComponent,
      private atrCtrl: AlertController,
      private parametrosService: ParametrosService,
      private senhaAutorizacaoService: SenhaAutorizacaoService,
      private networkService: NetworkService,
      private storageService: StorageService,
      private geolocation: Geolocation,
      private popover: PopoverController,
      private appVersion: AppVersion,) {
        this.appVersion.getVersionNumber().then(value => {
          this.versionNumber = value;
          console.log("VERSION NUMBER >>> "+this.versionNumber)
        }).catch(error => {
          console.log('Error getting version', error);
        }); 
      } 

  ngOnInit() {
    moment.locale('pt-br')    
    this.exibeFormulario()
    this.getCurrentCoordinates()       
  }

  get dataInternacao() {
    return this.formAcompanhamento.get('dataInternacao')
  }

  get horaInternacao(){
    return this.formAcompanhamento.get('horaInternacao')
  }

  get justificativa() {
    return this.formAcompanhamento.get('justificativa')
  } 

  get dataAlta() {
    return this.formAcompanhamento.get('dataAlta')
  }

  get motivoAlta() {
    return this.formAcompanhamento.get('motivoAlta')
  } 

  get tipoAcomodacao() {
    return this.formAcompanhamento.get('tipoAcomodacao')
  }

  get tipoInternacao() {
    return this.formAcompanhamento.get('tipoInternacao')
  } 

  get caraterAtendimento() {
    return this.formAcompanhamento.get('caraterAtendimento')
  } 

  get origemInternacao() {
    return this.formAcompanhamento.get('origemInternacao')
  } 

  get medicoAssistente(){
    return this.formAcompanhamento.get('medicoAssistente')
  } 

  get crmMedicoAssistente(){
    return this.formAcompanhamento.get('crmMedicoAssistente')
  } 

  get cidDiagnostico(){
    return this.formAcompanhamento.get('cidDiagnostico')
  } 

  get dataEstimadaAlta(){
    return this.formAcompanhamento.get('dataEstimadaAlta')
  } 

  get observacao() {
    return this.formAcompanhamento.get('observacao')
  } 

  get diaAcompanhamento(){
    return this.formAcompanhamento.get('diaAcompanhamento')
  }

  get flgCopiaUltimoDia(){
    return this.formAcompanhamento.get('flgCopiaUltimoDia')
  }   

  exibeFormulario() {
    this.buscaTipoAcomodacao()
    this.buscaTipoInternacao()
    this.buscaCaraterAtendimento()
    this.buscaOrigemInternacao()
    this.buscaMotivosAlta()    
    
    let flgAbrindo: boolean = false        
    let getNav = this.router.getCurrentNavigation()
    if (getNav.extras.state) {            
      this.acompanhamentoMedico = getNav.extras.state.acompanhamentoMedico 
      flgAbrindo = getNav.extras.state.flgAbrindo
    }else {
        this.toast.errorToast('Ocorreu um erro inesperado, por favor tente novamente.')
        this.navCtrl.navigateBack('menu-principal/listarSenhas')
    }
       
    this.formAcompanhamento = this.formBuilder.group({
                    dataInternacao: ['',Validators.compose([Validators.required])],
                    horaInternacao: ['',Validators.compose([Validators.required])],
                    justificativa: ['',Validators.compose([Validators.required])],
                    dataAlta: ['',Validators.compose([Validators.required])],
                    motivoAlta: ['',Validators.compose([Validators.required])],
                    tipoAcomodacao: ['',Validators.compose([Validators.required])],
                    tipoInternacao: ['',Validators.compose([Validators.required])],
                    caraterAtendimento: ['',Validators.compose([Validators.required])],
                    origemInternacao: ['',Validators.compose([Validators.required])],
                    medicoAssistente: ['',Validators.compose([Validators.required])],
                    crmMedicoAssistente: ['',Validators.compose([Validators.required])],
                    cidDiagnostico: ['',Validators.compose([Validators.required])],
                    dataEstimadaAlta: ['',Validators.compose([Validators.required])],
                    observacao: [''],
                    diaAcompanhamento:[moment(new Date()).format("DD/MM/YYYY"),Validators.compose([Validators.required])],
                    flgCopiaUltimoDia:[false]                     
    }) 

    this.acompanhamentoMedico.dataUltimaVisualizacao = moment(new Date()).format("DD/MM/YYYY")
    
    if(this.acompanhamentoMedico.senhaAutorizacao.dataInternacao != null && this.acompanhamentoMedico.senhaAutorizacao.dataInternacao != ''){
      this.formAcompanhamento.get("dataInternacao").setValue(this.acompanhamentoMedico.senhaAutorizacao.dataInternacao)
    }

    if(this.acompanhamentoMedico.senhaAutorizacao.horaInternacao != null && this.acompanhamentoMedico.senhaAutorizacao.horaInternacao != ''){
      this.formAcompanhamento.get("horaInternacao").setValue(this.acompanhamentoMedico.senhaAutorizacao.horaInternacao)
    }

    if(this.acompanhamentoMedico.diagnosticoInternacao != null && this.acompanhamentoMedico.diagnosticoInternacao != ''){
        this.formAcompanhamento.get("justificativa").setValue(this.acompanhamentoMedico.diagnosticoInternacao)
    }
    
    if(flgAbrindo){
      this.listaDiasAcompanhamento = []
      this.flgCopiaUltimoDia.disable()      
      this.adicionarAcompanhamentoMedicoDispositivo()      
    }else{      
      if(this.acompanhamentoMedico.dataAlta){
        this.formAcompanhamento.get("dataAlta").setValue(this.acompanhamentoMedico.dataAlta)
      }
      if(this.acompanhamentoMedico.tipoAcomodacao && this.acompanhamentoMedico.tipoAcomodacao.seqDominio){
        this.formAcompanhamento.get("tipoAcomodacao").setValue(this.acompanhamentoMedico.tipoAcomodacao.seqDominio)
      }
      if(this.acompanhamentoMedico.tipoInternacao && this.acompanhamentoMedico.tipoInternacao.seqDominio){
        this.formAcompanhamento.get("tipoInternacao").setValue(this.acompanhamentoMedico.tipoInternacao.seqDominio)
      }
      if(this.acompanhamentoMedico.caraterAtendimento && this.acompanhamentoMedico.caraterAtendimento.seqDominio){
        this.formAcompanhamento.get("caraterAtendimento").setValue(this.acompanhamentoMedico.caraterAtendimento.seqDominio)
      } 
      if(this.acompanhamentoMedico.origemInternacao && this.acompanhamentoMedico.origemInternacao.seqDominio){
        this.formAcompanhamento.get("origemInternacao").setValue(this.acompanhamentoMedico.origemInternacao.seqDominio)
      } 
      if(this.acompanhamentoMedico.medicoAssistente){
        this.formAcompanhamento.get("medicoAssistente").setValue(this.acompanhamentoMedico.medicoAssistente)
      }
      if(this.acompanhamentoMedico.crmMedicoAssistente){
        this.formAcompanhamento.get("crmMedicoAssistente").setValue(this.acompanhamentoMedico.crmMedicoAssistente)
      }
      if(this.acompanhamentoMedico.cidDiagnostico && this.acompanhamentoMedico.cidDiagnostico.codDominio){
        this.formAcompanhamento.get("cidDiagnostico").setValue(this.acompanhamentoMedico.cidDiagnostico.codDominio)
      } 
      if(this.acompanhamentoMedico.dataEstimadaAlta){
        this.formAcompanhamento.get("dataEstimadaAlta").setValue(this.acompanhamentoMedico.dataEstimadaAlta)
      }      
      if(this.acompanhamentoMedico.motivoAlta && this.acompanhamentoMedico.motivoAlta.seqDominio){
        this.formAcompanhamento.get("motivoAlta").setValue(this.acompanhamentoMedico.motivoAlta.seqDominio)
      }
      this.formAcompanhamento.get("observacao").setValue(this.acompanhamentoMedico.obsEncerramento)    
      if(this.acompanhamentoMedico.listaAcompanhamentoDia){    
        this.listaDiasAcompanhamento = this.acompanhamentoMedico.listaAcompanhamentoDia
      }else{
        this.listaDiasAcompanhamento = []
        this.flgCopiaUltimoDia.disable()
      }
      if(this.acompanhamentoMedico.status === Constantes.STATUS_ENCERRADO){
        this.dataInternacao.disable()
        this.horaInternacao.disable()
        this.justificativa.disable()
        this.dataAlta.disable()
        this.tipoAcomodacao.disable()
        this.tipoInternacao.disable()
        this.caraterAtendimento.disable()
        this.origemInternacao.disable()
        this.medicoAssistente.disable()
        this.crmMedicoAssistente.disable()
        this.cidDiagnostico.disable()
        this.dataEstimadaAlta.disable()
        this.motivoAlta.disable()
        this.observacao.disable()
        this.diaAcompanhamento.disable()
        this.flgCopiaUltimoDia.disable()                    
      }
      this.atualizarAcompanhamentoMedicoDispositivo()      
    } 
    this.getUltimaInternacao()           
  }  

  adicionarAcompanhamentoMedicoDispositivo(){
    this.storageService.adicionar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,this.acompanhamentoMedico)
  }

  segmentChanged(ev: any) {
      this.opcaoExibir = ev.detail.value  
  }
  
  async buscaMotivosAlta(){
    this.networkService.CheckNetworkStatus()
    if (this.networkService.NetworkStatus.value){
      await this.buscaMotivosAltaOnline()
    }else{
      await this.buscaMotivosAltaOffline()
    }           
  }

  async buscaMotivosAltaOnline(){
    let operadora = new Operadora
    let dominioCodigo = new DominioCodigo
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
    dominioCodigo.codTabela = Constantes.TABELA_MOTIVO_ALTA      
    dominioCodigo.operadora = operadora
    const loading = await this.loading.presentLoading('Buscando Motivos de Alta...')  
    this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe((data: any) => {
      this.listaMotivosAlta = data        
      loading.dismiss()   
    }, async error => {
      await this.buscaMotivosAltaOffline()
      loading.dismiss()
    }) 
  }

  async buscaMotivosAltaOffline(){
    const loading = await this.loading.presentLoading('Buscando Motivos de Alta...')  
    this.storageService.buscarTodos(Constantes.STORAGE_MOTIVO_SAIDA).then(items=>{
      if(items != null){
        this.listaMotivosAlta = items;
        loading.dismiss()   
      }  
    }, error => {
      this.toast.errorToast(error)
      loading.dismiss()
    }) 
  }

  async buscaTipoAcomodacao(){
    this.networkService.CheckNetworkStatus()
    if (this.networkService.NetworkStatus.value){
      await this.buscaTipoAcomodacaoOnline()
    }else{
      await this.buscaTipoAcomodacaoOffline()
    }           
  }

  async buscaTipoAcomodacaoOnline(){
    let operadora = new Operadora
    let dominioCodigo = new DominioCodigo
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
    dominioCodigo.codTabela = Constantes.TABELA_TIPO_ACOMODACAO      
    dominioCodigo.operadora = operadora
    const loading = await this.loading.presentLoading('Buscando Acomodação...')  
    this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe((data: any) => {
      this.listaTipoAcomodacao = data        
      loading.dismiss()   
    }, async error => {
      await this.buscaTipoAcomodacaoOffline()
      loading.dismiss()
    }) 
  }

  async buscaTipoAcomodacaoOffline(){
    const loading = await this.loading.presentLoading('Buscando Acomodação...')  
    this.storageService.buscarTodos(Constantes.STORAGE_TIPO_ACOMODACAO).then(items=>{
      if(items != null){
        this.listaTipoAcomodacao = items;
        loading.dismiss()   
      }  
    }, error => {
      this.toast.errorToast(error)
      loading.dismiss()
    }) 
  }
  
  async buscaTipoInternacao(){
    this.networkService.CheckNetworkStatus()
    if (this.networkService.NetworkStatus.value){
      await this.buscaTipoInternacaoOnline()
    }else{
      await this.buscaTipoInternacaoOffline()
    }           
  }

  async buscaTipoInternacaoOnline(){
    let operadora = new Operadora
    let dominioCodigo = new DominioCodigo
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
    dominioCodigo.codTabela = Constantes.TABELA_TIPO_INTERNACAO      
    dominioCodigo.operadora = operadora
    const loading = await this.loading.presentLoading('Buscando Tipo de Internação...')  
    this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe((data: any) => {
      this.listaTipoInternacao = data        
      loading.dismiss()   
    }, async error => {
      await this.buscaTipoInternacaoOffline()
      loading.dismiss()
    }) 
  }

  async buscaTipoInternacaoOffline(){
    const loading = await this.loading.presentLoading('Buscando Tipo de Internação...')  
    this.storageService.buscarTodos(Constantes.STORAGE_TIPO_INTERNACAO).then(items=>{
      if(items != null){
        this.listaTipoInternacao = items;
        loading.dismiss()   
      }  
    }, error => {
      this.toast.errorToast(error)
      loading.dismiss()
    }) 
  }
  
  async buscaCaraterAtendimento(){
    this.networkService.CheckNetworkStatus()
    if (this.networkService.NetworkStatus.value){
      await this.buscaCaraterAtendimentoOnline()
    }else{
      await this.buscaCaraterAtendimentoOffline()
    }           
  }

  async buscaCaraterAtendimentoOnline(){
    let operadora = new Operadora
    let dominioCodigo = new DominioCodigo
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
    dominioCodigo.codTabela = Constantes.TABELA_CARATER_ATENDIMENTO      
    dominioCodigo.operadora = operadora
    const loading = await this.loading.presentLoading('Buscando Caráter do Atendimento...')  
    this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe((data: any) => {
      this.listaCaraterAtendimento = data        
      loading.dismiss()   
    }, async error => {
      await this.buscaCaraterAtendimentoOffline()
      loading.dismiss()
    }) 
  }

  async buscaCaraterAtendimentoOffline(){
    const loading = await this.loading.presentLoading('Buscando Caráter do Atendimento...')  
    this.storageService.buscarTodos(Constantes.STORAGE_CARATER_ATENDIMENTO).then(items=>{
      if(items != null){
        this.listaCaraterAtendimento = items;
        loading.dismiss()   
      }  
    }, error => {
      this.toast.errorToast(error)
      loading.dismiss()
    }) 
  }

  async buscaOrigemInternacao(){
    this.networkService.CheckNetworkStatus()
    if (this.networkService.NetworkStatus.value){
      await this.buscaOrigemInternacaoOnline()
    }else{
      await this.buscaOrigemInternacaoOffline()
    }           
  }

  async buscaOrigemInternacaoOnline(){
    let operadora = new Operadora
    let dominioCodigo = new DominioCodigo
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
    dominioCodigo.codTabela = Constantes.TABELA_ORIGEM_INTERNACAO      
    dominioCodigo.operadora = operadora
    const loading = await this.loading.presentLoading('Buscando Origem Internação...')  
    this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe((data: any) => {
      this.listaOrigemInternacao = data        
      loading.dismiss()   
    }, async error => {
      await this.buscaOrigemInternacaoOffline()
      loading.dismiss()
    }) 
  }

  async buscaOrigemInternacaoOffline(){
    const loading = await this.loading.presentLoading('Buscando Origem Internação...')  
    this.storageService.buscarTodos(Constantes.STORAGE_ORIGEM_INTERNACAO).then(items=>{
      if(items != null){
        this.listaOrigemInternacao = items;
        loading.dismiss()   
      }  
    }, error => {
      this.toast.errorToast(error)
      loading.dismiss()
    }) 
  }

  async adicionarDiaAcompanhamento(){     
    let usuario: Usuario = new Usuario()
    usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
    //Valida os campos obrigatórios    
    if(!this.justificativa.valid || !this.dataInternacao.valid || !this.horaInternacao.valid ||  this.tipoAcomodacao.value == "" || 
       this.tipoInternacao.value == "" || this.caraterAtendimento.value == "" || this.origemInternacao.value == "" || 
       !this.medicoAssistente.valid || !this.crmMedicoAssistente.valid || !this.cidDiagnostico.valid || 
       !this.dataEstimadaAlta.valid || this.diaAcompanhamento.invalid){
      this.toast.errorToast('Preencha os campos obrigatórios.')

      if(!this.justificativa.valid){          
        this.justificativa.setErrors({'incorrect': true})
        this.justificativa.invalid  
        this.opcaoExibir = "paciente" 
        this.flgErroJustificativa = true 
        this.exibeDadosAutorizacao = true              
      } 
      
      if(this.tipoAcomodacao.value == ""){ 
        this.flgErroAcomodacao = true         
        this.opcaoExibir = "paciente" 
        this.exibeDadosAcompanhamento = true               
      }

      if(this.tipoInternacao.value == ""){ 
        this.flgErroTipoInternacao = true         
        this.opcaoExibir = "paciente" 
        this.exibeDadosAcompanhamento = true               
      }

      if(this.caraterAtendimento.value == ""){ 
        this.flgErroCaraterAtendimento = true         
        this.opcaoExibir = "paciente" 
        this.exibeDadosAcompanhamento = true               
      }

      if(this.origemInternacao.value == ""){ 
        this.flgErroOrigemInternacao = true         
        this.opcaoExibir = "paciente"  
        this.exibeDadosAcompanhamento = true              
      }

      if(!this.medicoAssistente.valid){          
        this.medicoAssistente.setErrors({'incorrect': true})
        this.medicoAssistente.invalid  
        this.opcaoExibir = "paciente" 
        this.flgErroMedicoAssistente = true
        this.exibeDadosAcompanhamento = true               
      } 

      if(!this.crmMedicoAssistente.valid){          
        this.crmMedicoAssistente.setErrors({'incorrect': true})
        this.crmMedicoAssistente.invalid  
        this.opcaoExibir = "paciente" 
        this.flgErroCrmMedicoAssistente = true
        this.exibeDadosAcompanhamento = true               
      } 
      
      if(!this.cidDiagnostico.valid){          
        this.cidDiagnostico.setErrors({'incorrect': true})
        this.cidDiagnostico.invalid  
        this.opcaoExibir = "paciente" 
        this.flgErroCidDiagnostico = true
        this.exibeDadosAcompanhamento = true               
      } 
      
      if(!this.dataEstimadaAlta.valid){          
        this.dataEstimadaAlta.setErrors({'incorrect': true})
        this.dataEstimadaAlta.invalid  
        this.opcaoExibir = "paciente" 
        this.flgErroDataEstimadaAlta = true
        this.exibeDadosAcompanhamento = true       
      }

      if(!this.dataInternacao.valid){          
        this.dataInternacao.setErrors({'incorrect': true})
        this.dataInternacao.invalid  
        this.opcaoExibir = "paciente" 
        this.flgErroDataInternacao = true 
        this.exibeDadosAutorizacao = true       
      } 

      if(!this.horaInternacao.valid){
        this.horaInternacao.setErrors({'incorrect': true})
        this.horaInternacao.invalid  
        this.opcaoExibir = "paciente" 
        this.flgErroHoraInternacao = true
        this.exibeDadosAutorizacao = true
      }

      if(this.diaAcompanhamento.invalid){
        this.diaAcompanhamento.setErrors({'incorrect': true})
        this.diaAcompanhamento.invalid
      }
    }else{
      //Valida o dia do acompanhamento
      if(this.diaAcompanhamento.valid){
        let dataAtual = new Date(moment(moment().format("DD/MM/YYYY"),"DD/MM/YYYY").toISOString())
        //let dataDiaAcompanhamento = new Date(moment(moment(this.diaAcompanhamento.value).format("DD/MM/YYYY"),"DD/MM/YYYY").toISOString())
        let dataDiaAcompanhamento = new Date(moment(this.diaAcompanhamento.value,"DD/MM/YYYY").toISOString())
        let dataInternacao =  new Date(moment(this.dataInternacao.value,"DD/MM/YYYY").toISOString())
        if(this.acompanhamentoMedico.listaAcompanhamentoDia != null && this.acompanhamentoMedico.listaAcompanhamentoDia.length > 0){
          let acompanhamentoMedicoDia: AcompanhamentoMedicoDia = new AcompanhamentoMedicoDia()
          acompanhamentoMedicoDia = this.acompanhamentoMedico.listaAcompanhamentoDia.find(x=> x.diaAcompanhamento === this.diaAcompanhamento.value) 
          if(acompanhamentoMedicoDia != null){
            this.toast.errorToast('Dia de Acompanhamento existente !')
            return
          }
        }
        if(dataInternacao > dataDiaAcompanhamento){
          this.toast.errorToast('Dia de acompanhamento não pode ser anterior a data de internação.')
          return
        }
        if(dataAtual < dataDiaAcompanhamento){
          this.toast.errorToast('Dia de acompanhamento não pode ser posterior a data atual.')
          return
        }
        if(usuario.operadora.flagBloqueiaDiaAnterior === 1 && dataAtual > dataDiaAcompanhamento){
          this.toast.errorToast('Dia de acompanhamento não pode ser anterior a data atual.')
          return
        }        
        if(usuario.operadora.flagBloqueiaVisitaAcomp === 1 && dataAtual.getMonth() !== dataDiaAcompanhamento.getMonth()){
          this.toast.errorToast('Mês de acompanhamento não pode ser diferente do mês atual.')
          return
        }
      }      
      //Recupera os campos preenchidos do acompanhamento
      let tipoAcomodacao = new DominioCodigo()
      tipoAcomodacao.seqDominio = this.tipoAcomodacao.value
      this.acompanhamentoMedico.tipoAcomodacao = tipoAcomodacao
      
      let tipoInternacao = new DominioCodigo()
      tipoInternacao.seqDominio = this.tipoInternacao.value
      this.acompanhamentoMedico.tipoInternacao = tipoInternacao
      
      let caraterAtendimento = new DominioCodigo()
      caraterAtendimento.seqDominio = this.caraterAtendimento.value
      this.acompanhamentoMedico.caraterAtendimento = caraterAtendimento
      
      let origemInternacao = new DominioCodigo()
      origemInternacao.seqDominio = this.origemInternacao.value
      this.acompanhamentoMedico.origemInternacao = origemInternacao
      
      this.acompanhamentoMedico.medicoAssistente = this.medicoAssistente.value
      
      this.acompanhamentoMedico.crmMedicoAssistente = this.crmMedicoAssistente.value      
               
      let motivoAlta = new DominioCodigo()
      this.acompanhamentoMedico.diagnosticoInternacao = this.justificativa.value
      motivoAlta.seqDominio = this.motivoAlta.value
      this.acompanhamentoMedico.motivoAlta = motivoAlta
      
      this.acompanhamentoMedico.obsEncerramento = this.observacao.value

      //Se ainda não preencheu a versão do app preenche nesse momento. Usado para controle no momento de troca de versão
      if(this.versionNumber != null){
        this.acompanhamentoMedico.appVersion = this.versionNumber
      } 

      //Cria o objeto do dia
      let acompanhamentoMedicoDia: AcompanhamentoMedicoDia = new AcompanhamentoMedicoDia()      
      acompanhamentoMedicoDia.diaAcompanhamento = this.diaAcompanhamento.value
      acompanhamentoMedicoDia.diaSemanaAcompanhamento = moment(new Date(moment(this.diaAcompanhamento.value,"DD/MM/YYYY").toISOString())).format("dddd")
      acompanhamentoMedicoDia.statusSincronismo = Constantes.STATUS_PENDENTE
      if(this.latitude != null){
        acompanhamentoMedicoDia.latitude = this.latitude.toString()
        acompanhamentoMedicoDia.longitude = this.longitude.toString()
      }
      acompanhamentoMedicoDia.listaAcompanhamentoDado = [] 
      //Verifica se o check de copiar o ultimo dia está marcado
      if(this.flgCopiaUltimoDia.value){
        let acompamentoDiaCopiado: AcompanhamentoMedicoDia = new AcompanhamentoMedicoDia()        
        acompamentoDiaCopiado = this.acompanhamentoMedico.listaAcompanhamentoDia[this.acompanhamentoMedico.listaAcompanhamentoDia.length - 1]
        acompanhamentoMedicoDia.resumoDia = acompamentoDiaCopiado.resumoDia
        acompanhamentoMedicoDia.listaAcompanhamentoDado = acompamentoDiaCopiado.listaAcompanhamentoDado
        this.acompanhamentoMedico.listaAcompanhamentoDia.push(acompanhamentoMedicoDia)
        this.listaDiasAcompanhamento = this.listaDiasAcompanhamento.sort((b, a) => new Date(moment(b.diaAcompanhamento,"DD/MM/YYYY").toISOString()).getTime()  - new Date(moment(a.diaAcompanhamento,"DD/MM/YYYY").toISOString()).getTime());      
        this.atualizarAcompanhamentoMedicoDispositivo()     
      }else{
        //Recupera os dados da configuração do formulário, atualiza a lista de dias e ordena
        usuario.configFormulario.listaGrupoConfigFormulario.forEach(grupo=>{
          grupo.listaItemGrupoConfigFormulario.forEach(item=>{
            item.listaDadoItemGrupoConfigFormulario.forEach(dado=>{
              let acompanhamentoDado: AcompanhamentoMedicoDado = new AcompanhamentoMedicoDado()
              acompanhamentoDado.dadoItemGrupoConfigFormulario = dado                
              acompanhamentoMedicoDia.listaAcompanhamentoDado.push(acompanhamentoDado)
            })
          })
        })        
        this.acompanhamentoMedico.listaAcompanhamentoDia.push(acompanhamentoMedicoDia)        
        this.listaDiasAcompanhamento = this.acompanhamentoMedico.listaAcompanhamentoDia 
        this.listaDiasAcompanhamento = this.listaDiasAcompanhamento.sort((b, a) => new Date(moment(b.diaAcompanhamento,"DD/MM/YYYY").toISOString()).getTime()  - new Date(moment(a.diaAcompanhamento,"DD/MM/YYYY").toISOString()).getTime());      
        this.atualizarAcompanhamentoMedicoDispositivo()
      }
      //habilita o check para permitir a copia do ultimo dia
      this.flgCopiaUltimoDia.enable()                     
    }
  }

  atualizarAcompanhamentoMedicoDispositivo(){    
    this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,this.acompanhamentoMedico,"senhaAutorizacao.senha")
  }

  async abrirTelaDiaAcompanhamento(acompanhamentoMedicoDia: AcompanhamentoMedicoDia){
    let acompanhamentoMedico: AcompanhamentoMedico = this.acompanhamentoMedico
    let navigationExtras: NavigationExtras = {
      state: {
        acompanhamentoMedico,
        acompanhamentoMedicoDia
      }
    }
    this.router.navigateByUrl('menu-principal/dia-acompanhamento', navigationExtras)
  }

  verificaDiasCamposObrigatorios(acompanhamentoDia: AcompanhamentoMedicoDia){ 
    if(acompanhamentoDia.listaAcompanhamentoDado.length > 0){ 
      for(let dado of acompanhamentoDia.listaAcompanhamentoDado){
        if(dado.dadoItemGrupoConfigFormulario.flgObrigatorio){
          if(dado.dadoItemGrupoConfigFormulario.tipoDado == 'LIVRE ESCOLHA'){
            if(dado.listaAcompanhamentoItem.length == 0){          
              return false
            }
          }else{
            if(dado.dadoItemGrupoConfigFormulario.tipoDado !== 'SIM OU NÃO' && !dado.valorDado){          
              return false
            }
          } 
        }   
      }
    }    
    return true    
  }

  async apagarDiaAcompanhamento(index:number) {
    if(this.listaDiasAcompanhamento[index].statusSincronismo === Constantes.STATUS_SINCRONIZADO || this.listaDiasAcompanhamento[index].statusSincronismo === Constantes.STATUS_RESTAURADO){
      this.toast.errorToast("Não é possível excluir dia sincronizado.") 
    }else{
      let mensagem = "Dia de Acompanhamento: "+ this.listaDiasAcompanhamento[index].diaAcompanhamento+", "+this.listaDiasAcompanhamento[index].diaSemanaAcompanhamento
      const alert = await this.atrCtrl.create({
        header: 'Deseja realmente excluir o dia abaixo?',
        message: mensagem,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: (blah) => {}
          }, {
            text: 'Confirmar',
            handler: () => {   
              this.listaDiasAcompanhamento.forEach((item,indice)=>{
                if(indice==index){
                  this.listaDiasAcompanhamento.splice(indice,1);
                }  
              });
              this.acompanhamentoMedico.listaAcompanhamentoDia = this.listaDiasAcompanhamento
              this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,this.acompanhamentoMedico,"senhaAutorizacao.senha")                 
            }
          }
        ]
      });
      await alert.present();
    }
  } 

  async atualizaCampos(){
     
    if(this.horaInternacao.valid){
      let hora = moment(this.horaInternacao.value, 'hh:mm a').format('HH:mm');
      this.formAcompanhamento.get('horaInternacao').setValue(this.horaInternacao.value.trim())
      this.acompanhamentoMedico.horaInternacao = hora
      this.acompanhamentoMedico.senhaAutorizacao.horaInternacao = hora
      this.flgErroHoraInternacao = false
    }
   
    let tipoAcomodacao: DominioCodigo = new DominioCodigo()
    tipoAcomodacao = this.listaTipoAcomodacao.find(x => x.seqDominio === this.tipoAcomodacao.value)
    this.acompanhamentoMedico.tipoAcomodacao = tipoAcomodacao
    this.flgErroAcomodacao = false
    if(this.tipoAcomodacao.value == 'Selecione'){
      this.formAcompanhamento.get("tipoAcomodacao").setValue('')
      this.flgErroAcomodacao = true     
    }
    let tipoInternacao: DominioCodigo = new DominioCodigo()
    tipoInternacao = this.listaTipoInternacao.find(x => x.seqDominio === this.tipoInternacao.value)
    this.acompanhamentoMedico.tipoInternacao = tipoInternacao
    this.flgErroTipoInternacao = false
    if(this.tipoInternacao.value == 'Selecione'){
      this.formAcompanhamento.get("tipoInternacao").setValue('')
      this.flgErroTipoInternacao = true 
    }
    let caraterAtendimento: DominioCodigo = new DominioCodigo()
    caraterAtendimento = this.listaCaraterAtendimento.find(x => x.seqDominio === this.caraterAtendimento.value)
    this.acompanhamentoMedico.caraterAtendimento = caraterAtendimento
    this.flgErroCaraterAtendimento = false
    if(this.caraterAtendimento.value == 'Selecione'){
      this.formAcompanhamento.get("caraterAtendimento").setValue('')
      this.flgErroCaraterAtendimento = true 
    }
    let origemInternacao: DominioCodigo = new DominioCodigo()
    origemInternacao = this.listaOrigemInternacao.find(x => x.seqDominio === this.origemInternacao.value)
    this.acompanhamentoMedico.origemInternacao = origemInternacao
    this.flgErroOrigemInternacao = false
    if(this.origemInternacao.value == 'Selecione'){
      this.formAcompanhamento.get("origemInternacao").setValue('')
      this.flgErroOrigemInternacao = true 
    }    
    if(this.medicoAssistente.valid){
      this.formAcompanhamento.get('medicoAssistente').setValue(this.medicoAssistente.value.trim())
      this.acompanhamentoMedico.medicoAssistente = this.medicoAssistente.value.trim()
      this.flgErroMedicoAssistente = false
    }else{
      this.acompanhamentoMedico.medicoAssistente = ""
    }
    if(this.crmMedicoAssistente.valid){
      this.formAcompanhamento.get('crmMedicoAssistente').setValue(this.crmMedicoAssistente.value)
      this.acompanhamentoMedico.crmMedicoAssistente = this.crmMedicoAssistente.value
      this.flgErroCrmMedicoAssistente = false
    }else{
      this.acompanhamentoMedico.crmMedicoAssistente = null
    }
    let cidDiagnostico: DominioCodigo = new DominioCodigo()
    if(this.cidDiagnostico.valid){      
      this.formAcompanhamento.get('cidDiagnostico').setValue(this.cidDiagnostico.value.trim())
      this.networkService.CheckNetworkStatus()
      if (this.networkService.NetworkStatus.value){
        await this.validarCid()         
      }else{
        cidDiagnostico.codDominio = this.cidDiagnostico.value.trim()
        this.acompanhamentoMedico.cidDiagnostico = cidDiagnostico
      }
      this.flgErroCidDiagnostico = false
    }else{
      this.acompanhamentoMedico.cidDiagnostico = cidDiagnostico
    }      
    let motivoAlta: DominioCodigo = new DominioCodigo()
    motivoAlta = this.listaMotivosAlta.find(x => x.seqDominio === this.motivoAlta.value)
    this.acompanhamentoMedico.motivoAlta = motivoAlta
    if(this.motivoAlta.value == 'Selecione'){
      this.formAcompanhamento.get("motivoAlta").setValue('')      
    }
    if(this.observacao.value != null){
      this.formAcompanhamento.get('observacao').setValue(this.observacao.value.trim())
      this.acompanhamentoMedico.obsEncerramento = this.observacao.value.trim()
    }        
    if(this.justificativa.valid){
      this.formAcompanhamento.get('justificativa').setValue(this.justificativa.value.trim())
      this.acompanhamentoMedico.diagnosticoInternacao = this.justificativa.value.trim()
      this.flgErroJustificativa = false
    }     

    //Se ainda não preencheu a versão do app preenche nesse momento. Usado para controle no momento de troca de versão
    if(this.versionNumber != null){
      this.acompanhamentoMedico.appVersion = this.versionNumber
    } 
    this.acompanhamentoMedico.statusSincronismo = Constantes.STATUS_PENDENTE
    this.acompanhamentoMedico.flgExibeGifProcessando = false
    this.acompanhamentoMedico.flgExibeSucessoProcesso = false
    this.acompanhamentoMedico.flgExibeErroProcesso = false
    await this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,this.acompanhamentoMedico,"senhaAutorizacao.senha")
  }

  encerrarAuditoria(){
    let usuario: Usuario = new Usuario()
    usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario')) 
    let dataAtual = new Date()
    let dataInternacao =  new Date(moment(this.dataInternacao.value,"DD/MM/YYYY").toISOString())
    let dataAlta =  new Date(moment(this.dataAlta.value,"DD/MM/YYYY").toISOString())
    //Valida se a data da alta é anterior a data da internação
    if(dataAlta < dataInternacao){
      this.toast.errorToast('Data da alta não pode ser anterior a data da internação.')
      return
    }
    //Valida se a data da alta é inferior a alguma data do acompanhamentoDia
    for(let dia of this.listaDiasAcompanhamento){
      let dataDia = new Date(moment(dia.diaAcompanhamento,"DD/MM/YYYY").toISOString())
      //Valida se operadora deve validar e se o dia é posterior a data da alta
      if(usuario.operadora.flagBloqueiaDiaPosteriorAlta === 1 && dataAlta < dataDia){
        this.toast.errorToast('Data da alta não pode ser anterior a data do dia ('+dia.diaAcompanhamento+').')
        return
      }
      if(!this.verificaDiasCamposObrigatorios(dia)){
        this.toast.errorToast('Preencha os campos obrigatórios do dia ('+dia.diaAcompanhamento+').')
        return
      }
    }    
    //Valida se a data da alta é posterior ao dia atual
    if(dataAlta > dataAtual){
      this.toast.errorToast('Data da alta não pode ser posterior a data atual.')
      return
    }
    //Valida se a data de internação é posterior a data atual
    if(dataInternacao > dataAtual){
      this.toast.errorToast('Data da internação não pode ser posterior a data atual.')
      return
    }
    let tipoAcomodacao: DominioCodigo = new DominioCodigo()
    tipoAcomodacao = this.listaTipoAcomodacao.find(x => x.seqDominio === this.tipoAcomodacao.value)
    this.acompanhamentoMedico.tipoAcomodacao = tipoAcomodacao
    this.acompanhamentoMedico.dataAlta = this.dataAlta.value
    let motivoAlta: DominioCodigo = new DominioCodigo()
    motivoAlta = this.listaMotivosAlta.find(x => x.seqDominio === this.motivoAlta.value)
    this.acompanhamentoMedico.motivoAlta = motivoAlta
    this.acompanhamentoMedico.obsEncerramento = this.observacao.value
    this.acompanhamentoMedico.dataInternacao =  this.dataInternacao.value
    this.acompanhamentoMedico.senhaAutorizacao.dataInternacao = this.dataInternacao.value
    this.acompanhamentoMedico.diagnosticoInternacao = this.justificativa.value
    let tipoInternacao: DominioCodigo = new DominioCodigo()
    tipoInternacao = this.listaTipoInternacao.find(x => x.seqDominio === this.tipoInternacao.value)
    this.acompanhamentoMedico.tipoInternacao = tipoInternacao
    let caraterAtendimento: DominioCodigo = new DominioCodigo()
    caraterAtendimento = this.listaCaraterAtendimento.find(x => x.seqDominio === this.caraterAtendimento.value)
    this.acompanhamentoMedico.caraterAtendimento = caraterAtendimento
    let origemInternacao: DominioCodigo = new DominioCodigo()
    origemInternacao = this.listaOrigemInternacao.find(x => x.seqDominio === this.origemInternacao.value)
    this.acompanhamentoMedico.origemInternacao = origemInternacao
    this.acompanhamentoMedico.medicoAssistente = this.medicoAssistente.value
    this.acompanhamentoMedico.crmMedicoAssistente = this.crmMedicoAssistente.value
    this.acompanhamentoMedico.dataEstimadaAlta = this.dataEstimadaAlta.value
    this.acompanhamentoMedico.status = Constantes.STATUS_ENCERRADO
    this.acompanhamentoMedico.statusSincronismo = Constantes.STATUS_PENDENTE
    this.acompanhamentoMedico.flgExibeGifProcessando = false
    this.acompanhamentoMedico.flgExibeSucessoProcesso = false
    this.acompanhamentoMedico.flgExibeErroProcesso = false
    this.acompanhamentoMedico.dataEncerramento = moment(new Date()).format("DD/MM/YYYY")
    //Se ainda não preencheu a versão do app preenche nesse momento. Usado para controle no momento de troca de versão
    if(this.versionNumber != null){
      this.acompanhamentoMedico.appVersion = this.versionNumber
    } 
    this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,this.acompanhamentoMedico,"senhaAutorizacao.senha")
    this.toast.successToast('Acompanhamento encerrado com sucesso')
    let navigationExtras: NavigationExtras = {
      state: {}
    }
    this.router.navigateByUrl('', navigationExtras)
  }

  getCurrentCoordinates(){
    this.geolocation.getCurrentPosition().then((resp) => {  
        this.latitude = resp.coords.latitude;  
        this.longitude = resp.coords.longitude;
    }).catch((error) => {
        console.log('Error getting location', error);
    });
  }

  
  async abrirCalendarioDataInternacao(ev: any){
    let dataInternacao    
    if(this.dataInternacao.value != null && this.dataInternacao.value != ''){
      dataInternacao = new Date(moment(this.dataInternacao.value,"DD/MM/YYYY").toISOString())
    }else{
      dataInternacao = new Date()
    }  
    
    const pop = await this.popover.create({
        component: PopoverCalendarioComponent,
        event: ev,
        cssClass: 'popover-custon',
        componentProps: {
          titulo: 'Data Internação',
          data: dataInternacao
        },      
        translucent: true            
    });   
    
    pop.onDidDismiss().then(async (result) => {
      if(result.data){
        let dataInternacao = result.data
        if(dataInternacao != null && dataInternacao != ''){  
          this.acompanhamentoMedico.senhaAutorizacao.dataInternacao = moment(dataInternacao).format("DD/MM/YYYY")
          this.acompanhamentoMedico.dataInternacao = moment(dataInternacao).format("DD/MM/YYYY")
          this.formAcompanhamento.get("dataInternacao").setValue(this.acompanhamentoMedico.dataInternacao)
          this.flgErroDataInternacao = false
        } else{
          this.acompanhamentoMedico.dataInternacao = '';
          this.acompanhamentoMedico.senhaAutorizacao.dataInternacao = '';
        }
        //Se ainda não preencheu a versão do app preenche nesse momento. Usado para controle no momento de troca de versão
        if(this.versionNumber != null){
          this.acompanhamentoMedico.appVersion = this.versionNumber
        } 
        await this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,this.acompanhamentoMedico,"senhaAutorizacao.senha")
      }  
    });       
    return await pop.present() 
  }

  async limparDataInternacao(){
    this.dataInternacao.reset()
    this.acompanhamentoMedico.senhaAutorizacao.dataInternacao = ''
    this.acompanhamentoMedico.dataInternacao = ''
    await this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,this.acompanhamentoMedico,"senhaAutorizacao.senha")
  }

  async abrirCalendarioDataAlta(ev: any){
    let dataAlta
    if(this.dataAlta.value != null && this.dataAlta.value != ''){
      dataAlta = new Date(moment(this.dataAlta.value,"DD/MM/YYYY").toISOString())
    }else{
      dataAlta = new Date()
    }  
    
    const pop = await this.popover.create({
        component: PopoverCalendarioComponent,
        event: ev,
        cssClass: 'popover-custon',
        componentProps: {
          titulo: 'Data Alta',
          data: dataAlta
        },      
        translucent: true            
    });   
    
    pop.onDidDismiss().then(async (result) => {
      if(result.data){ 
        let dataAlta = result.data  
        if(dataAlta != null && dataAlta != ''){
          this.acompanhamentoMedico.dataAlta = moment(dataAlta).format("DD/MM/YYYY")
          this.formAcompanhamento.get("dataAlta").setValue(this.acompanhamentoMedico.dataAlta)
        }else{
          this.acompanhamentoMedico.dataAlta = '';
        }
        //Se ainda não preencheu a versão do app preenche nesse momento. Usado para controle no momento de troca de versão
        if(this.versionNumber != null){
          this.acompanhamentoMedico.appVersion = this.versionNumber
        } 
        await this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,this.acompanhamentoMedico,"senhaAutorizacao.senha")
      }  
    }); 
    return await pop.present() 
  }

  async limparDataAlta(){
    this.dataAlta.reset()
    this.acompanhamentoMedico.dataAlta = '';
    await this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,this.acompanhamentoMedico,"senhaAutorizacao.senha")  
  }

  async abrirCalendarioDiaAcompanhamento(ev: any){
    let diaAcompanhamento
    if(this.diaAcompanhamento.value != null && this.diaAcompanhamento.value != ''){
      diaAcompanhamento = new Date(moment(this.diaAcompanhamento.value,"DD/MM/YYYY").toISOString())
    }else{
      diaAcompanhamento = new Date()
    }  
    
    const pop = await this.popover.create({
        component: PopoverCalendarioComponent,
        event: ev,
        cssClass: 'popover-custon',
        componentProps: {
          titulo: 'Dia Acompanhamento',
          data: diaAcompanhamento
        },      
        translucent: true            
    });   
    
    pop.onDidDismiss().then((result) => {
      if(result.data){ 
        let diaAcompanhamento = result.data  
        if(diaAcompanhamento != null && diaAcompanhamento != ''){
          this.formAcompanhamento.get("diaAcompanhamento").setValue(moment(diaAcompanhamento).format("DD/MM/YYYY"))
        }else{
          this.formAcompanhamento.get("diaAcompanhamento").setValue(moment(new Date()).format("DD/MM/YYYY"))
        }
      }  
    }); 
    return await pop.present() 
  } 

  async abrirCalendarioDataEstimadaAlta(ev: any){
    let dataEstimadaAlta    
    if(this.dataEstimadaAlta.value != null && this.dataEstimadaAlta.value != ''){
      dataEstimadaAlta = new Date(moment(this.dataEstimadaAlta.value,"DD/MM/YYYY").toISOString())
    }else{
      dataEstimadaAlta = new Date()
    }  
    
    const pop = await this.popover.create({
        component: PopoverCalendarioComponent,
        event: ev,
        cssClass: 'popover-custon',
        componentProps: {
          titulo: 'Data Estimada da Alta',
          data: dataEstimadaAlta
        },      
        translucent: true            
    });   
    
    pop.onDidDismiss().then(async (result) => {
      if(result.data){
        let dataEstimadaAlta = result.data
        if(dataEstimadaAlta != null && dataEstimadaAlta != ''){  
          let dataEstimadaAltaDate =  new Date(moment(dataEstimadaAlta,"DD/MM/YYYY").toISOString())
          let dataInternacao =  new Date(moment(this.dataInternacao.value,"DD/MM/YYYY").toISOString())
          if(dataEstimadaAltaDate < dataInternacao){
            this.toast.errorToast("A Data Estimada da Alta não pode ser anterior a Data de Internação.")
            this.limparDataEstimadaAlta()     
          }else{
            this.acompanhamentoMedico.dataEstimadaAlta = moment(dataEstimadaAlta).format("DD/MM/YYYY")
            this.formAcompanhamento.get("dataEstimadaAlta").setValue(this.acompanhamentoMedico.dataEstimadaAlta)
            this.flgErroDataEstimadaAlta = false
          }
        } else{
          this.acompanhamentoMedico.dataEstimadaAlta = '';
        }
      }  
    });       
    return await pop.present() 
  }

  async limparDataEstimadaAlta(){
    this.dataEstimadaAlta.reset()
    this.acompanhamentoMedico.dataEstimadaAlta = ''
  }

  async validarCid(){
    let operadora = new Operadora
    let dominioCodigo = new DominioCodigo()
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
    dominioCodigo.codDominio = this.cidDiagnostico.value.trim()      
    dominioCodigo.codTabela = Constantes.TABELA_CID      
    dominioCodigo.operadora = operadora
    const loading = await this.loading.presentLoading('Validando CID...')  
    this.parametrosService.getVerificaDominioCodigo(dominioCodigo).subscribe((data: any) => {
      this.acompanhamentoMedico.cidDiagnostico = data  
      loading.dismiss()   
    }, async error => {
      if(this.cidDiagnostico.value.trim().length > 5){
        this.cidDiagnostico.setValue("")
        loading.dismiss()
        this.toast.errorToast("CID Inválido. O código deve ter no máximo 5 caracteres.")
      }else{
        dominioCodigo = new DominioCodigo()
        dominioCodigo.codDominio = this.cidDiagnostico.value.trim() 
        this.acompanhamentoMedico.cidDiagnostico = dominioCodigo
        loading.dismiss()
        this.toast.errorToast("CID Inválido.")
      }
    }) 
  }

  async getUltimaInternacao(){    
    let usuario: Usuario = new Usuario()
    let senhaAutorizacao: SenhaAutorizacao = new SenhaAutorizacao()
    senhaAutorizacao.senha = this.acompanhamentoMedico.senhaAutorizacao.senha
    senhaAutorizacao.beneficiario = this.acompanhamentoMedico.beneficiario
    usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario')) 
    senhaAutorizacao.operadora = usuario.operadora
    const loading = await this.loading.presentLoading('Buscando última internação...')  
    this.senhaAutorizacaoService.getUltimaInternacao(senhaAutorizacao).subscribe((data: any) => {
      if(data != null){
        let ultimaInternacao: SenhaAutorizacao = data
        this.acompanhamentoMedico.ultimaInternacao = ultimaInternacao
        loading.dismiss()         
      }else{
       loading.dismiss()
      }       
    }, error => {
      this.toast.errorToast(error)
      loading.dismiss()
    })  
  }

  exibirDados(aba){
    switch (aba){
      case 'paciente':
        this.exibeDadosPaciente = !this.exibeDadosPaciente
        break
      case 'autorizacao':
        this.exibeDadosAutorizacao = !this.exibeDadosAutorizacao
          break
      case 'acompanhamento':
          this.exibeDadosAcompanhamento = !this.exibeDadosAcompanhamento
          break 
      case 'ultimaInternacao':
        this.exibeDadosUltimaInternacao = !this.exibeDadosUltimaInternacao
        break            
    }
  }
} 