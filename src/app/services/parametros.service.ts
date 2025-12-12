import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config-service/config.service';
import { DominioCodigo } from '../model/DominioCodigo.model';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService extends BaseService{
  
  protected rootService = ConfigService.rootSaudiServico;
  protected moduleService = "parametros";
  
  constructor(protected http: HttpClient) {
    super(http)
  }

  getListaDominioCodigo(dominioCodigo: DominioCodigo) {    
    return this.postData(JSON.parse(JSON.stringify(dominioCodigo)),'getListaDominioCodigo');
  }

  getListaItemPrincipal(codOperadora: number) {    
    return this.postData(JSON.parse(JSON.stringify(codOperadora)),'getListaItemPrincipal');
  }

  getVerificaDominioCodigo(dominioCodigo: DominioCodigo) {    
    return this.postData(JSON.parse(JSON.stringify(dominioCodigo)),'getVerificaDominioCodigo');
  }

  getVerificaAppAtualizado(currentVersion: string) {    
    return this.postData(JSON.parse(JSON.stringify(currentVersion)),'getVerificaAppAtualizado');
  }
}  