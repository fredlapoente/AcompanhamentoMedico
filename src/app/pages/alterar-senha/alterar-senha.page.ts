import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { SaudiLoadingComponent } from 'src/app/components/saudi-loading/saudi-loading.component';
import { Usuario } from 'src/app/model/Usuario.model';
import { LoginService } from 'src/app/services/login.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators'
import { IonInput, NavController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import Constantes from 'src/app/config/constantes/constantes';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
})
export class AlterarSenhaPage implements OnInit {

  public formAlterarSenha: FormGroup

  public passwordType: string = "password"
  public newPasswordType: string = "password"
  public confirmNewPasswordType: string = "password"

  public iconPassword: string = "eye-off"
  public iconNewPassword: string = "eye-off"
  public iconConfirmNewPassword: string = "eye-off"

  public btnColorPassword: string = "#a8c4c4"
  public btnColorNewPassword: string = "#a8c4c4"
  public btnColorConfirmNewPassword: string = "#a8c4c4"

  constructor(
    private formBuilder: FormBuilder,
    private toast: SaudiToastComponent,
    private loading: SaudiLoadingComponent,
    private loginService: LoginService,
    private navCtrl: NavController,
    private storageService: StorageService,
  ) {

  }

  ngOnInit() {
    this.criarFormulario()
  }

  get senhaAtual() {
    return this.formAlterarSenha.get('senhaAtual')
  }

  get novaSenha() {
    return this.formAlterarSenha.get('novaSenha')
  }

  get confirmarNovaSenha() {
    return this.formAlterarSenha.get('confirmarNovaSenha')
  }

  criarFormulario() {
    this.formAlterarSenha = this.formBuilder.group({
      senhaAtual: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(28)
      ])],
      novaSenha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(28)
      ])],
      confirmarNovaSenha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(28),
        RxwebValidators.compare({ fieldName: 'novaSenha' })
      ])],
    })

  }

  toFieldNovaSenha(inputNovaSenha: IonInput) {
    inputNovaSenha.setFocus()
  }

  toFieldRepetirNovaSenha(inputRepetirNovaSenha: IonInput) {
    inputRepetirNovaSenha.setFocus()
  }

  showHidePassword(type) {
    const [passType, icon, buttonColor] = this.changePasswordType(type)

    if (this[passType] == "password") {
      this[passType] = "text"
      this[icon] = "eye"
      this[buttonColor] = "#BFDFDF"
    } else {
      this[passType] = "password"
      this[icon] = "eye-off"
      this[buttonColor] = "#a8c4c4"
    }
  }

  private changePasswordType(passType) {
    if ('senhaAtual' === passType) {
      return ['passwordType', 'iconPassword', 'btnColorPassword']
    } else if ('novaSenha' === passType) {
      return ['newPasswordType', 'iconNewPassword', 'btnColorNewPassword']
    } else {
      return ['confirmNewPasswordType', 'iconConfirmNewPassword', 'btnColorConfirmNewPassword']
    }
  }

  async alterarSenha() {
    if (this.formAlterarSenha.invalid) {
      return
    }

    const dadosUsuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario')) as Usuario

    let usuario = new Usuario()
    usuario.operadora.idOperadora = dadosUsuario.operadora.idOperadora
    usuario.login = dadosUsuario.login
    usuario.senha = this.senhaAtual.value
    usuario.novaSenha = this.confirmarNovaSenha.value
    usuario.idUsuario = dadosUsuario.idUsuario

    if (usuario.senha === usuario.novaSenha) {
      return this.toast.infoToast('Digite uma senha diferente da atual.')
    }

    const loading = await this.loading.presentLoading()
    this.loginService.alterarSenha(usuario).subscribe((usuario: Usuario) => {
      dadosUsuario.senha = usuario.novaSenha
      localStorage.setItem('@appAcompanhamentoMedico:dadosUsuario', JSON.stringify(dadosUsuario))
      this.storageService.atualizar(Constantes.STORAGE_USUARIO, dadosUsuario, "idUsuario")
      const mensagem = "Senha alterada com sucesso."      
      loading.dismiss()
      this.toast.successToast(mensagem)
      this.navCtrl.navigateBack('/menu-principal')
    }, error => {
      loading.dismiss()
      this.toast.errorToast(error)
    })
  }

}
