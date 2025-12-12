import { Component } from '@angular/core';


import { Platform, AlertController, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { LoginService } from './services/login.service';
import { Usuario } from './model/Usuario.model';
import { ConfigTheme } from './config/config-theme/config.theme';
import { VerificaVersao } from 'src/app/util/verifica-versao-util';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})


export class AppComponent {

  private urlMenu = '/menu-principal'

  public appPages = [
    {
      title: 'Abrir',
      url: `${this.urlMenu}/redireciona-perfil`,
      icon: 'open'
    },
    {
      title: 'Acompanhar',
      url: `${this.urlMenu}/acompanhar`,
      icon: 'create'
    },
    {
      title: 'Importar',
      url: `${this.urlMenu}/importar-com-senha`,
      icon: 'download'
    },
    {
      title: 'Restaurar',
      url: `${this.urlMenu}/restaurar`,
      icon: 'sync'
    },
     {
       title: 'Sincronizar',
       url: `${this.urlMenu}/sincronizar`,
       icon: 'cloud'
     }
  ];

  public dadosUsuario: Usuario
  public userInitials: string
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private loginService: LoginService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private menuController: MenuController,
    private verificaVersao: VerificaVersao,
  ) {    
    this.initializeApp();
    let pages = [
      `${this.urlMenu}/redireciona-perfil`,
      `${this.urlMenu}/acompanhar`,
      `${this.urlMenu}/importar-com-senha`,
      `${this.urlMenu}/restaurar`,
      `${this.urlMenu}/sincronizar`,
    ]
    this.platform.backButton.subscribe(() => {
      if (pages.includes(this.router.url)) {
        this.navCtrl.navigateBack('menu-principal')
      }
    })
  }

  initializeApp() {
    moment.locale('pt-br');
    this.platform.ready().then(() => {
      this.verificaVersao.checkAppVersion();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.desabilitarMenu()
      this.dadosUsuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
      if (localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora')) {
        ConfigTheme.mudarTema(JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora')).codOperadora)
      }
      this.userInitials = this.loginService.getUserInitials(this.dadosUsuario)
    });
  }  

  desabilitarMenu() {
    this.menuController.enable(false)
    this.menuController.swipeGesture(false)
  }

  async alertLogout() {
    const alert = await this.alertController.create({
      header: 'Sair',
      message: 'Deseja <strong>sair</strong> do aplicativo?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.logout()
          }
        },
        'Não'
      ]
    });

    await alert.present();
  }

  logout() {

    const dadosUsuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
    let usuario = new Usuario()
    usuario.login = dadosUsuario.login
    usuario.idUsuario = dadosUsuario.idUsuario
    const { login } = this.dadosUsuario

    if (localStorage) {
      localStorage.setItem('@appAcompanhamentoMedico:ultimoUsuarioLogado', login)
      localStorage.removeItem('@appAcompanhamentoMedico:dadosUsuario')
      localStorage.removeItem('@appAcompanhamentoMedico:operadoraUsuario')
    }

    this.desabilitarMenu()
    this.navCtrl.navigateBack('/login')
  }

}
