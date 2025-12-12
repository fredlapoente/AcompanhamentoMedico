import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController, LoadingController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Usuario } from '../model/Usuario.model';
import { SaudiToastComponent } from '../components/saudi-toast/saudi-toast.component';
import { SaudiLoadingComponent } from '../components/saudi-loading/saudi-loading.component';
import { NetworkService } from '../services/network.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private navCtrl: NavController,
    private loginService: LoginService,
    private loadingSaudi: SaudiLoadingComponent,
    private toastSaudi: SaudiToastComponent,
    private networkService: NetworkService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(async (resolve, reject) => {
      const dadosUsuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
      const dadosOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'))
      if (dadosUsuario) { 
        let usuario = new Usuario()
        usuario.login = dadosUsuario.login
        usuario.senha = dadosUsuario.senha
        usuario.operadora.codOperadora = dadosOperadora.codOperadora        
        const loading = await this.loadingSaudi.presentLoadingWithOptions({
          cssClass: 'loading-on-auth',
          mode: 'md',
          translucent: true,
          showBackdrop: false,
          spinner: null,
          keyboardClose: true 
        })
        this.networkService.CheckNetworkStatus() 
        if (this.networkService.NetworkStatus.value){
          this.loginService.loginAcompanhamentoMedico(usuario).subscribe(() => {
            loading.dismiss()
            resolve(true)
          }, error => {
            loading.dismiss()
            this.toastSaudi.errorToast(error)

            if (localStorage) {
              localStorage.removeItem('@appAcompanhamentoMedico:dadosOperadora')
              localStorage.removeItem('@appAcompanhamentoMedico:dadosUsuario')
              localStorage.removeItem('@appAcompanhamentoMedico:operadoraUsuario')
            }

            reject(false)
            this.navCtrl.navigateBack('/selecionar-operadora')

          })
        }else{
          loading.dismiss()
          resolve(true)
        } 
      }
      else if (!dadosOperadora) { 
        this.navCtrl.navigateBack('/selecionar-operadora')
        resolve(false)
      } else if (!dadosUsuario) { 
        this.navCtrl.navigateBack('/login')
        resolve(false)
      } else {
        resolve(true)
      }
    })

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state)
  }

}