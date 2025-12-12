import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario.model';
import { AlertController, MenuController } from '@ionic/angular';
import { SaudiLoadingComponent } from 'src/app/components/saudi-loading/saudi-loading.component';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { StorageService } from 'src/app/services/storage.service';
import Constantes from 'src/app/config/constantes/constantes';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { VerificaVersao } from 'src/app/util/verifica-versao-util';

@Component({
  selector: 'menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  usuarioLogado: Usuario
  titulo: String
  flgTrabalhaComSenha: number
  flgTrabalhaSemSenha : number
  flgTrabalhaComSenhaDom : number

  loginSuccess: boolean = false

  constructor(private menu: MenuController,
              private loading: SaudiLoadingComponent,
              private atrCtrl: AlertController,
              private router: Router,
              private toast: SaudiToastComponent,
              private storageService: StorageService,
              private verificaVersao: VerificaVersao ) { }

  ngOnInit() { 
    moment.locale('pt-br');
    this.menu.enable(true)
    this.menu.swipeGesture(true)
    this.usuarioLogado = new Usuario()
    this.usuarioLogado = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
    const operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario'))
    if (operadora) {
      this.titulo = operadora.nomeOperadora
    } else {
      this.titulo = 'Menu Principal'
    }    
    if(this.usuarioLogado.configFormulario.codDominio == Constantes.PERFIL_DOMICILIAR){      
      this.flgTrabalhaComSenhaDom = 1;
      this.flgTrabalhaComSenha = 0;
      this.flgTrabalhaSemSenha = 0;
    }else{
      if(JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario')).flagUtilizaSenhaAcompMedico == 1){
        this.flgTrabalhaComSenha = 1;
        this.flgTrabalhaComSenhaDom = 0;
      }else {
        this.flgTrabalhaSemSenha = 1;
        this.flgTrabalhaComSenhaDom = 0;
      }
    }
    this.verificaVersao.checkAppVersion()
    this.verificaAcompanhamentoSincronizar()
    this.limparAcompanhamentosEncerrados()
  }

  async verificaAcompanhamentoSincronizar(){
    let flgPossuiAcompSincronizar: boolean = false
    this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(items=>{
      if(items != null){
        let listaAcompanhamentos: AcompanhamentoMedico[] = items
        for(let acomp of listaAcompanhamentos){            
          if(acomp.usuario.login === this.usuarioLogado.login &&
              acomp.operadora.codOperadora === this.usuarioLogado.operadora.codOperadora){                          
            if(acomp.listaAcompanhamentoDia && acomp.listaAcompanhamentoDia.length > 0){
              let diaAcompanhamento = acomp.listaAcompanhamentoDia.find(y => y.statusSincronismo === Constantes.STATUS_PENDENTE)
              if(diaAcompanhamento != null){
                flgPossuiAcompSincronizar = true
                break
              } 
            }
            if(!flgPossuiAcompSincronizar){
              if(acomp.statusSincronismo === Constantes.STATUS_PENDENTE){
                flgPossuiAcompSincronizar = true
                break
              }
            }                
          }
        }    
        
        if(flgPossuiAcompSincronizar){
          this.informaAcompanhamentoSincronizar()
        }
      }  
    }, error => {
      this.toast.errorToast(error)      
    }) 
  }

  async informaAcompanhamentoSincronizar(){
    let mensagem = "Você possui acompanhamento(s) para sincronizar. Por favor, sincronize seu(s) acompanhamento(s)."
    const alert = await this.atrCtrl.create({
      header: 'Sincronizar Acompanhameto',
      message: mensagem,
      buttons: [
        {
          text: 'Sincronizar depois',
          role: 'cancel',
          handler: (blah) => {}
        }, {
          text: 'Sincronizar agora',
          handler: () => {   
            this.router.navigateByUrl('menu-principal/sincronizar')
          }
        }  
      ]
    });
    await alert.present();
  }

  async limparAcompanhamentosEncerrados(){
    this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(items=>{
      if(items != null){
        let listaAcompanhamentos: AcompanhamentoMedico[] = items 
        for(let acomp of listaAcompanhamentos){
          if(acomp.statusSincronismo === Constantes.STATUS_SINCRONIZADO &&
             acomp.status === Constantes.STATUS_ENCERRADO &&
             acomp.usuario.login === this.usuarioLogado.login){

            let dataAtual = moment(new Date()); 
            let dataEncerramento = new Date(moment(acomp.dataEncerramento,"DD/MM/YYYY").toISOString())
            let qtdDiasEncerrado = dataAtual.diff(dataEncerramento,'days')
            if(qtdDiasEncerrado >= Constantes.QTD_DIAS_APAGAR_ENCERRADO) {
              this.storageService.apagar(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO,acomp,"senhaAutorizacao.senha")
            }
          }
        }
      }    
    }, error => {
      this.toast.errorToast(error)      
    }) 
  }
}
