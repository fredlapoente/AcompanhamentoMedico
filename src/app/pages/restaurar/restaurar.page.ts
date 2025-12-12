import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { SaudiLoadingComponent } from 'src/app/components/saudi-loading/saudi-loading.component';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import Constantes from 'src/app/config/constantes/constantes';
import { Usuario } from 'src/app/model/Usuario.model';
import { AcompanhamentoService } from 'src/app/services/acompanhamento.service';
import { NetworkService } from 'src/app/services/network.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-restaurar',
    templateUrl: './restaurar.page.html',
    styleUrls: ['./restaurar.page.scss'],
  })
export class RestaurarPage implements OnInit {

    constructor(
        private router: Router,
        private atrCtrl: AlertController,
        private networkService: NetworkService,
        private toastCrl: SaudiToastComponent,
        private loading: SaudiLoadingComponent,
        private acompanhamentoService: AcompanhamentoService,
        private storageService: StorageService,
    ){}    

    ngOnInit() {
        moment.locale('pt-br');
        this.networkService.CheckNetworkStatus()
        if (this.networkService.NetworkStatus.value){
          this.restaurar()
        }else{
          this.alertaSemConexao()
        }  
    }

    async alertaSemConexao(){          
      const alert = await this.atrCtrl.create({
        header: 'Para restaurar acompanhamentos você precisa de conexão com a internet',
        buttons: [
          {
            text: 'Ok',
            role: 'ok',
            handler: (blah) => {
              this.router.navigateByUrl('')
            }
          }, 
        ]
      });    
      await alert.present();
  }

  async restaurar(){          
      const alert = await this.atrCtrl.create({
        header: 'Todos dos acompanhamentos deste dispositivo serão excluídos, incluindo de outros usuários. Deseja continuar?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: (blah) => {
              this.router.navigateByUrl('')
            }
          }, {
            text: 'Confirmar',
            handler: () => {
                this.confirmarRestaurar()                 
            }
          }
        ]
      });    
      await alert.present();
  }

  async confirmarRestaurar(){
    let usuario: Usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
    const loading = await this.loading.presentLoading('Restaurando dados...')
    await this.acompanhamentoService.restaurarFormulariosAcompanhamentos(usuario).subscribe(async (data: any) => {
      usuario = data 
      let listaFormulariosRestaurar = usuario.listaAcompanhamentoRestaurar
      usuario.listaAcompanhamentoRestaurar = []    
      await this.storageService.apagarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO)
      for(let acomp of listaFormulariosRestaurar){
        acomp.usuario = usuario
        acomp.operadora = usuario.operadora
        await this.storageService.adicionar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,acomp)
      }      
      await this.storageService.atualizar(Constantes.STORAGE_USUARIO,usuario,"idUsuario")
      localStorage.setItem('@appAcompanhamentoMedico:dadosUsuario',JSON.stringify(usuario))
      localStorage.setItem('@appAcompanhamentoMedico:operadoraUsuario', JSON.stringify(usuario.operadora))
      loading.dismiss()
      this.toastCrl.successToast('Dados restaurados com sucesso!')
    }, error => {
      this.toastCrl.errorToast(error)
      loading.dismiss()
    })
    this.router.navigateByUrl('')
  }
}