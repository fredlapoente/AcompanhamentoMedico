import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config-service/config.service';
import { DominioCodigo } from '../model/DominioCodigo.model';
import { AcompanhamentoMedico } from '../model/AcompanhamentoMedico.model';
import { Usuario } from '../model/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AcompanhamentoService extends BaseService{
  
  protected rootService = ConfigService.rootSaudiServico;
  protected moduleService = "acompanhamentoMedico";
  
  constructor(protected http: HttpClient) {
    super(http)
  }  

  getAcompanhamentoMedicoPorSenha(acompanhamentoMedico: AcompanhamentoMedico){ 
    return this.postData(JSON.parse(JSON.stringify(acompanhamentoMedico)),'getAcompanhamentoMedicoPorSenha');
  }

  restaurarFormulariosAcompanhamentos(usuario: Usuario){  
    return this.postData(JSON.parse(JSON.stringify(usuario)),'restaurarFormulariosAcompanhamentos');
  }

  getAcompanhamentosParaImportar(acompanhamentoMedico: AcompanhamentoMedico){
    return this.postData(JSON.parse(JSON.stringify(acompanhamentoMedico)),'getAcompanhamentosParaImportar');  
  }  

  sincronizar(listaAcompanhamentos: AcompanhamentoMedico[]){    
    return this.postData(JSON.parse(JSON.stringify(listaAcompanhamentos)),'sincronizar'); 
  }

  verificarPendenciaSincronismo(acompanhamentoMedicoPendencia: AcompanhamentoMedico, acompanhamentoMedicoDispositivo: AcompanhamentoMedico){
    return this.postData(JSON.parse(JSON.stringify([acompanhamentoMedicoPendencia,acompanhamentoMedicoDispositivo])),'verificarPendenciaSincronismo'); 
  }

  enviarEmailPendencia(acompanhamentoMedico: AcompanhamentoMedico){
    return this.postData(JSON.parse(JSON.stringify(acompanhamentoMedico)),'enviarEmailPendencia'); 
  }

  enviarAcompanhamentosEmail(listaAcompanhamentos: AcompanhamentoMedico[], loginUsuario: String){
    return this.postData(JSON.parse(JSON.stringify(listaAcompanhamentos)),'enviarAcompanhamentosEmail/'+loginUsuario); 
  }
  
}
