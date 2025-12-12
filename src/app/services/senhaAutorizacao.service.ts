import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config-service/config.service';
import { SenhaAutorizacao } from '../model/SenhaAutorizacao.model';

@Injectable({
    providedIn: 'root'
  })
export class SenhaAutorizacaoService extends BaseService{

    protected rootService = ConfigService.rootSaudiServico;
    protected moduleService = "senhaAutorizacao";

    constructor(protected http: HttpClient) {
        super(http)
    }  

    getSenhasAutorizacao(senhaAutorizacao: SenhaAutorizacao) {    
      return this.postData(JSON.parse(JSON.stringify(senhaAutorizacao)),'getSenhasAutorizacao');
    }

    getUltimaInternacao(senhaAutorizacao: SenhaAutorizacao) {    
      return this.postData(JSON.parse(JSON.stringify(senhaAutorizacao)),'getUltimaInternacao');
    }
}    