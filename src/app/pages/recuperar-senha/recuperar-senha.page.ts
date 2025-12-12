import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SaudiLoadingComponent } from 'src/app/components/saudi-loading/saudi-loading.component';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario.model';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {

  public formRecSenha: FormGroup;
  public urlImageOperadora: string = null;
  // public unamePattern = "^[a-zA-Z0-9]+[0-9a-zA-Z]";

  public login: string

  constructor(
    private menu: MenuController,
    private loginService: LoginService,
    private toast: SaudiToastComponent,
    private loading: SaudiLoadingComponent,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private router: Router
  ) {

  }

  ngOnInit() {
    const { logoOperadora } = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'))
    this.urlImageOperadora = logoOperadora
    this.desabiliarMenu()
    this.getLogin()
    this.criarFormulario()
  }

  getLogin() {
    let getNav = this.router.getCurrentNavigation()

    if (getNav.extras.state) {
      const params = getNav.extras.state
      this.login = params.login.usuario
    } else {
      this.login = ''
    }
  }

  desabiliarMenu() {
    this.menu.enable(false)
    this.menu.swipeGesture(false)
  }

  get usuario() {
    return this.formRecSenha.get('usuario')
  }

  criarFormulario() {
    this.formRecSenha = this.formBuilder.group({
      usuario: [this.login, Validators.compose([
        Validators.required,
      ])]
    })
  }

  async recuperarSenha() {
    if (this.formRecSenha.invalid) {
      return
    }

    const loading = await this.loading.presentLoading('Aguarde...')
    const loginUsuario = this.formRecSenha.value.usuario
    this.loginService.recuperarSenha(loginUsuario).subscribe((usuario: Usuario) => {
      const mensagem  = "E-mail enviado com sucesso. Verifique o e-mail: "+ usuario.email + "."
      loading.dismiss()
      this.toast.successToast(mensagem, 60000)
      this.navCtrl.navigateBack('/login')
    }, error => {
      console.log(error)
      loading.dismiss()
      this.toast.errorToast(error)
    })
  }
}