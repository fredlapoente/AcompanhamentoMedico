import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { Router } from '@angular/router';
import { AcompanhamentoMedicoDia } from 'src/app/model/AcompanhamentoMedicoDia.model';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Chooser, ChooserResult } from '@awesome-cordova-plugins/chooser/ngx';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';
import { AcompanhamentoMedicoObs } from 'src/app/model/AcompanhamentoMedicoObs.model';
import { ModalExibirImagemComponent } from 'src/app/components/modal-exibir-imagem/modal-exibir-imagem.component';
import Constantes from 'src/app/config/constantes/constantes';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-anexo',
  templateUrl: './anexo.page.html',
  styleUrls: ['./anexo.page.scss'],
})
export class AnexoPage implements OnInit {
  
  formAnexo: FormGroup;
  public acompanhamentoMedico: AcompanhamentoMedico
  public acompanhamentoMedicoDia: AcompanhamentoMedicoDia
  public acompanhamentoMedicoObs: AcompanhamentoMedicoObs
  public dataObservacao: string
  
  public photoImage: string
  public uploadImage: string 
  public nomeImagem: string 

  options: CameraOptions = { 
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private navCtrl: NavController,
      private toast: SaudiToastComponent,
      private atrCtrl: AlertController,
      private modalCtrl: ModalController,
      private camera: Camera,      
      private chooser: Chooser,
      private storageService: StorageService ) { 
        this.photoImage = ""
        this.uploadImage = ""
        this.nomeImagem = ""
        this.acompanhamentoMedicoObs = new AcompanhamentoMedicoObs()
      }


  ngOnInit() {
    moment.locale('pt-br');
    this.exibeFormulario()
  }  

  get observacao() {
    return this.formAnexo.get('observacao')
  }

  exibeFormulario() {
    let getNav = this.router.getCurrentNavigation()
    this.acompanhamentoMedico = new AcompanhamentoMedico()
    this.acompanhamentoMedicoDia = new AcompanhamentoMedicoDia()
    if (getNav.extras.state) { 
      this.acompanhamentoMedico = getNav.extras.state.acompanhamento          
      this.acompanhamentoMedicoDia = getNav.extras.state.acompanhamentoDia                 
    }else {
        this.toast.errorToast('Ocorreu um erro inesperado, por favor tente novamente.')
        this.navCtrl.navigateBack('menu-principal/diaAcompanhamento')
    }
    this.dataObservacao = this.acompanhamentoMedicoDia.diaAcompanhamento    
    this.formAnexo = this.formBuilder.group({
      observacao: ['',Validators.compose([Validators.required])]                     
    })

    if(this.acompanhamentoMedico.status === Constantes.STATUS_ENCERRADO){
      this.observacao.disable()      
    }
  }

  tirarFoto(){
    this.camera.getPicture(this.options).then((imageData) => {      
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      let str = base64Image; 
      this.photoImage = base64Image;
      this.nomeImagem = this.dataObservacao.replace("/","").replace("/","")+"_"+this.acompanhamentoMedico.listaAcompanhamentoObs.length+".jpeg"
      this.uploadImage = ""
    }, (error) => {
      console.log(error);
    });
  }
  
  upload(){     
    this.chooser.getFile("image/jpeg,image/gif,image/jpg,image/png").then((value:ChooserResult )=>{      
      this.uploadImage = value.dataURI
      this.nomeImagem = value.name
      this.photoImage = ""
    },(error)=>{
      this.toast.errorToast(JSON.stringify(error))      
    })    
  } 

  async salvarAnexo(){
    this.acompanhamentoMedicoObs.anexo = ""
    this.acompanhamentoMedicoObs.dataObservacao = this.dataObservacao
    this.acompanhamentoMedicoObs.observacao = this.observacao.value
    this.acompanhamentoMedicoObs.nomeAnexo = this.nomeImagem
    this.acompanhamentoMedicoObs.tipoTransacao = Constantes.TIPO_TRANSACAO_INSERIR
    this.acompanhamentoMedicoObs.statusSincronismo = Constantes.STATUS_PENDENTE
    this.acompanhamentoMedico.statusSincronismo = Constantes.STATUS_PENDENTE
    this.acompanhamentoMedico.flgExibeGifProcessando = false
    this.acompanhamentoMedico.flgExibeSucessoProcesso = false
    this.acompanhamentoMedico.flgExibeErroProcesso = false
    if(this.uploadImage !== "" && this.uploadImage !== null){
      this.acompanhamentoMedicoObs.anexo = this.uploadImage.replace('data:image/jpeg;base64,','')
    }else{
      if(this.photoImage !== "" && this.photoImage !== null){
        this.acompanhamentoMedicoObs.anexo = this.photoImage.replace('data:image/jpeg;base64,','')
      }
    }
    this.acompanhamentoMedico.listaAcompanhamentoObs.push(this.acompanhamentoMedicoObs)
    await this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,this.acompanhamentoMedico,"senhaAutorizacao.senha")
    this.observacao.setValue("")
    this.uploadImage = ""
    this.photoImage = ""
    this.nomeImagem = ""
  }

  async apagarAnexo(index:number){
    let mensagem = "Tem certeza que deseja excluir a Observação "+ this.acompanhamentoMedico.listaAcompanhamentoObs[index].observacao+" ?"
    const alert = await this.atrCtrl.create({
      header: 'Excluir Observação ',
      message: mensagem,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: (blah) => {}
          }, {
            text: 'Confirmar',
            handler: () => {
              this.acompanhamentoMedico.listaAcompanhamentoObs.forEach(async (item,indice)=>{
                if(indice==index){
                  if(this.acompanhamentoMedico.listaAcompanhamentoObs[indice].statusSincronismo === Constantes.STATUS_SINCRONIZADO){
                    this.acompanhamentoMedico.listaAcompanhamentoObs[indice].tipoTransacao =  Constantes.TIPO_TRANSACAO_EXCLUIR
                    this.acompanhamentoMedico.listaAcompanhamentoObs[indice].statusSincronismo = Constantes.STATUS_PENDENTE
                    this.acompanhamentoMedico.statusSincronismo = Constantes.STATUS_PENDENTE
                    this.acompanhamentoMedico.flgExibeGifProcessando = false
                    this.acompanhamentoMedico.flgExibeSucessoProcesso = false
                    this.acompanhamentoMedico.flgExibeErroProcesso = false
                  }else{
                    this.acompanhamentoMedico.listaAcompanhamentoObs.splice(indice,1)
                  }
                  await this.storageService.atualizar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,this.acompanhamentoMedico,"senhaAutorizacao.senha")
                }  
              });
            }
          }
        ]
      });
      await alert.present();
  }

  async visualizarAnexo(index:number){
    const modal = await this.modalCtrl.create({
      component: ModalExibirImagemComponent,
      cssClass: 'modal-exibir-imagem-modal',
      componentProps: { 
        imagem: 'data:image/jpeg;base64,'+this.acompanhamentoMedico.listaAcompanhamentoObs[index].anexo
      } 
    });
    return await modal.present();
  }
} 