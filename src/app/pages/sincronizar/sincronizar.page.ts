import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { alphaAsyncValidatorExtension } from '@rxweb/reactive-form-validators/validators-extension';
import * as moment from 'moment';
import { ModalMensagemSincronismoComponent } from 'src/app/components/modal-mensagem-sincronismo/modal-mensagem-sincronismo.component';
import { SaudiLoadingComponent } from 'src/app/components/saudi-loading/saudi-loading.component';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import Constantes from 'src/app/config/constantes/constantes';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';
import { AcompanhamentoMedicoDia } from 'src/app/model/AcompanhamentoMedicoDia.model';
import { AcompanhamentoMedicoObs } from 'src/app/model/AcompanhamentoMedicoObs.model';
import { Usuario } from 'src/app/model/Usuario.model';
import { AcompanhamentoService } from 'src/app/services/acompanhamento.service';
import { NetworkService } from 'src/app/services/network.service';
import { StorageService } from 'src/app/services/storage.service';
import { PaginadorUtil } from 'src/app/util/paginador-util';


@Component({
    selector: 'app-sincronizar',
    templateUrl: './sincronizar.page.html',
    styleUrls: ['./sincronizar.page.scss'],
  })
export class SincronizarPage implements OnInit {

    public opcaoExibir: string = "sincronizar"  
    public flgMarcarTodos: boolean  
    public listaAcompanhamentosSincronizar: AcompanhamentoMedico[] = []
    public listaAcompanhamentosFalha: AcompanhamentoMedico[] = []
    public listaAcompanhamentosSincronizarFiltradas = []
    public listaAcompanhamentosSincronizarPagina = []
    public listaAcompanhamentosFalhaFiltradas = []
    public listaAcompanhamentosFalhaPagina = []
    public filtroAcompanhamento: string
    public qtdGuiasSincronizar: number
    public qtdGuiasFalha: number
    public paginadorSincronizar: any = {};  
    public paginadorFalha: any = {};
    public paginaAtualSincronismo: number 
    public paginaAtualFalha: number
    public flgHabilitaBtnSincronizar: boolean = false 
    
    constructor(private networkService: NetworkService,
                private atrCtrl: AlertController,
                private storageService: StorageService,
                private loading: SaudiLoadingComponent,
                private toast: SaudiToastComponent,
                private acompanhamentoService: AcompanhamentoService,
                private modalCtrl: ModalController,
            ) { }

    ngOnInit() {
        moment.locale('pt-br'); 
        this.flgMarcarTodos = true
        this.marcarDesmarcarTodos()
        this.buscarAcompanhamentosSincronizar() 
        this.buscarAcompanhamentosFalha() 
    }

    segmentChanged(ev: any) {
        this.opcaoExibir = ev.detail.value  
    }

    async buscarAcompanhamentosSincronizar(){
        this.listaAcompanhamentosSincronizar = []
        this.listaAcompanhamentosSincronizarPagina = []
        let qtdDiasAcomp: number = 0
        const loading = await this.loading.presentLoading('Buscando Acompanhamentos para Sincronizar...')  
        let usuario: Usuario = new Usuario()
        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario')) 
        this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(items=>{
            if(items != null){                
                for(let acompanhamento of items){
                    if(acompanhamento.configFormulario.idConfigFormulario === usuario.configFormulario.idConfigFormulario &&
                        acompanhamento.usuario.idUsuario ===  usuario.idUsuario){ 
                        acompanhamento.configFormulario.nomeConfigFormulario = usuario.configFormulario.nomeConfigFormulario
                        acompanhamento.concatDadosAcompanhamentoFiltro = acompanhamento.senhaAutorizacao.senha+"|"+acompanhamento.beneficiario.carteiraBeneficiario+"|"+acompanhamento.beneficiario.nomeBeneficiario
                        qtdDiasAcomp = acompanhamento.listaAcompanhamentoDia.length                           
                        let listaDia: AcompanhamentoMedicoDia[] = [] 
                        let qtdDiasErro: number = 0                       
                        for(let dia of acompanhamento.listaAcompanhamentoDia){
                            if(dia.statusSincronismo === Constantes.STATUS_PENDENTE && (dia.erroSincronismo === null || !dia.erroSincronismo)){
                                listaDia.push(dia)
                            }else{
                                if(dia.statusSincronismo === Constantes.STATUS_ERRO_SINCRONIZACAO){
                                    qtdDiasErro = qtdDiasErro + 1
                                }
                            }
                        }
                        if(listaDia.length > 0){
                            acompanhamento.listaAcompanhamentoDia = listaDia
                            this.listaAcompanhamentosSincronizar.push(acompanhamento)
                        }else{
                            if(!acompanhamento.listaAcompanhamentoObs && acompanhamento.listaAcompanhamentoObs != null){
                                let obsSinc: AcompanhamentoMedicoObs = acompanhamento.listaAcompanhamentoObs.find(x => x.statusSincronismo === Constantes.STATUS_PENDENTE)
                                if(acompanhamento.statusSincronismo === Constantes.STATUS_PENDENTE && (qtdDiasAcomp > 0 || obsSinc) && qtdDiasErro < qtdDiasAcomp){
                                    acompanhamento.listaAcompanhamentoDia = []
                                    this.listaAcompanhamentosSincronizar.push(acompanhamento)
                                }
                            }else{
                                if(acompanhamento.statusSincronismo === Constantes.STATUS_PENDENTE && qtdDiasAcomp > 0 && qtdDiasErro < qtdDiasAcomp){
                                    acompanhamento.listaAcompanhamentoDia = []
                                    this.listaAcompanhamentosSincronizar.push(acompanhamento)
                                }
                            }    
                        }              
                    }                        
                }
                this.qtdGuiasSincronizar = this.listaAcompanhamentosSincronizar.length
                this.setPaginaSincronizar(1,Constantes.LIMITE_ACOMPANHAMENTOS_SINCRONIZAR,0)
                this.flgMarcarTodos = false 
                this.paginaAtualSincronismo = 1             
                loading.dismiss()   
            }else{
                loading.dismiss()   
            }  
        }, error => {
            this.toast.errorToast(error)
            loading.dismiss()
        }) 
    }

    async buscarAcompanhamentosFalha(){
        this.listaAcompanhamentosFalha = []
        this.listaAcompanhamentosFalhaPagina = []
        const loading = await this.loading.presentLoading('Buscando Acompanhamentos com Falha...')  
        let usuario: Usuario = new Usuario()
        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario')) 
        this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(items=>{
            if(items != null){
                for(let acompanhamento of items){
                    if(acompanhamento.configFormulario.idConfigFormulario === usuario.configFormulario.idConfigFormulario &&
                        acompanhamento.usuario.idUsuario ===  usuario.idUsuario){
                        let listaDia: AcompanhamentoMedicoDia[] = []
                        acompanhamento.concatDadosAcompanhamentoFiltro = acompanhamento.senhaAutorizacao.senha+"|"+acompanhamento.beneficiario.carteiraBeneficiario+"|"+acompanhamento.beneficiario.nomeBeneficiario
                        for(let dia of acompanhamento.listaAcompanhamentoDia){
                            if(dia.statusSincronismo === Constantes.STATUS_ERRO_SINCRONIZACAO && dia.erroSincronismo !== null){
                                listaDia.push(dia)
                            }
                        }
                        if(listaDia.length > 0){
                            acompanhamento.listaAcompanhamentoDia = listaDia
                            this.listaAcompanhamentosFalha.push(acompanhamento)
                        }else{
                            if(!acompanhamento.listaAcompanhamentoObs && acompanhamento.listaAcompanhamentoObs != null){
                                let obsSinc: AcompanhamentoMedicoObs = acompanhamento.listaAcompanhamentoObs.find(x => x.statusSincronismo === Constantes.STATUS_ERRO_SINCRONIZACAO)
                                if((acompanhamento.statusSincronismo === Constantes.STATUS_ERRO_SINCRONIZACAO && (acompanhamento.erroSincronismo !== null && acompanhamento.erroSincronismo)) || obsSinc){
                                    acompanhamento.listaAcompanhamentoDia = []
                                    this.listaAcompanhamentosFalha.push(acompanhamento)
                                }else{
                                    if(acompanhamento.statusSincronismo === Constantes.STATUS_ERRO_SINCRONIZACAO){
                                        acompanhamento.listaAcompanhamentoDia = []
                                        this.listaAcompanhamentosFalha.push(acompanhamento) 
                                    }
                                }
                            }else{
                                if(acompanhamento.statusSincronismo === Constantes.STATUS_ERRO_SINCRONIZACAO){
                                    acompanhamento.listaAcompanhamentoDia = []
                                    this.listaAcompanhamentosFalha.push(acompanhamento) 
                                }
                            }    
                        }
                    }                        
                }
                this.qtdGuiasFalha = this.listaAcompanhamentosFalha.length
                this.setPaginaFalha(1,Constantes.LIMITE_ACOMPANHAMENTOS_SINCRONIZAR,0)
                this.paginaAtualFalha = 1                
                loading.dismiss()   
            }else{
                loading.dismiss()   
            }  
        }, error => {
            this.toast.errorToast(error)
            loading.dismiss()
        })
    }

    exibirInfoSincronizar(acompanhamentoMedico: AcompanhamentoMedico){
        if(acompanhamentoMedico.exibeDadosSincronismo){
            acompanhamentoMedico.exibeDadosSincronismo = false
        }else{
            acompanhamentoMedico.exibeDadosSincronismo = true
        }
    }

    atualizaSincronizarDia($event,acompanhamentoMedico: AcompanhamentoMedico,acompanhamentoDia: AcompanhamentoMedicoDia) {
        acompanhamentoDia.flgSincronizar = $event.target.checked;
        let dia: AcompanhamentoMedicoDia = acompanhamentoMedico.listaAcompanhamentoDia.find(x => x.flgSincronizar)
        if(dia){
            acompanhamentoMedico.flgSincronizar = true
        }
        this.habilitaDesabilitaBotao()   
    }

    atualizaSincronizarAcompanhamento($event,acompanhamentoMedico: AcompanhamentoMedico) {
        acompanhamentoMedico.flgSincronizar = $event.target.checked;
        this.habilitaDesabilitaBotao()
    }

    marcarDesmarcarTodos(){         
        this.flgMarcarTodos = !this.flgMarcarTodos;
        for(let acompanhamento of this.listaAcompanhamentosSincronizarPagina){
            acompanhamento.exibeDadosSincronismo = this.flgMarcarTodos 
            acompanhamento.flgSincronizar = this.flgMarcarTodos                
            for(let acompanhamentoDia of acompanhamento.listaAcompanhamentoDia){                    
                    acompanhamentoDia.flgSincronizar = this.flgMarcarTodos
            }                
        }
        this.habilitaDesabilitaBotao()
    }

    habilitaDesabilitaBotao(){         
        let flgHabilitaBtnSincronizar : boolean = false
        for(let acompanhamento of this.listaAcompanhamentosSincronizarPagina){
           if(acompanhamento.listaAcompanhamentoDia.length > 0){ 
                for(let acompanhamentoDia of acompanhamento.listaAcompanhamentoDia){                    
                    if(acompanhamentoDia.flgSincronizar){
                        flgHabilitaBtnSincronizar = true
                        break;
                    }
                }
            }else{                
                if(acompanhamento.flgSincronizar){
                    flgHabilitaBtnSincronizar = true
                    break;
                }
            }     
        }
        this.flgHabilitaBtnSincronizar = flgHabilitaBtnSincronizar
    }

    async confirmarSincronizar(){
        this.flgHabilitaBtnSincronizar = false
        this.networkService.CheckNetworkStatus()
        if (!this.networkService.NetworkStatus.value) {
            this.toast.errorToast("Sem conexão com a internet, não é possível sincronizar.")
        }else{
            let sincronizar: boolean = false
            for(let acompanhamento of this.listaAcompanhamentosSincronizarPagina){
                if(acompanhamento.flgSincronizar && acompanhamento.listaAcompanhamentoDia.length === 0){
                    sincronizar = true
                    break
                }else{
                    if(acompanhamento.listaAcompanhamentoDia.length > 0){
                        for(let acompanhamentoDia of acompanhamento.listaAcompanhamentoDia){
                            if(acompanhamentoDia.flgSincronizar){
                                sincronizar = true
                                break
                            } 
                        }
                    }
                }
            }
            if(sincronizar){
                const alert = await this.atrCtrl.create({
                    header: 'Vamos iniciar o sincronismo.',
                    buttons: [
                      {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: (_blah) => {
                            this.flgHabilitaBtnSincronizar = true
                        }
                      }, {
                        text: 'Confirmar',
                        handler: () => {                            
                            this.sincronizar()                       
                        }
                      }
                    ]
                  });    
                  await alert.present();
            }else{
                this.toast.errorToast("Nenhum item selecionado para sincronizar")
            }
        }
    }

    async sincronizar(){
        let usuario: Usuario = new Usuario() 
        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario')) 
        for(let acomp of this.listaAcompanhamentosSincronizarPagina){
            if(acomp.flgSincronizar){
                acomp.flgExibeGifProcessando = true
                acomp.erroSincronismo = ''
            }     
        }    
        await this.acompanhamentoService.sincronizar(this.listaAcompanhamentosSincronizarPagina).subscribe(async (data: any) => {
            let respSinc: any = data
            for(let acompanhamento of this.listaAcompanhamentosSincronizarPagina){
                let acompSinc: AcompanhamentoMedico = respSinc.find(x => x.senhaAutorizacao.senha === acompanhamento.senhaAutorizacao.senha)
                if(acompanhamento.flgSincronizar && acompSinc && acompSinc != null){
                    acompanhamento.statusSincronismo = acompSinc.statusSincronismo
                    acompanhamento.protocoloSincronismo = acompSinc.protocoloSincronismo
                    acompanhamento.listaAcompanhamentoObs = acompSinc.listaAcompanhamentoObs
                    acompanhamento.dataSincronizado = acompSinc.dataSincronizado 
                    if(acompSinc.listaAcompanhamentoDia.length > 0){                        
                        for(let dia of acompanhamento.listaAcompanhamentoDia){
                            let diaSinc = acompSinc.listaAcompanhamentoDia.find(x => x.diaAcompanhamento === dia.diaAcompanhamento )
                            if(diaSinc && diaSinc != null && diaSinc.flgSincronizar){
                                dia.statusSincronismo = diaSinc.statusSincronismo
                                dia.protocoloSincronismo = diaSinc.protocoloSincronismo
                                if(diaSinc.erroSincronismo !== null && diaSinc.erroSincronismo){
                                    dia.erroSincronismo = diaSinc.erroSincronismo
                                    dia.flgExibeErroProcesso = true
                                    dia.flgExibeSucessoProcesso = false
                                }else{
                                    dia.dataSincronizado = diaSinc.dataSincronizado
                                    dia.flgExibeSucessoProcesso = true
                                    dia.flgExibeErroProcesso = false
                                }
                                dia.flgSincronizar = false
                            }    
                        }
                    }else{
                        acompanhamento.flgExibeErroProcesso = false
                        acompanhamento.flgExibeSucessoProcesso = true
                    } 
                    if(acompSinc.erroSincronismo !== null && acompSinc.erroSincronismo !== ""){    
                        acompanhamento.erroSincronismo = acompSinc.erroSincronismo 
                        acompanhamento.flgExibeErroProcesso = true
                        acompanhamento.flgExibeSucessoProcesso = false
                    }
                    let obs: AcompanhamentoMedicoObs = acompSinc.listaAcompanhamentoObs.find(x => x.statusSincronismo === Constantes.STATUS_ERRO_SINCRONIZACAO)
                    if(obs){
                        acompanhamento.erroAnexoAcompanhamento = "Erro de sincronização no(s) anexo(s)." 
                    }else{
                        acompanhamento.erroAnexoAcompanhamento = ""
                    }
                    acompanhamento.flgExibeGifProcessando = false
                    acompanhamento.flgSincronizar = false
                    await this.atualizaAcompanhamentoDispositivo(acompanhamento)
                }
            }               
        }, error => {
           this.toast.errorToast(error)               
        })       
    }    

    async atualizaAcompanhamentoDispositivo(acompanhamentoMedico: AcompanhamentoMedico): Promise<any[]>{
        return await this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(async (items: any[]) =>{
            if(!items || items.length === 0){
              return null
            }
            
            let acomp: AcompanhamentoMedico = items.find(x => x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha)
            if(acomp != null){
                acomp.protocoloSincronismo = acompanhamentoMedico.protocoloSincronismo
                acomp.statusSincronismo = acompanhamentoMedico.statusSincronismo
                acomp.dataSincronizado = acompanhamentoMedico.dataSincronizado
                acomp.flgExibeGifProcessando = acompanhamentoMedico.flgExibeGifProcessando
                acomp.flgExibeErroProcesso = acompanhamentoMedico.flgExibeErroProcesso
                acomp.flgExibeSucessoProcesso = acompanhamentoMedico.flgExibeSucessoProcesso
                acomp.flgSincronizar = acompanhamentoMedico.flgSincronizar
                acomp.erroSincronismo = acompanhamentoMedico.erroSincronismo                    
                acomp.listaAcompanhamentoObs = acompanhamentoMedico.listaAcompanhamentoObs
                acomp.erroAnexoAcompanhamento = acompanhamentoMedico.erroAnexoAcompanhamento
                if(acomp.listaAcompanhamentoDia.length > 0){
                    for(let dia of acomp.listaAcompanhamentoDia){
                        let diaSinc: AcompanhamentoMedicoDia = acompanhamentoMedico.listaAcompanhamentoDia.find(y => y.diaAcompanhamento === dia.diaAcompanhamento)
                        if(diaSinc){
                            dia.protocoloSincronismo = diaSinc.protocoloSincronismo
                            dia.statusSincronismo = diaSinc.statusSincronismo
                            dia.flgExibeSucessoProcesso = diaSinc.flgExibeSucessoProcesso
                            dia.flgExibeErroProcesso = diaSinc.flgExibeErroProcesso
                            dia.flgSincronizar = diaSinc.flgSincronizar
                            dia.erroSincronismo = diaSinc.erroSincronismo
                            dia.dataSincronizado = diaSinc.dataSincronizado
                            if(dia.flgExibeSucessoProcesso){
                                for(let dado of dia.listaAcompanhamentoDado){
                                    dado.listaAcompanhamentoItemExcluir = []
                                }
                            }                                    
                        }
                    }
                }
                await this.atualizar(acomp)
            }           
        }, error => {
            this.toast.errorToast(error)               
        })       
    }

    async atualizar(acompanhamentoMedico: AcompanhamentoMedico): Promise<any[]>{
        return await this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,acompanhamentoMedico,"senhaAutorizacao.senha").then((items: any[]) =>{
            if(!items || items.length === 0){
              return null
            }
        })    
    }
            
    async visualizarErroSincronismo(mensagemErro: string) {
        const modal = await this.modalCtrl.create({
            component: ModalMensagemSincronismoComponent,
            cssClass: 'mensagem-erro-sincronismo-modal',
            componentProps: { 
                mensagem: mensagemErro
            }
        });
        return await modal.present();
    }

    async excluirAcompanhamento(acompanhamentoMedico: AcompanhamentoMedico){       
        let flgDiaJaSincronizado: boolean = false
        const indexFalha: number = this.listaAcompanhamentosFalha.findIndex(x => x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha)
        const loading = await this.loading.presentLoading('Excluindo Acompanhamento/Dia com falha...') 
        this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(async items=>{
            if(items != null){
                let acomp: AcompanhamentoMedico = items.find(x => x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha)
                if(acomp != null){
                    let qtdTotalDiasAcomp = acomp.listaAcompanhamentoDia.length                
                    let listaDia: AcompanhamentoMedicoDia[] = []
                    for(let dia of acompanhamentoMedico.listaAcompanhamentoDia){
                        const indexDia: number = acomp.listaAcompanhamentoDia.findIndex(y => y.diaAcompanhamento === dia.diaAcompanhamento)
                        if (indexDia !== -1) {
                            let diaAcomp: AcompanhamentoMedicoDia = acomp.listaAcompanhamentoDia[indexDia]
                            if(diaAcomp.dataSincronizado === null || diaAcomp.dataSincronizado === ""){                                    
                                acomp.listaAcompanhamentoDia.splice(indexDia, 1);                                    
                            }else{
                                listaDia.push(dia)
                                flgDiaJaSincronizado = true
                            }                                
                        }             
                    }                                          
                    if(acompanhamentoMedico.listaAcompanhamentoDia.length > 0){
                        if(listaDia.length === 0){                           
                            this.listaAcompanhamentosFalha.splice(indexFalha,1)
                            //se o acompanhamento nao tem nenhum dia já sincronizado com sucesso apaga o acompanhamento tb
                            if(qtdTotalDiasAcomp == acompanhamentoMedico.listaAcompanhamentoDia.length){
                                await this.storageService.apagar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,acomp,"senhaAutorizacao.senha")
                            }    
                        }                            
                        if(flgDiaJaSincronizado){
                            this.toast.infoToast("Dia já sincronizado uma vez com sucesso não pode ser excluído")
                        }
                        await this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,acomp,"senhaAutorizacao.senha")
                    }else{                        
                        if(acomp.dataSincronizado !== null && acomp.dataSincronizado !== ""){
                            this.toast.infoToast("Acompanhamento já sincronizado uma vez com sucesso não pode ser excluído")
                        }else{
                            this.listaAcompanhamentosFalha.splice(indexFalha,1)
                            await this.storageService.apagar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,acomp,"senhaAutorizacao.senha")
                        }
                    } 
                    this.qtdGuiasFalha = this.listaAcompanhamentosFalha.length
                    this.setPaginaFalha(this.paginadorFalha.paginaCorrente,Constantes.LIMITE_ACOMPANHAMENTOS_SINCRONIZAR,this.paginadorFalha.totalPaginas)                                             
                    loading.dismiss()                        
                }
            }
        }, error => {
            loading.dismiss()
            this.toast.errorToast(error)               
        })
    }

    async confirmaEnviarEmail(acompanhamentoMedico: AcompanhamentoMedico){
        const alert = await this.atrCtrl.create({
            header: 'Importante: É de suma importância que o e-mail seja enviado, pois somente assim poderemos resolver o problema, vamos prosseguir?',
            buttons: [
              {
                text: 'Cancelar',
                role: 'cancel', 
                handler: (_blah) => {}
              }, {
                text: 'Confirmar',
                handler: () => { 
                    this.enviarEmail(acompanhamentoMedico)                    
                }
              }
            ]
        });    
        await alert.present();       
    }

    async enviarEmail(acompanhamentoMedico: AcompanhamentoMedico){
        let usuario: Usuario = new Usuario()
        const loading = await this.loading.presentLoading('Enviando e-mail...') 
        this.acompanhamentoService.enviarEmailPendencia(acompanhamentoMedico).subscribe(async (data: any) => {
            if(data){
                this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(async items=>{
                    if(items != null){
                        let acomp: AcompanhamentoMedico = items.find(x => x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha)
                        acomp.flgEmailEnviado = true
                        acomp.flgPendenciaVerificada = false
                        acomp.dataPendencia = moment(new Date()).format("DD/MM/YYYY")
                        await this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,acomp,"senhaAutorizacao.senha")
                        loading.dismiss()
                        this.toast.successToast("E-mail enviado com sucesso.")                        
                    }
                }, error => {
                    loading.dismiss()
                    this.toast.errorToast(error)               
                })            
            }else{
                loading.dismiss()
                this.toast.errorToast("Ocorreu um erro ao enviar o e-mail. Por favor tente novamente mais tarde. Caso o problema persista, contate o suporte técnico.")
            }
        }, error => {
            loading.dismiss()
            this.toast.errorToast(error)               
        })
    }

    async verificarPendencia(acompanhamentoMedico: AcompanhamentoMedico){
        this.networkService.CheckNetworkStatus()
        if (!this.networkService.NetworkStatus.value) {
            this.toast.errorToast("Sem conexão com a internet, não é possível verificar pendência.")
        }else{
            const loading = await this.loading.presentLoading('Verificando Pendência...')
            this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(async items=>{
                if(items != null){
                    let acompDispositivo: AcompanhamentoMedico = items.find(x => x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha)
                    if(acompDispositivo != null){                
                        await this.acompanhamentoService.verificarPendenciaSincronismo(acompanhamentoMedico,acompDispositivo).subscribe(async (data: any) => {
                            let acompanhamentoAtualizar: AcompanhamentoMedico = data
                            if(acompanhamentoAtualizar === null){
                                let dataAtual = moment(new Date());
                                let dataPendencia = new Date(moment(acompanhamentoMedico.dataPendencia,"DD/MM/YYYY").toISOString())
                                let duracao = moment.duration(dataAtual.diff(dataPendencia));
                                let dias = duracao.asDays();
                                let difDias = (3-dias)
                                if(dias < 3){ 
                                    this.toast.infoToast("Prazo para resolução das pendências são de " + difDias.toFixed(0) + " dia (s)")
                                }else{
                                    this.toast.infoToast("Pendências não foram resolvidas, aguarde.")
                                }
                                loading.dismiss()
                            }else{                                
                                await this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,acompanhamentoAtualizar,"senhaAutorizacao.senha")
                                const indexFalha: number = this.listaAcompanhamentosFalha.findIndex(x => x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha)
                                this.listaAcompanhamentosFalha.splice(indexFalha,1)
                                this.qtdGuiasFalha = this.listaAcompanhamentosFalha.length
                                this.setPaginaFalha(this.paginadorFalha.paginaCorrente,Constantes.LIMITE_ACOMPANHAMENTOS_SINCRONIZAR,this.paginadorFalha.totalPaginas)                                             
                                loading.dismiss()                    
                                this.toast.successToast("Pendências resolvidas com sucesso.")                                      
                            }
                        }, error => {
                            loading.dismiss() 
                            this.toast.errorToast(error)               
                        })
                    }    
                }
            }, error => {
                    loading.dismiss() 
                    this.toast.errorToast(error)               
            })  
        }        
    }

    filtrarAcompanhamento(event){
        if(this.opcaoExibir == 'sincronizar'){
            this.filtroAcompanhamento = event.target.value.toLowerCase()
            this.listaAcompanhamentosSincronizarFiltradas = this.listaAcompanhamentosSincronizar.filter((item) =>{
               return item.concatDadosAcompanhamentoFiltro.toLowerCase().includes(this.filtroAcompanhamento)
            })
            this.qtdGuiasSincronizar = this.listaAcompanhamentosSincronizarFiltradas.length
            this.setPaginaSincronizar(1,Constantes.LIMITE_ACOMPANHAMENTOS_SINCRONIZAR,this.paginadorSincronizar.totalPaginas)
            this.flgMarcarTodos = false
            this.paginaAtualSincronismo = 1  
        }else{
            this.filtroAcompanhamento = event.target.value.toLowerCase()
            this.listaAcompanhamentosFalhaFiltradas = this.listaAcompanhamentosFalha.filter((item) =>{
              return item.concatDadosAcompanhamentoFiltro.toLowerCase().includes(this.filtroAcompanhamento)
            })
            this.qtdGuiasFalha = this.listaAcompanhamentosFalhaFiltradas.length
            this.setPaginaFalha(1,Constantes.LIMITE_ACOMPANHAMENTOS_SINCRONIZAR,this.paginadorFalha.totalPaginas)
            this.flgMarcarTodos = false
            this.paginaAtualFalha = 1  
        }            
    }
  
    cancelaFiltroAcompanhamento(){
        this.filtroAcompanhamento = ''
        if(this.opcaoExibir == 'sincronizar'){
            this.qtdGuiasSincronizar = this.listaAcompanhamentosSincronizar.length
            this.setPaginaSincronizar(1,Constantes.LIMITE_ACOMPANHAMENTOS_SINCRONIZAR,this.paginadorSincronizar.totalPaginas)
            this.flgMarcarTodos = false 
            this.paginaAtualSincronismo = 1     
        }else{
            let tamanhoLista = this.listaAcompanhamentosFalha.length > Constantes.LIMITE_ACOMPANHAMENTOS_SINCRONIZAR ? Constantes.LIMITE_ACOMPANHAMENTOS_SINCRONIZAR : this.listaAcompanhamentosFalha.length 
            this.listaAcompanhamentosFalhaFiltradas = this.listaAcompanhamentosFalha.slice(0,tamanhoLista) 
            
            this.qtdGuiasFalha = this.listaAcompanhamentosFalha.length
            this.setPaginaFalha(1,Constantes.LIMITE_ACOMPANHAMENTOS_SINCRONIZAR,this.paginadorFalha.totalPaginas)
            this.paginaAtualFalha = 1  
        }      
    } 
     
    setPaginaSincronizar(pagina: number, tamanhoPagina: number,totalPaginas: number) {
        
        if (pagina < 1 || (totalPaginas != 0 && pagina > totalPaginas)) {          
          return;
        }     

        let lista = this.listaAcompanhamentosSincronizar
        if(this.filtroAcompanhamento != null && this.filtroAcompanhamento != ''){
            lista = this.listaAcompanhamentosSincronizarFiltradas
        }

        this.paginadorSincronizar = PaginadorUtil.getPaginador({ paginaCorrente: pagina, tamanhoPagina, tamanhoLista: lista.length });
        this.listaAcompanhamentosSincronizarPagina = lista.slice( this.paginadorSincronizar.indiceInicial, this.paginadorSincronizar.indiceFinal + 1);
        this.flgMarcarTodos = true
        this.marcarDesmarcarTodos()
        this.paginaAtualSincronismo = pagina
    }

    setPaginaFalha(pagina: number, tamanhoPagina: number,totalPaginas: number) {
        
        if (pagina < 1 || (totalPaginas != 0 && pagina > totalPaginas)) {
          return;
        } 

        let lista = this.listaAcompanhamentosFalha
        if(this.filtroAcompanhamento != null && this.filtroAcompanhamento != ''){
            lista = this.listaAcompanhamentosFalhaFiltradas
        }
        this.paginadorFalha = PaginadorUtil.getPaginador({ paginaCorrente: pagina, tamanhoPagina, tamanhoLista: lista.length });
        this.listaAcompanhamentosFalhaPagina = lista.slice( this.paginadorFalha.indiceInicial, this.paginadorFalha.indiceFinal + 1);
        this.paginaAtualFalha = pagina
    }
}