import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { Router, NavigationExtras } from '@angular/router';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';
import { AcompanhamentoMedicoDia } from 'src/app/model/AcompanhamentoMedicoDia.model';
import { AcompanhamentoMedicoDado } from 'src/app/model/AcompanhamentoMedicoDado.model';
import { StorageService } from 'src/app/services/storage.service';
import Constantes from 'src/app/config/constantes/constantes';
import { AcompanhamentoMedicoItem } from 'src/app/model/AcompanhamentoMedicoItem.model';
import { GrupoConfigFormulario } from 'src/app/model/GrupoConfigFormulario.model';
import { DadoItemGrupoConfigFormulario } from 'src/app/model/DadoItemGrupoConfigFormulario.model';
import { PopoverCalendarioComponent } from 'src/app/components/popover-calendario/popover-calendario.component';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-dia-acompanhamento',
  templateUrl: './dia-acompanhamento.page.html',
  styleUrls: ['./dia-acompanhamento.page.scss'],
})
export class DiaAcompanhamentoPage implements OnInit {
  
  public formAcompanhamentoDia: FormGroup; 
  public acompanhamentoMedico: AcompanhamentoMedico
  public acompanhamentoMedicoDia: AcompanhamentoMedicoDia
  public listaMedicamentosAcompanhamento: AcompanhamentoMedicoItem[] = []
  public isReadOnly: boolean = false  
  public latitude: number
  public longitude: number
 
  constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private navCtrl: NavController,
      private toast: SaudiToastComponent,
      private popover: PopoverController,
      private storageService: StorageService,
      private geolocation: Geolocation,) { }


  ngOnInit() {
    moment.locale('pt-br');    
    this.exibeFormulario();
    this.getCurrentCoordinates();   
  }

  get resumoDia() {
    return this.formAcompanhamentoDia.get('resumoDia')
  }

  exibeFormulario() {
    let getNav = this.router.getCurrentNavigation()
    this.acompanhamentoMedico = new AcompanhamentoMedico()
    this.acompanhamentoMedicoDia = new AcompanhamentoMedicoDia()
    if (getNav.extras.state) {            
      this.acompanhamentoMedico = getNav.extras.state.acompanhamentoMedico
      this.acompanhamentoMedicoDia =getNav.extras.state.acompanhamentoMedicoDia  
    }else {
        this.toast.errorToast('Ocorreu um erro inesperado, por favor tente novamente.')
        this.navCtrl.navigateBack('menu-principal/exibirFormulario')
    }
    
    this.formAcompanhamentoDia = this.formBuilder.group({
      resumoDia: [this.acompanhamentoMedicoDia.resumoDia || '',Validators.compose([Validators.required])],      
    }) 

    if(this.acompanhamentoMedico.status === Constantes.STATUS_ENCERRADO){
      this.isReadOnly = true
    }
    
    this.montarControleCamposDynamicForm()
    this.setValoresCampos()
  }

  montarControleCamposDynamicForm(){        
    for(let grupo of this.acompanhamentoMedico.configFormulario.listaGrupoConfigFormulario ){
      for(let item of grupo.listaItemGrupoConfigFormulario ){
        for(let dado of item.listaDadoItemGrupoConfigFormulario ){
          let validacoes = []
          this.formAcompanhamentoDia.addControl(dado.idDadoItemGrupoConfigFormularioModel.toString(),new FormControl())
          if(dado.flgObrigatorio){
            validacoes.push(Validators.required)
          }
          if(dado.tamanhoCampo && dado.tamanhoCampo > 0){
            validacoes.push(Validators.maxLength(dado.tamanhoCampo))
          }          
          this.formAcompanhamentoDia.controls[dado.idDadoItemGrupoConfigFormularioModel.toString()].setValidators(validacoes)
          if(this.acompanhamentoMedico.status === Constantes.STATUS_ENCERRADO){
            this.formAcompanhamentoDia.get(dado.idDadoItemGrupoConfigFormularioModel.toString()).disable()
          }
        }
      }   
    }
  } 

  setValoresCampos(){
    for(let dado of this.acompanhamentoMedicoDia.listaAcompanhamentoDado){
      if(dado.dadoItemGrupoConfigFormulario.tipoDado == 'SELEÇÃO MULTIPLA'){
        if(dado.valorDado && dado.valorDado != ''){
          let arrayDado = []
          let atributos = dado.valorDado.split("|")
          for(let item of atributos){
            arrayDado.push(item)
          } 
          this.formAcompanhamentoDia.get(dado.dadoItemGrupoConfigFormulario.idDadoItemGrupoConfigFormularioModel.toString()).setValue(arrayDado)
        }
      }else{
        if(dado.dadoItemGrupoConfigFormulario.tipoDado == 'LIVRE ESCOLHA'){
          for(let grupo of this.acompanhamentoMedico.configFormulario.listaGrupoConfigFormulario){
            for(let item of grupo.listaItemGrupoConfigFormulario){
              for(let dadoItem of item.listaDadoItemGrupoConfigFormulario){
                if(dado.listaAcompanhamentoItem != null){
                  dadoItem.listaItens = dado.listaAcompanhamentoItem
                  for(let item of dadoItem.listaItens){
                    item.concatCodDesItem = item.codItem +" - "+item.desItem
                    item.concatCodDesItemRed  = item.concatCodDesItem.substring(0,25)+"..."
                  }
                }else{
                  dadoItem.listaItens = []
                }  
              }
            }
          }
        }else{
          if(dado.valorDado !== null && dado.valorDado !== undefined){
            this.formAcompanhamentoDia.get(dado.dadoItemGrupoConfigFormulario.idDadoItemGrupoConfigFormularioModel.toString()).setValue(dado.valorDado)
          }  
        }
       }
    }
  }
  
  exibirDados(i){
    let itensGrupo = []   
    itensGrupo = this.acompanhamentoMedico.configFormulario.listaGrupoConfigFormulario
    let index = 0
    for(let item of itensGrupo){
      if(i == index){
        itensGrupo[i].open = !itensGrupo[i].open
      }else{
       itensGrupo[index].open = false
      }
      index = index + 1
    }
  }

  async abrirTelaAnexo(){
    let acompanhamento =  this.acompanhamentoMedico
    let acompanhamentoDia = this.acompanhamentoMedicoDia
    let navigationExtras: NavigationExtras = {
      state: {
        acompanhamento,
        acompanhamentoDia
      }
    }
    this.router.navigateByUrl('menu-principal/anexo', navigationExtras)
  } 
  
  salvar(){    
    let listaDados: AcompanhamentoMedicoDado[] = []   
    for(let grupo of this.acompanhamentoMedico.configFormulario.listaGrupoConfigFormulario ){
      for(let item of grupo.listaItemGrupoConfigFormulario ){
        for(let dado of item.listaDadoItemGrupoConfigFormulario ){          
          if(dado.tipoDado != 'LIVRE ESCOLHA'){
            if(dado.tipoDado === 'TEXTO LIVRE' && !this.validaCamposTextoLivre(dado)){
              this.toast.errorToast('Existem campos com preenchimento inválido. Por favor revise o preenchimento.')
              return
            }else{
              let acompanhamentoDado: AcompanhamentoMedicoDado = new AcompanhamentoMedicoDado()
              acompanhamentoDado.dadoItemGrupoConfigFormulario = dado
              if(dado.tipoDado == 'SELEÇÃO MULTIPLA'){
                let dadosSelecionados = this.formAcompanhamentoDia.get(dado.idDadoItemGrupoConfigFormularioModel.toString()).value
                if(dadosSelecionados && dadosSelecionados != '' && dadosSelecionados != null){
                  acompanhamentoDado.valorDado = ''
                  for(let item of dadosSelecionados){
                    if(acompanhamentoDado.valorDado != ''){
                      acompanhamentoDado.valorDado = acompanhamentoDado.valorDado.concat('|')
                    }
                    acompanhamentoDado.valorDado = acompanhamentoDado.valorDado.concat(item)
                  }                
                }else{
                  acompanhamentoDado.valorDado = ''
                }              
              }else{
                acompanhamentoDado.valorDado = this.formAcompanhamentoDia.get(dado.idDadoItemGrupoConfigFormularioModel.toString()).value
              }
              listaDados.push(acompanhamentoDado)
            }  
          }else{
            let listaItens: AcompanhamentoMedicoItem[] = []
            let listaItensExcluir: AcompanhamentoMedicoItem[] = []
            let acompanhamentoDado: AcompanhamentoMedicoDado = new AcompanhamentoMedicoDado()
            acompanhamentoDado.dadoItemGrupoConfigFormulario = dado
            if(dado.listaItens != null && dado.listaItens.length > 0){
              dado.listaItens.forEach((item,indice)=>{
                let acompanhamentoItem: AcompanhamentoMedicoItem = new AcompanhamentoMedicoItem()
                acompanhamentoItem.codItem = item.codItem
                acompanhamentoItem.desItem = item.desItem
                acompanhamentoItem.posologia = item.posologia
                listaItens.push(acompanhamentoItem)
              })                          
            }
            if(dado.listaItensExcluir != null && dado.listaItensExcluir.length > 0){
              dado.listaItensExcluir.forEach((itemExcluir,indice)=>{
                let acompanhamentoItemExcluir: AcompanhamentoMedicoItem = new AcompanhamentoMedicoItem()
                acompanhamentoItemExcluir.codItem = itemExcluir.codItem
                acompanhamentoItemExcluir.desItem = itemExcluir.desItem
                acompanhamentoItemExcluir.posologia = itemExcluir.posologia
                listaItensExcluir.push(acompanhamentoItemExcluir)
              })                          
            }
            acompanhamentoDado.listaAcompanhamentoItem = listaItens
            acompanhamentoDado.listaAcompanhamentoItemExcluir = listaItensExcluir
            listaDados.push(acompanhamentoDado)                          
          }  
        }
      }   
    }
    this.acompanhamentoMedicoDia.resumoDia = this.resumoDia.value    
    this.acompanhamentoMedicoDia.dataCheckOut = moment(new Date()).format("DD/MM/YYYY HH:mm:ss")
    this.acompanhamentoMedicoDia.listaAcompanhamentoDado = listaDados  
    this.acompanhamentoMedicoDia.statusSincronismo = Constantes.STATUS_PENDENTE
    this.acompanhamentoMedicoDia.flgExibeErroProcesso = false
    this.acompanhamentoMedicoDia.flgExibeSucessoProcesso = false
    this.acompanhamentoMedicoDia.erroSincronismo = ''

    if(this.latitude != null){      
      this.acompanhamentoMedicoDia.latitudeCheckOut = this.latitude.toString()
      this.acompanhamentoMedicoDia.longitudeCheckOut = this.longitude.toString()
    }

    let index = this.acompanhamentoMedico.listaAcompanhamentoDia.indexOf(this.acompanhamentoMedicoDia);
    this.acompanhamentoMedico.listaAcompanhamentoDia[index] = this.acompanhamentoMedicoDia;
    this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,this.acompanhamentoMedico,"senhaAutorizacao.senha")
    this.toast.successToast('Informações salvas com sucesso')
  }  

  validaCamposObrigatorios(grupo: GrupoConfigFormulario){    
    for(let item of grupo.listaItemGrupoConfigFormulario){
      for(let dado of item.listaDadoItemGrupoConfigFormulario){
        if(dado.flgObrigatorio){
          let acompanhamentoMedicoDado: AcompanhamentoMedicoDado
          acompanhamentoMedicoDado = this.acompanhamentoMedicoDia.listaAcompanhamentoDado.find(x => x.dadoItemGrupoConfigFormulario.idDadoItemGrupoConfigFormularioModel == dado.idDadoItemGrupoConfigFormularioModel)
          if(acompanhamentoMedicoDado){
            if(acompanhamentoMedicoDado.dadoItemGrupoConfigFormulario.tipoDado == 'LIVRE ESCOLHA'){            
              if(!acompanhamentoMedicoDado.dadoItemGrupoConfigFormulario.listaValor){
                return false
              }
            }else{  
                if(acompanhamentoMedicoDado.dadoItemGrupoConfigFormulario.tipoDado !== 'SIM OU NÃO' && (!acompanhamentoMedicoDado.valorDado || acompanhamentoMedicoDado.valorDado == null)){
                  return false
                }
            }    
          }else{
            return false
          }
        }    
      }
    }
    return true 
  } 
  
  validaCamposTextoLivre(dado: DadoItemGrupoConfigFormulario){
    let valor = this.formAcompanhamentoDia.get(dado.idDadoItemGrupoConfigFormularioModel.toString()).value
    if(dado.tamanhoCampo && dado.tamanhoCampo > 0 && valor && valor != '' && valor != null){
      if(valor.length > dado.tamanhoCampo){
        return false
      }
    }     
    if(dado.valorValido && dado.valorValido != '' && valor && valor != ''){ 
      let valorValido: boolean = false
      let atributos = dado.valorValido.split("|")
      for(let item of atributos){
        if(item.toUpperCase() === valor.toUpperCase()){
          valorValido = true
        }
      }
      return valorValido       
    }
    return true    
  }      
   
  getCurrentCoordinates(){
    this.geolocation.getCurrentPosition().then((resp) => {  
        this.latitude = resp.coords.latitude;  
        this.longitude = resp.coords.longitude;
    }).catch((error) => {
        console.log('Error getting location', error);
    });
  }
} 