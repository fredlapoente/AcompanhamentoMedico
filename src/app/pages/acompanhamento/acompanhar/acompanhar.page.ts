import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaudiLoadingComponent } from 'src/app/components/saudi-loading/saudi-loading.component';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { StorageService } from 'src/app/services/storage.service';
import Constantes from 'src/app/config/constantes/constantes';
import { Usuario } from 'src/app/model/Usuario.model';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalLegendaAcompanharComponent } from 'src/app/components/modal-legenda-acompanhar/modal-legenda-acompanhar.component';

@Component({
    selector: 'app-acompanhar',
    templateUrl: './acompanhar.page.html',
    styleUrls: ['./acompanhar.page.scss'],
})
export class AcompanharPage implements OnInit {

    public formAcompanhar: FormGroup
    public exibirAbas: boolean = false
    public opcaoExibir: string = "ambos"
    public listaPrestadores = []
    public listaAcompanhamentos = []
    public listaAcompanhamentosFiltradas = []
    public dataAtual: string = ''
    
    constructor(private formBuilder: FormBuilder,
                private loading: SaudiLoadingComponent,
                private toast: SaudiToastComponent,
                private storageService: StorageService,
                private router: Router,
                private atrCtrl: AlertController,
                private modalCtrl: ModalController,){}

    ngOnInit() {
        moment.locale('pt-br');
        this.formAcompanhar = this.formBuilder.group({
            prestadorSelecionado: ['', Validators.compose([Validators.required])],
            filtroAcompanhamento: ['']                     
        })

        this.dataAtual = moment(new Date()).format("DD/MM/YYYY");
        this.buscarPrestadoresComAcompanhamento()
    }

    get prestadorSelecionado() {
        return this.formAcompanhar.get('prestadorSelecionado')
    } 

    get filtroAcompanhamento() {
        return this.formAcompanhar.get('filtroAcompanhamento')
    } 

    async buscarPrestadoresComAcompanhamento(){
        this.listaPrestadores = []
        let usuario: Usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))  
        const loading = await this.loading.presentLoading('Buscando prestador(es)...') 
        this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(itens =>{
            if(itens){
                itens.forEach(acomp=>{
                    if(acomp.usuario.idUsuario === usuario.idUsuario){ 
                        if(this.listaPrestadores.length > 0){
                            let prestador = this.listaPrestadores.find(y=> y.idPrestador === acomp.prestador.idPrestador)
                            if(!prestador){                            
                                this.listaPrestadores.push(acomp.prestador) 
                            }
                        }else{
                            this.listaPrestadores.push(acomp.prestador)
                        }
                    }            
                })
                if(this.listaPrestadores.length > 0){
                    loading.dismiss()      
                }else{
                    this.toast.errorToast("Nenhum prestador localizado.")
                    loading.dismiss()
                }
            }else{
                this.toast.errorToast("Nenhum prestador localizado.")
                loading.dismiss() 
            }                 
        })       
    }    

    segmentChanged(ev: any) {
        this.opcaoExibir = ev.detail.value
        switch (this.opcaoExibir){
            case 'ambos':
                this.exibirAcompanhamentos('')
                break
            case 'abertos':
                this.exibirAcompanhamentos(Constantes.STATUS_ABERTO)
                break
            case 'encerrados':
                this.exibirAcompanhamentos(Constantes.STATUS_ENCERRADO)
                break            
        }
    }

    async exibirAcompanhamentos(status: string){
        this.listaAcompanhamentos = []
        let usuario: Usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))  
        const loading = await this.loading.presentLoading('Buscando acompanhamentos...')
        this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(itens =>{
            this.listaAcompanhamentos = itens.filter(x=> x.usuario.idUsuario === usuario.idUsuario && 
                                                         x.prestador.idPrestador === this.prestadorSelecionado.value &&
                                                         x.usuario.configFormulario.idDominio === usuario.configFormulario.idDominio &&
                                                         (x.status === status || status === ''))
            this.listaAcompanhamentosFiltradas = this.listaAcompanhamentos
            this.exibirAbas = true
            loading.dismiss()                                             
        }) 
    }

    filtrarAcompanhamentos(event){
        this.listaAcompanhamentosFiltradas = this.listaAcompanhamentos        
        this.listaAcompanhamentosFiltradas = this.listaAcompanhamentosFiltradas.filter(item=> item.beneficiario.nomeBeneficiario.toLowerCase().includes(event.target.value.toLowerCase()) ||
                                                                                              item.beneficiario.carteiraBeneficiario.toLowerCase().includes(event.target.value.toLowerCase()) ||
                                                                                              item.senhaAutorizacao.senha.toLowerCase().includes(event.target.value.toLowerCase()))
    }

    cancelaFiltroAcompanhamento(){
        this.listaAcompanhamentosFiltradas = this.listaAcompanhamentos      
    }

    async abrirAcompanhamento(acompanhamentoMedico: AcompanhamentoMedico){
        let flgAbrindo = false
        let navigationExtras: NavigationExtras = {
            state: {
              acompanhamentoMedico, 
              flgAbrindo
            }
        } 
        if(acompanhamentoMedico.usuario.configFormulario.codDominio == Constantes.PERFIL_DOMICILIAR){
            this.router.navigateByUrl('menu-principal/exibirFormDomiciliar', navigationExtras)
        }else{
            this.router.navigateByUrl('menu-principal/exibirFormulario', navigationExtras)
        }
    }
    
    async apagarAcompanhamento(index:number) {
        let mensagem = "Ao confirmar o acompanhamento será excluído do seu dispositivo.Deseja excluir o acompanhamento?"
        const alert = await this.atrCtrl.create({
            header: 'Excluir acompanhamento',
            message: mensagem,
            buttons: [{
                text: 'Cancelar',
                role: 'cancel',
                handler: (blah) => {}
            }, 
            {
                text: 'Confirmar',
                handler: () => { 
                    this.listaAcompanhamentos.forEach((item,indice)=>{
                        if(indice==index){
                            this.listaAcompanhamentos.splice(indice,1);
                            this.storageService.apagar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,item,"senhaAutorizacao.senha")                          
                        }  
                    });            
                }
            }]
        });
         await alert.present();
    }
    
    async abrirModalLegenda() {
        const modal = await this.modalCtrl.create({
          component: ModalLegendaAcompanharComponent,
          cssClass: 'legenda-acompanhar-modal'
        })
    
        return await modal.present()
    }
}    