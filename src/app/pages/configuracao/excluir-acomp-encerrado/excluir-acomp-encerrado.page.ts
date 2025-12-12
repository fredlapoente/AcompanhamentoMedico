import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormBuilder, FormGroup} from '@angular/forms';
import Constantes from 'src/app/config/constantes/constantes';
import { StorageService } from 'src/app/services/storage.service';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-excluir-acomp-encerrado',
    templateUrl: './excluir-acomp-encerrado.page.html',
    styleUrls: ['./excluir-acomp-encerrado.page.scss'],
  })
export class ExcluirAcompEncerradoPage implements OnInit {

    formExcluirAcompEncerrado: FormGroup; 
    public listaPeriodo = ["Todos","Mais de 3 dias","Mais de 15 dias","Mais de 30 dias"] 
    public listaAcompEncerrados: AcompanhamentoMedico[]

    constructor(private formBuilder: FormBuilder,
                private storageService: StorageService,
                private atrCtrl: AlertController) { }

    ngOnInit() {
        moment.locale('pt-br');
        this.formExcluirAcompEncerrado = this.formBuilder.group({
            filtroPeriodo: [''],                                  
        }) 
        this.listaAcompEncerrados = []   
    }

    get filtroPeriodo() {
        return this.formExcluirAcompEncerrado.get('filtroPeriodo')
    }

    buscarAcompanhamentosEncerrados(){
        let acompanhamentoMedico: AcompanhamentoMedico
        this.listaAcompEncerrados = []
        let dataFiltro =  new Date()
        switch (this.filtroPeriodo.value){
            case "Todos":
                dataFiltro = null
                break
            case "Mais de 3 dias":
                dataFiltro.setDate(dataFiltro.getDate() - 3)
                break
            case "Mais de 15 dias":
                dataFiltro.setDate(dataFiltro.getDate() - 15)
                break
            case "Mais de 30 dias":
                dataFiltro.setDate(dataFiltro.getDate() - 30)
                break   
        }

        this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(items=>{  
            if(items != null){    
                items.forEach(acomp => {
                   if(acomp.status == Constantes.STATUS_ENCERRADO){
                        let dataEncerramento = new Date(moment(acomp.dataEncerramento,"DD/MM/YYYY").toISOString())
                        if(dataFiltro != null){
                            if(dataEncerramento <= dataFiltro){
                                this.listaAcompEncerrados.push(acomp)
                            }    
                        }else{
                            this.listaAcompEncerrados.push(acomp)
                        }                      
                   }
                })                
            } 
        })
    }

    async apagarAcompanhamento(index:number) {
        let mensagem = "Ao confirmar o acompanhamento será excluído do seu dispositivo.Deseja excluir o acompanhamento?"
        const alert = await this.atrCtrl.create({
            header: 'Excluir acompanhamento encerrado',
            message: mensagem,
            buttons: [{
                text: 'Cancelar',
                role: 'cancel',
                handler: (blah) => {}
            }, 
            {
                text: 'Confirmar',
                handler: () => { 
                    this.listaAcompEncerrados.forEach((item,indice)=>{
                        if(indice==index){
                            this.listaAcompEncerrados.splice(indice,1);
                            this.storageService.apagar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,item,"senhaAutorizacao.senha")                          
                        }  
                    });                    
                }
            }]
        });
         await alert.present();
    } 

    async apagarTodos(){
        let mensagem = "Ao confirmar TODOS os acompanhamentos encerrados serão excluídos do seu dispositivo.Deseja excluir todos os acompanhamentos encerrados?"
        const alert = await this.atrCtrl.create({
            header: 'Excluir TODOS os acompanhamentos encerrados',
            message: mensagem,
            buttons: [{
                text: 'Cancelar',
                role: 'cancel',
                handler: (blah) => {}
            }, 
            {
                text: 'Confirmar',
                handler: async () => { 
                    for(let acomp of this.listaAcompEncerrados){                                        
                        await this.storageService.apagar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,acomp,"senhaAutorizacao.senha")
                    } 
                    this.listaAcompEncerrados = []           
                }
            }]
        });
         await alert.present();
    }
    
}