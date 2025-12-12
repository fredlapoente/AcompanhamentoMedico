import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import * as moment from 'moment';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import Constantes from 'src/app/config/constantes/constantes';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';
import { Usuario } from 'src/app/model/Usuario.model';
import { AcompanhamentoService } from 'src/app/services/acompanhamento.service';
import { NetworkService } from 'src/app/services/network.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-listar-acompanhamento',
    templateUrl: './listar-acompanhamento.page.html',
    styleUrls: ['./listar-acompanhamento.page.scss'],
  })
export class ListarAcompanhamentoPage implements OnInit {

    public listaAcompanhamentos = []
    public listaAcompanhamentosFiltrados = []
    public listaAcompanhamentosPagina = []
    public filtroLista: string
    public flgMarcarTodos: boolean     

    constructor(
        private router: Router,
        private navCtrl: NavController,
        private atrCtrl: AlertController,
        private toast: SaudiToastComponent,
        private acompanhamentoService: AcompanhamentoService,
        private storageService: StorageService,
        private networkService: NetworkService){}

    ngOnInit() {
        moment.locale('pt-br');
        this.flgMarcarTodos = false
        this.recuperarDados();             
    }

    recuperarDados() {
        let getNav = this.router.getCurrentNavigation()
        if (getNav.extras.state) {            
          this.listaAcompanhamentos = getNav.extras.state.lista
          this.listaAcompanhamentosFiltrados = this.listaAcompanhamentos  
          this.verificaExisteDispositivo(this.listaAcompanhamentos)                        
        }else {
            this.toast.errorToast('Ocorreu um erro inesperado, por favor tente novamente.')
            this.navCtrl.navigateBack('menu-principal/importar-com-senha')
        }
    }

    filtrarLista(event){
        this.filtroLista = event.target.value.toLowerCase()
        this.listaAcompanhamentosFiltrados = this.listaAcompanhamentos     
        this.listaAcompanhamentosFiltrados = this.listaAcompanhamentosFiltrados.filter((item) =>{
          return item.concatDadosAcompanhamentoFiltro.toLowerCase().includes(this.filtroLista)
        })     
    }
  
    cancelaFiltroLista(){
        this.filtroLista = ''
        this.listaAcompanhamentosFiltrados = this.listaAcompanhamentos      
    }

    async confirmarImportarAcompanhamento(){
        this.networkService.CheckNetworkStatus()
        if (!this.networkService.NetworkStatus.value) {
            this.toast.errorToast("Sem conexão com a internet, não é possível importar.")
        }else{
            let importar: boolean = false
            for(let acompanhamento of this.listaAcompanhamentosFiltrados){
                if(acompanhamento.flgImportar){
                    importar = true
                    break
                }
            }
            if(importar){
                let mensagem = "Os acompanhamento médicos marcados serão importados."  
                const alert = await this.atrCtrl.create({
                    header: 'Importar Acompanhamento?',
                    message: mensagem,
                    buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {}
                    }, 
                    {
                        text: 'Confirmar',
                        handler: () => { 
                            this.importarAcompanhamento()                                                           
                        }
                    }    
                    ]                    
                });
                await alert.present()         
            }else{
                this.toast.errorToast("Nenhum acompanhamento selecionado para importar")
            }
        }      
    }

    async importarAcompanhamento(){
        let usuario: Usuario = new Usuario()
        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
        for(let acompanhamento of this.listaAcompanhamentosFiltrados){
            if (acompanhamento.flgImportar) { 
                acompanhamento.flgExibeGifProcessando = true    
                acompanhamento.flgImportar = false                    
                acompanhamento.flgImportadoSucesso = true
                acompanhamento.flgExibeGifProcessando = false
                acompanhamento.usuario = usuario
                acompanhamento.operadora = usuario.operadora 
                if(acompanhamento.flgExisteDispositivo){                    
                    await this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,acompanhamento,"senhaAutorizacao.senha")
                }else{ 
                    await this.storageService.adicionar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,acompanhamento)
                }
            }
        }
    }   
    
    async verificaExisteDispositivo(listaAcompanhamentos : AcompanhamentoMedico[]){
        let acompanhamentoDispositivo: AcompanhamentoMedico
        let listaDispositivo = []
        await this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(items=>{
            if(items != null){
                listaDispositivo = items;
            }  
        }) 
        for(let acomp of listaAcompanhamentos){
            acompanhamentoDispositivo = listaDispositivo.find(x => x.senhaAutorizacao.senha === acomp.senhaAutorizacao.senha && 
                                                                   x.beneficiario.carteiraBeneficiario === acomp.beneficiario.carteiraBeneficiario )
            if(acompanhamentoDispositivo != null){
                acomp.flgExisteDispositivo = true
            }else{
                acomp.flgExisteDispositivo = true
                acomp.flgExisteDispositivo = false
            } 
        }                                       
    }

    marcarDesmarcarTodos(){         
        this.flgMarcarTodos = !this.flgMarcarTodos;
        for(let acompanhamento of this.listaAcompanhamentosFiltrados){
            acompanhamento.flgImportar = this.flgMarcarTodos                            
        }
    }
}    