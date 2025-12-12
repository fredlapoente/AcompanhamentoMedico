import { Injectable } from '@angular/core'
import { ConfigService } from 'src/app/config/config-service/config.service'
import { BaseService } from './base.service'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OperadoraService extends BaseService {

  protected operadoraUrl = ConfigService.urlSaudiGedServico;
  protected rootService = ConfigService.rootSaudiGedServico;
  protected moduleService = 'operadora';

  constructor(protected http: HttpClient) {
    super(http)
  }

  getOperadora(codOperadora: Number) {
    return this.getDataSaudiGedServico('getListaOperadoras', `${codOperadora}`);    
  }
}