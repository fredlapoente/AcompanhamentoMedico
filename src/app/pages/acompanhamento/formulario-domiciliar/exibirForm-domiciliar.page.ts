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
    selector: 'app-exibirForm-domiciliar',
    templateUrl: './exibirForm-domiciliar.page.html',
    styleUrls: ['./exibirForm-domiciliar.page.scss'],
  })
export class ExibirFormDomiciliarPage implements OnInit {
      
  public formAcompanhamento: FormGroup;
  public acompanhamentoMedico: AcompanhamentoMedico = new AcompanhamentoMedico()
  public listaDiasAcompanhamento: AcompanhamentoMedicoDia[]
  public listaMotivosAlta: DominioCodigo[] = []
  public opcaoExibir: string = "paciente"    
  public flgErroJustificativa: boolean = false
  public flgErroDataEstimadaAlta: boolean = false
  public latitude: number
  public longitude: number
  public exibeDadosPaciente: boolean = false
  public exibeDadosAcompanhamento: boolean = false
  public exibeDadosAutorizacao: boolean = false
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

  get justificativa() {
    return this.formAcompanhamento.get('justificativa')
  } 

  get dataAlta() {
    return this.formAcompanhamento.get('dataAlta')
  }

  get motivoAlta() {
    return this.formAcompanhamento.get('motivoAlta')
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
    this.buscaMotivosAlta()    
    
    let flgAbrindo: boolean = false        
    let getNav = this.router.getCurrentNavigation()
    if (getNav.extras.state) {            
      this.acompanhamentoMedico = getNav.extras.state.acompanhamentoMedico 
      flgAbrindo = getNav.extras.state.flgAbrindo
    }else {
        this.toast.errorToast('Ocorreu um erro inesperado, por favor tente novamente.')
        this.navCtrl.navigateBack('menu-principal/listar-senhas')
    }
       
    this.formAcompanhamento = this.formBuilder.group({
                    justificativa: ['',Validators.compose([Validators.required])],
                    dataAlta: ['',Validators.compose([Validators.required])],
                    motivoAlta: ['',Validators.compose([Validators.required])],
                    dataEstimadaAlta: [''],
                    observacao: [''],
                    diaAcompanhamento:[moment(new Date()).format("DD/MM/YYYY"),Validators.compose([Validators.required])],
                    flgCopiaUltimoDia:[false]                     
    }) 

    this.acompanhamentoMedico.dataUltimaVisualizacao = moment(new Date()).format("DD/MM/YYYY")

    this.formAcompanhamento.get("justificativa").setValue(this.acompanhamentoMedico.diagnosticoInternacao)

    if(flgAbrindo){
      this.listaDiasAcompanhamento = []
      this.flgCopiaUltimoDia.disable()
      this.adicionarAcompanhamentoMedicoDispositivo()      
    }else{ 
      if(this.acompanhamentoMedico.dataAlta){
        this.formAcompanhamento.get("dataAlta").setValue(this.acompanhamentoMedico.dataAlta)
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
        this.justificativa.disable()
        this.dataAlta.disable()
        this.dataEstimadaAlta.disable()
        this.motivoAlta.disable()
        this.observacao.disable()
        this.diaAcompanhamento.disable()
        this.flgCopiaUltimoDia.disable()                    
      }
      this.atualizarAcompanhamentoMedicoDispositivo()      
    }          
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

  async adicionarDiaAcompanhamento(){     
    let usuario: Usuario = new Usuario()
    usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
    //Valida os campos obrigatórios    
    if(!this.justificativa.valid || this.diaAcompanhamento.invalid){
      this.toast.errorToast('Preencha os campos obrigatórios.')

      if(!this.justificativa.valid){          
        this.justificativa.setErrors({'incorrect': true})
        this.justificativa.invalid  
        this.opcaoExibir = "paciente" 
        this.exibeDadosAutorizacao = true
        this.flgErroJustificativa = true            
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
        if(this.acompanhamentoMedico.listaAcompanhamentoDia != null && this.acompanhamentoMedico.listaAcompanhamentoDia.length > 0){
          let acompanhamentoMedicoDia: AcompanhamentoMedicoDia = new AcompanhamentoMedicoDia()
          acompanhamentoMedicoDia = this.acompanhamentoMedico.listaAcompanhamentoDia.find(x=> x.diaAcompanhamento === this.diaAcompanhamento.value) 
          if(acompanhamentoMedicoDia != null){
            this.toast.errorToast('Dia de Acompanhamento existente !')
            return
          }
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
      acompanhamentoMedicoDia.dataCheckIn = moment(new Date()).format("DD/MM/YYYY HH:mm:ss")
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
    let dataAlta =  new Date(moment(this.dataAlta.value,"DD/MM/YYYY").toISOString())

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
    
    this.acompanhamentoMedico.dataAlta = this.dataAlta.value
    let motivoAlta: DominioCodigo = new DominioCodigo()
    motivoAlta = this.listaMotivosAlta.find(x => x.seqDominio === this.motivoAlta.value)
    this.acompanhamentoMedico.motivoAlta = motivoAlta
    this.acompanhamentoMedico.obsEncerramento = this.observacao.value
    this.acompanhamentoMedico.diagnosticoInternacao = this.justificativa.value
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
    /*if(this.dataInternacao.value != null && this.dataInternacao.value != ''){
      dataInternacao = new Date(moment(this.dataInternacao.value,"DD/MM/YYYY").toISOString())
    }else{
      dataInternacao = new Date()
    } */ 
    
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
          this.acompanhamentoMedico.dataEstimadaAlta = moment(dataEstimadaAlta).format("DD/MM/YYYY")
          this.formAcompanhamento.get("dataEstimadaAlta").setValue(this.acompanhamentoMedico.dataEstimadaAlta)
          this.flgErroDataEstimadaAlta = false
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
    }
  }
} 