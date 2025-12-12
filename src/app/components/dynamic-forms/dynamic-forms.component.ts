import { Component, OnInit,Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { DadoItemGrupoConfigFormulario } from 'src/app/model/DadoItemGrupoConfigFormulario.model'
import { StorageService } from 'src/app/services/storage.service';
import Constantes from 'src/app/config/constantes/constantes';
import { AcompanhamentoMedicoItem } from 'src/app/model/AcompanhamentoMedicoItem.model';
import { ItemPrincipal } from 'src/app/model/ItemPrincipal.model';
import { SaudiToastComponent } from '../saudi-toast/saudi-toast.component';
import { AlertController, PopoverController } from '@ionic/angular';
import { PopoverAddNovoItemComponent } from '../popover-add-novo-item/popover-add-novo-item.component';
import { DominioCodigo } from 'src/app/model/DominioCodigo.model';
import { Operadora } from 'src/app/model/Operadora.model';
import { NetworkService } from 'src/app/services/network.service';
import { ParametrosService } from 'src/app/services/parametros.service';

@Component({
  selector: 'dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss'],
})
export class DynamicFormsComponent implements OnInit {

  @Input() dado: DadoItemGrupoConfigFormulario;
  @Input() form: FormGroup;
  @Input() statusAcompanhamento: string;  
 
  public exibeCampoOutroHorario: boolean = false 
  public listaItemFiltrada: ItemPrincipal[] = []
  public itemSelecionado: ItemPrincipal
  public horariosMedicamento: DominioCodigo[] = []

  constructor(private storageService: StorageService,
              private toastCrl: SaudiToastComponent,
              private atrCtrl: AlertController,
              private popover: PopoverController,
              private parametrosService: ParametrosService,
              private networkService: NetworkService) {  }

  get horario() {
    return this.form.get('horario')
  }

  get outroHorario(){
    return this.form.get('outroHorario')
  }
  
  ngOnInit(){
    if(this.dado.tipoItem !== null){
      this.buscaListaItens()
      if(!this.dado.listaItens){
        this.dado.listaItens = []
      }
      if(!this.dado.listaItensExcluir){
        this.dado.listaItensExcluir = []
      }
    }  
    if(this.dado.tipoItem == 'MEDICAMENTO'){
      this.form.addControl("horario", new FormControl(''))
      this.form.addControl("outroHorario", new FormControl('',Validators.compose([Validators.required])))
      this.buscaHorariosMedicamento()
    }    
  }

  get isRequiredValid() { 
    return ((this.form.controls[this.dado.idDadoItemGrupoConfigFormularioModel].dirty || this.form.controls[this.dado.idDadoItemGrupoConfigFormularioModel].touched)
            && this.form.controls[this.dado.idDadoItemGrupoConfigFormularioModel].hasError('required')); 
  }

  get isMaxLengthValid(){    
    return ((this.form.controls[this.dado.idDadoItemGrupoConfigFormularioModel].dirty || this.form.controls[this.dado.idDadoItemGrupoConfigFormularioModel].touched)
            && this.form.controls[this.dado.idDadoItemGrupoConfigFormularioModel].hasError('maxlength'));
  }

  get isValorValid(){
    let valorValido: boolean = true
    let valorPreenchido = this.form.get(this.dado.idDadoItemGrupoConfigFormularioModel.toString()).value 
    if(this.dado.valorValido && this.dado.valorValido != '' && valorPreenchido && valorPreenchido != ''){ 
      let atributos = this.dado.valorValido.split("|")
      for(let item of atributos){
        if(item.toUpperCase() === valorPreenchido.toUpperCase()){
          valorValido = false
          break
        }
      }       
    }else{
      valorValido = false
    }
    return valorValido
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
      this.horariosMedicamento = data        
    }, error => {
      this.toastCrl.errorToast(error)
    }) 
  }

  async buscaHorariosMedicamentoOffline(){
    this.storageService.buscarTodos(Constantes.STORAGE_POSOLOGIA).then(items=>{
      if(items != null){
        this.horariosMedicamento = items;
      }  
    }, error => {
      this.toastCrl.errorToast(error)
    }) 
  }
 
  async buscaListaItens(){
    this.dado.listaValor = []
    await this.storageService.buscarTodos(Constantes.STORAGE_ITENS_PRINCIPAIS).then(async items=>{
      if(items != null){  
        for(let i of items){ 
          if(i.tipoItem == this.dado.tipoItem){ 
            this.dado.listaValor.push(i)
          }   
        }             
      }  
    })    
  } 

  filtrarItem(filtro){    
    if(filtro.target.value != '' && filtro.target.value != null){
      this.listaItemFiltrada = this.dado.listaValor.filter((item) =>{
        return item.concatDadosItemFiltro.toLowerCase().includes(filtro.target.value.toLowerCase())
      }) 
    }else{
      this.listaItemFiltrada = []
    }  
  }
  
  selecionaItem(item: ItemPrincipal){    
    this.form.get(this.dado.idDadoItemGrupoConfigFormularioModel.toString()).setValue(item.desItem)   
    this.itemSelecionado = item
    this.listaItemFiltrada = [] 
  }

  adicionarItem(){    
    if(this.itemSelecionado == null){
      this.toastCrl.errorToast('Obrigatório selecionar um '+this.dado.tipoItem)      
      return
    }else{      
      if(this.dado.tipoItem == 'MEDICAMENTO' && this.horario.value == 'OUTROS' && this.outroHorario.value == ''){
        this.toastCrl.errorToast('Obrigatório preencher um horário.')
        this.outroHorario.setErrors({'required': true})
        this.outroHorario.invalid
        return
      } else{
        let item:  AcompanhamentoMedicoItem = new AcompanhamentoMedicoItem()
        item = this.dado.listaItens.find(x=> x.codItem === this.itemSelecionado.codItem)
        if(item != null){
          this.toastCrl.errorToast('Item já inserido na lista.')      
          return
        }
      }
    }
    
    let acompanhamentoMedicoItem:  AcompanhamentoMedicoItem = new AcompanhamentoMedicoItem()
    acompanhamentoMedicoItem.codItem = this.itemSelecionado.codItem
    acompanhamentoMedicoItem.desItem = this.itemSelecionado.desItem
    acompanhamentoMedicoItem.concatCodDesItem = this.itemSelecionado.codItem +" - "+this.itemSelecionado.desItem
    acompanhamentoMedicoItem.concatCodDesItemRed  = acompanhamentoMedicoItem.concatCodDesItem.substring(0,25)+"..."
    if(this.dado.tipoItem == 'MEDICAMENTO'){
      if(this.horario.value == 'OUTROS'){
        acompanhamentoMedicoItem.posologia = this.outroHorario.value
      }else{
        acompanhamentoMedicoItem.posologia = this.horario.value
     } 
      this.horario.reset()
      this.exibeCampoOutroHorario = false; 
    }   
    this.dado.listaItens.push(acompanhamentoMedicoItem)
    this.form.get(this.dado.idDadoItemGrupoConfigFormularioModel.toString()).reset()
    this.itemSelecionado = new ItemPrincipal()       
  }

  async apagarItemLista(index:number) {
    let mensagem = "Tem certeza que deseja excluir o item "+ this.dado.listaItens[index].concatCodDesItem+" ?"
    const alert = await this.atrCtrl.create({
      header: 'Excluir '+this.dado.tipoItem,
      message: mensagem,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: (blah) => {}
          }, {
            text: 'Confirmar',
            handler: () => {
              this.dado.listaItens.forEach((item,indice)=>{
                if(indice==index){
                  this.dado.listaItensExcluir.push(this.dado.listaItens[indice])
                  this.dado.listaItens.splice(indice,1);                                 
                }  
              });
            }
          }
        ]
      });
      await alert.present();
  }  

  exibirCampoOutroHorario(){   
    if(this.horario.value == 'OUTROS'){
      this.exibeCampoOutroHorario = true;
    }else{
      this.exibeCampoOutroHorario = false;
    }    
  }

  async novoItem(ev: any){    
    const pop = await this.popover.create({
        component: PopoverAddNovoItemComponent,
        event: ev,
        componentProps: {
          dadoItemGrupoConfigFormulario: this.dado
        },
        translucent: true            
    });     
    return await pop.present();  
  }

  ajustaTexto(){
    let valor : string = this.form.get(this.dado.idDadoItemGrupoConfigFormularioModel.toString()).value
    let ajustado: string = valor.replace(/(\r\n|\n|\r)/gm, "");    
    this.form.get(this.dado.idDadoItemGrupoConfigFormularioModel.toString()).setValue(ajustado)
  }
}
