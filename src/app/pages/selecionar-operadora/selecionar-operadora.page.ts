import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { SaudiLoadingComponent } from 'src/app/components/saudi-loading/saudi-loading.component';
import { OperadoraService } from 'src/app/services/operadora.service';
import { NavController, ModalController } from '@ionic/angular';
import { ModalOperadoraComponent } from 'src/app/components/modal-operadora/modal-operadora.component';
import { ConfigTheme } from 'src/app/config/config-theme/config.theme';
import { StorageService } from 'src/app/services/storage.service';
import { Operadora } from 'src/app/model/Operadora.model';
import { NetworkService } from 'src/app/services/network.service';
import Constantes from 'src/app/config/constantes/constantes';

@Component({
  selector: 'app-selecionar-operadora',
  templateUrl: './selecionar-operadora.page.html',
  styleUrls: ['./selecionar-operadora.page.scss'],
})
export class SelecionarOperadoraPage implements OnInit {

  public formOperadora: FormGroup
  public listaOperadora: Operadora[] = []
  public flgOperadoraHabilitada = true

  constructor(private formBuilder: FormBuilder,
    private toast: SaudiToastComponent,
    private loading: SaudiLoadingComponent,
    private operadoraService: OperadoraService,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private storageService: StorageService,
    private networkService: NetworkService) { }

  ngOnInit() {
    this.criarFormulario()
  }

  get codOperadora() {
    return this.formOperadora.get('codOperadora')
  }

  get operadora() {
    return this.formOperadora.get('operadora')
  }

  criarFormulario() {
    this.formOperadora = this.formBuilder.group({
      codOperadora: ['', Validators.compose([ Validators.required])],
      operadora: [{value: '',disabled: true}, Validators.compose([Validators.required])]
    })
  }

  async abrirModalOperadora() {
    const modal = await this.modalCtrl.create({
      component: ModalOperadoraComponent,
      cssClass: 'operadora-modal'
    })

    return await modal.present()
  }

  async buscarOperadora() {
    this.listaOperadora = []
    this.flgOperadoraHabilitada = true
    this.operadora.disable()
    this.networkService.CheckNetworkStatus()
    if (this.networkService.NetworkStatus.value){
      this.buscaOnline()
    }else{
     this.buscaOffline()     
    }
  }

  async buscaOnline(){
    const codOperadora = parseInt(this.codOperadora.value)
    const loading = await this.loading.presentLoading('Buscando operadora(s)...')
    this.operadoraService.getOperadora(codOperadora).subscribe((data: any) => {
      this.listaOperadora = data
      loading.dismiss()
      this.operadora.enable() 
      if(this.listaOperadora.length === 1){
        this.formOperadora.get("operadora").setValue(this.listaOperadora[0].idOperadora)
        this.mudarCor()
      }           
    }, error => {
      this.toast.errorToast(error)
      loading.dismiss()
    })
  }

  async buscaOffline(){
    const codOperadora = parseInt(this.codOperadora.value)
    const loading = await this.loading.presentLoading('Buscando operadora(s)...')
    let operadoraOff: Operadora
    this.storageService.buscarTodos(Constantes.STORAGE_OPERADORA).then(items=>{
      if(items != null){
        this.listaOperadora = items
        operadoraOff = this.listaOperadora.find(x => x.codOperadora === codOperadora);
      }
      if(operadoraOff){
        loading.dismiss()
        this.operadora.enable() 
        this.formOperadora.get("operadora").setValue(operadoraOff.idOperadora)
        this.mudarCor()                
      }else{
        this.listaOperadora = []
        this.toast.errorToast("Nova Operadora apenas online. Verifique sua conexão com a internet.")
        loading.dismiss()
      }           
    }, error => {
      this.toast.errorToast(error)
      loading.dismiss()
    })
  }

  async selecionarOperadora() { 
    const loading = await this.loading.presentLoading('Aguarde...')
    try {      
      const idOperadora = this.operadora.value      
      const operadora = this.listaOperadora.find(x => x.idOperadora === idOperadora)      
      this.gravaOperadoraOffline(operadora)
      localStorage.setItem('@appAcompanhamentoMedico:dadosOperadora', JSON.stringify(operadora))      
      this.navCtrl.navigateForward('/login')
    } catch (error) {
      this.toast.errorToast('Desculpe, ocorreu um erro inesperado, tente novamente.')
    } finally {
      loading.dismiss()
    }
  }

  gravaOperadoraOffline(operadora: Operadora){
    this.storageService.buscarTodos(Constantes.STORAGE_OPERADORA).then(items=>{
      let operadoraOff: Operadora
      if(items != null){
        operadoraOff = items.find(x => x.idOperadora === operadora.idOperadora);
      } 
      if(operadoraOff){
        this.storageService.atualizar(Constantes.STORAGE_OPERADORA,operadora,"idOperadora")        
      }else{
        this.storageService.adicionar(Constantes.STORAGE_OPERADORA,operadora)
      }           
    })
  }

  mudarCor() {
    ConfigTheme.mudarTema(this.formOperadora.value.codOperadora)
  }
  
}