import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { PopoverController } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadoItemGrupoConfigFormulario } from 'src/app/model/DadoItemGrupoConfigFormulario.model';
import { AcompanhamentoMedicoItem } from 'src/app/model/AcompanhamentoMedicoItem.model';
import { NetworkService } from 'src/app/services/network.service';
import { DominioCodigo } from 'src/app/model/DominioCodigo.model';
import Constantes from 'src/app/config/constantes/constantes';
import { Operadora } from 'src/app/model/Operadora.model';
import { StorageService } from 'src/app/services/storage.service';
import { SaudiToastComponent } from '../saudi-toast/saudi-toast.component';
import { ParametrosService } from 'src/app/services/parametros.service';

@Component({
  selector: 'app-popover-add-novo-item.component',
  templateUrl: './popover-add-novo-item.component.html'
})
export class PopoverAddNovoItemComponent implements OnInit {
  
    dadoItemGrupoConfigFormulario: DadoItemGrupoConfigFormulario
    formPopover: FormGroup; 
    public exibeCampoOutroHorario: boolean = false
    public listaHorarios: DominioCodigo[] = []
  
    constructor (private popover: PopoverController,
                 private toastCrl: SaudiToastComponent,
                 private formBuilder: FormBuilder,
                 private parametrosService: ParametrosService,
                 private networkService: NetworkService,
                 private storageService: StorageService) { }

    get codItem(){
        return this.formPopover.get('codItem')
    }

    get desItem(){
        return this.formPopover.get('desItem')
    }

    get horario(){
        return this.formPopover.get('horario')
    }

    get outroHorario(){
        return this.formPopover.get('outroHorario')
    }

    ngOnInit() {
        moment.locale('pt-br'); 
        this.formPopover = this.formBuilder.group({
            codItem: ['',Validators.compose([Validators.required])],
            desItem: ['',Validators.compose([Validators.required])],
            horario: [''],
            outroHorario: ['']                      
        }) 
        this.buscaHorariosMedicamento()           
    }

    async buscaHorariosMedicamento(){
      this.networkService.CheckNetworkStatus()
      if (this.networkService.NetworkStatus.value){
        this.buscaHorariosMedicamentoOnline()
      }else{
        this.buscaHorariosMedicamentoOffline()
      }           
    }
    
    async buscaHorariosMedicamentoOnline(){
      let operadora = new Operadora
      let dominioCodigo = new DominioCodigo
      operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
      dominioCodigo.codTabela = Constantes.TABELA_POSOLOGIA      
      dominioCodigo.operadora = operadora
      this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe((data: any) => {
        this.listaHorarios = data        
      }, error => {
        this.toastCrl.errorToast(error)
      }) 
    }
  
    async buscaHorariosMedicamentoOffline(){
      this.storageService.buscarTodos(Constantes.STORAGE_POSOLOGIA).then(items=>{
        if(items != null){
          this.listaHorarios = items;
        }  
      }, error => {
        this.toastCrl.errorToast(error)
      }) 
    }

    confirmar(){
        let acompanhamentoMedicoItem:  AcompanhamentoMedicoItem = new AcompanhamentoMedicoItem()
        acompanhamentoMedicoItem.codItem = this.codItem.value
        acompanhamentoMedicoItem.desItem = this.desItem.value
        acompanhamentoMedicoItem.concatCodDesItem = this.codItem.value +" - "+this.desItem.value
        acompanhamentoMedicoItem.concatCodDesItemRed  = acompanhamentoMedicoItem.concatCodDesItem.substring(0,25)+"..."
        if(this.horario.value == 'OUTROS'){
            acompanhamentoMedicoItem.posologia = this.outroHorario.value
        }else{
            acompanhamentoMedicoItem.posologia = this.horario.value
        }  
        this.dadoItemGrupoConfigFormulario.listaItens.push(acompanhamentoMedicoItem) 
        this.popover.dismiss()   
    }

    cancelar(){
        this.popover.dismiss() 
    } 
    
    exibirCampoOutroHorario(){   
        if(this.horario.value == 'OUTROS'){
            this.exibeCampoOutroHorario = true;
        }else{
            this.exibeCampoOutroHorario = false;
        }    
    }
}