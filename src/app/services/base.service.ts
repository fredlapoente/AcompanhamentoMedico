import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { ConfigService } from 'src/app/config/config-service/config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected operadoraUrl: string
  protected rootService: string
  protected moduleService: string
  protected noConnectionText = 'Você está sem conexão com a internet. Por favor, verifique a conexão e tente novamente.'
  protected connTimeout = 50000

  constructor(protected http: HttpClient) {
    this.rootService = ConfigService.rootSaudiServico
  }

  constructGetUrl(serviceName: string) {
    const dadosOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'))
    this.operadoraUrl = dadosOperadora.urlOperadora
    //this.operadoraUrl = 'http://10.0.2.2:8080' //'http://localhost:8080'
    const url = `${this.operadoraUrl}/${this.rootService}/${this.moduleService}/${serviceName}`
    return url
  }

  constructGetUrlSaudiGedServico(serviceName: string) {
    const url = `${ConfigService.urlSaudiGedServico}/${this.rootService}/${this.moduleService}/${serviceName}`
    return url
  }

  getData(serviceName: string, uri: string) {
    let url = this.constructGetUrl(serviceName);
    return this.http.get(`${url}/${uri}`)
      .pipe(
        timeout(this.connTimeout),
        catchError(this.handleError)
      );
  }

  postData(body: any, serviceName: string) {    
    const url = this.constructGetUrl(serviceName);
    return this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } })
      .pipe(
        timeout(this.connTimeout),
        catchError(this.handleError)
      );
  }

  postDataSaudiGedServico(body: any, serviceName: string) {
    const url = this.constructGetUrlSaudiGedServico(serviceName);
    return this.http.post(url, body)
      .pipe(
        timeout(this.connTimeout),
        catchError(this.handleError)
      );
  }

  getDataSaudiGedServico(serviceName: string, uri: string) {
    let url = this.constructGetUrlSaudiGedServico(serviceName);
    return this.http.get(`${url}/${uri}`)
      .pipe(
        timeout(this.connTimeout),
        catchError(this.handleError)
      );
  }

  private handleError(httpErro: HttpErrorResponse) {
    console.log(httpErro)
    let mensagem: string;
    if (httpErro.statusText === 'Unknown Error') {
      mensagem = 'Não foi possível efetuar a conexão com o servidor. Por favor tente mais tarde.';
    } else {
      if (httpErro.status === 400) {
        mensagem = httpErro.error.message ? httpErro.error.message : 'Solicitação falhou. Tente novamente.'
      } else if (httpErro.message === 'Timeout has occurred') {
        mensagem = 'Não foi possível efetuar a conexão com o servidor. Por favor tente mais tarde.';
      } else {
        mensagem = httpErro.error.message || httpErro.error.message;
      }
    }
    return throwError(mensagem);
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  private getRequestOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'timeout': this.connTimeout.toString()
      })
    };

    return httpOptions;
  }

}
