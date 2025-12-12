import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config-service/config.service';
import { Prestador } from '../model/Prestador.model';
import { Operadora } from '../model/Operadora.model';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService extends BaseService {
  
  protected rootService = ConfigService.rootSaudiServico;
  protected moduleService = "prestador";
 
  constructor(protected http: HttpClient) {
    super(http)
  }  
  
  getPrestadores(prestador: Prestador) {       
    return this.postData(JSON.parse(JSON.stringify(prestador)),'getPrestadores');     
  }

  getUFPrestadores(operadora: Operadora) {    
    return this.postData(JSON.parse(JSON.stringify(operadora)),'getUFPrestadores');
  }

  getPrestadoresPorUf(prestador: Prestador){
    return this.postData(JSON.parse(JSON.stringify(prestador)),'getPrestadoresPorUf');
  }

}
