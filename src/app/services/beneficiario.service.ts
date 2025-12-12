import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config-service/config.service';
import { Beneficiario } from '../model/Beneficiario.model';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService extends BaseService {
  
  protected rootService = ConfigService.rootSaudiServico;
  protected moduleService = "beneficiario";
 
  constructor(protected http: HttpClient) {
    super(http)
  }  
  
  getBeneficiarios(beneficiario: Beneficiario) {       
    return this.postData(JSON.parse(JSON.stringify(beneficiario)),'getBeneficiarios');     
  }

}
