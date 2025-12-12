import { Injectable } from '@angular/core'
import { ConfigService } from 'src/app/config/config-service/config.service'
import { BaseService } from './base.service'
import { HttpClient } from '@angular/common/http'
import { Usuario } from 'src/app/model/Usuario.model'

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  protected operadoraUrl
  protected rootService = ConfigService.rootSaudiServico
  protected moduleService = "login"

  constructor(protected http: HttpClient) {
    super(http)
  }

  getUserInitials(usuario: Usuario): string {
    if (usuario) {
      if (usuario.nome) {
        let arrayName = usuario.nome.split(' ')
        if (arrayName && arrayName.length > 0) {
          let firstName = arrayName[0]
          let lastName = arrayName[1]
          let initials = ''

          if (firstName) {
            initials += firstName.charAt(0)
          }

          if (lastName) {
            initials += lastName.charAt(0)
          } else {
            initials += firstName.charAt(1)
          }
          return initials;
        }
      }
      return '';
    }

  }

  loginAcompanhamentoMedico(usuario: Usuario) {
    return this.postData(JSON.parse(JSON.stringify(usuario)), 'loginAcompanhamentoMedico')
  } 

  recuperarSenha(login: String) {
    return this.postData(JSON.parse(JSON.stringify(login)), 'recuperarSenha/APP Acompanhamento Medico')
  }

  alterarSenha(usuario: Usuario) {
    return this.postData(JSON.parse(JSON.stringify(usuario)), 'alterarSenha/APP Acompanhamento Medico')
  }
}