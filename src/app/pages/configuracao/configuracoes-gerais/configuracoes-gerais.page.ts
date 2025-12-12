import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AlertController,PopoverController} from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Operadora } from 'src/app/model/Operadora.model';
import { DominioCodigo } from 'src/app/model/DominioCodigo.model';
import Constantes from 'src/app/config/constantes/constantes';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { SaudiLoadingComponent } from 'src/app/components/saudi-loading/saudi-loading.component';
import { PopoverPerfilFormularioComponent } from 'src/app/components/popover-perfil-formulario/popover-perfil-formulario.component';
import { Usuario } from 'src/app/model/Usuario.model';
import { StorageService } from 'src/app/services/storage.service';
import { PrestadorService } from 'src/app/services/prestador.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { AcompanhamentoService } from 'src/app/services/acompanhamento.service';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';

@Component({
    selector: 'app-configuracoes-gerais',
    templateUrl: './configuracoes-gerais.page.html',
    styleUrls: ['./configuracoes-gerais.page.scss'],
  })
export class ConfiguracoesGeraisPage implements OnInit {

  public usuario: Usuario

  constructor(
      private router: Router,
      private atrCtrl: AlertController,
      private toastCrl: SaudiToastComponent,
      private loading: SaudiLoadingComponent,
      private popover: PopoverController ,
      private parametrosService: ParametrosService,
      private storageService: StorageService,
      private prestadorService: PrestadorService,
      private acompanhamentoService: AcompanhamentoService) { }

  ngOnInit() {
      moment.locale('pt-br');
      this.usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))      
  }

  async atualizarMotivoAlta(){          
      const alert = await this.atrCtrl.create({
        header: 'Deseja atualizar os Motivos de Alta?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: (blah) => {}
          }, {
            text: 'Confirmar',
            handler: () => {
                this.confirmarAtualizarMotivoAlta()                 
            }
          }
        ]
      });    
      await alert.present();
  }

  async confirmarAtualizarMotivoAlta(){
      let operadora = new Operadora
      let dominioCodigo = new DominioCodigo
      operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
      dominioCodigo.codTabela = Constantes.TABELA_MOTIVO_ALTA      
      dominioCodigo.operadora = operadora
      const loading = await this.loading.presentLoading('Buscando Motivos de Alta...')
      await this.storageService.apagarTodos(Constantes.STORAGE_MOTIVO_SAIDA) 
      await this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(async (data: any) => {
          //Atualiza a lista no dispositivo         
          for(let motivo of data){
            await this.storageService.adicionar(Constantes.STORAGE_MOTIVO_SAIDA,motivo)              
          }  
          loading.dismiss()
          this.toastCrl.successToast('Lista de Motivo de Alta atualizada.')   
      }, error => {
          this.toastCrl.errorToast(error)
          loading.dismiss()
      })
  }

  async atualizarTipoAcomodacao(){          
    const alert = await this.atrCtrl.create({
      header: 'Deseja atualizar os Tipos de Acomodação Inicial?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {}
        }, {
          text: 'Confirmar',
          handler: () => {
              this.confirmarAtualizarTipoAcomodacao()                 
          }
        }
      ]
    });    
    await alert.present();
  }

  async confirmarAtualizarTipoAcomodacao(){
    let operadora = new Operadora
    let dominioCodigo = new DominioCodigo
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
    dominioCodigo.codTabela = Constantes.TABELA_TIPO_ACOMODACAO      
    dominioCodigo.operadora = operadora
    const loading = await this.loading.presentLoading('Buscando Tipos de Acomodação...')
    await this.storageService.apagarTodos(Constantes.STORAGE_TIPO_ACOMODACAO) 
    await this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(async (data: any) => {
        //Atualiza a lista no dispositivo         
        for(let acomodacao of data){
          await this.storageService.adicionar(Constantes.STORAGE_TIPO_ACOMODACAO,acomodacao)              
        }  
        loading.dismiss()
        this.toastCrl.successToast('Lista de Tipo de Acomodação Inicial atualizada.')   
    }, error => {
        this.toastCrl.errorToast(error)
        loading.dismiss()
    })
  }

  async alterarPerfilFormulario(ev: any){
      const pop = await this.popover.create({
          component: PopoverPerfilFormularioComponent,
          event: ev,
          translucent: true            
      });     
      return await pop.present();
  }

  async abirTelaExcluirAcompanhamentosEncerrados(){
    let usuario = this.usuario
    let navigationExtras: NavigationExtras = {
      state: {
        usuario
      }
    }
    this.router.navigateByUrl('menu-principal/excluir-acomp-encerrado', navigationExtras)
  }
  
  async atualizarPosologia(){          
    const alert = await this.atrCtrl.create({
      header: 'Deseja atualizar as Posologias?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {}
        }, {
          text: 'Confirmar',
          handler: () => {
              this.confirmarAtualizarPosologia()                 
          }
        }
      ]
    });    
    await alert.present();
  }

  async confirmarAtualizarPosologia(){
      let operadora = new Operadora
      let dominioCodigo = new DominioCodigo
      operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
      dominioCodigo.codTabela = Constantes.TABELA_POSOLOGIA
      dominioCodigo.operadora = operadora
      const loading = await this.loading.presentLoading('Buscando Posologias...')  
      await this.storageService.apagarTodos(Constantes.STORAGE_POSOLOGIA)      
      await this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(async (data: any) => {
        //Atualiza a lista no dispositivo         
        for(let posologia of data){
           await this.storageService.adicionar(Constantes.STORAGE_POSOLOGIA,posologia)
        } 
        loading.dismiss()
        this.toastCrl.successToast('Lista de Posologia atualizada.')   
      }, error => {
          this.toastCrl.errorToast(error)
          loading.dismiss()
      })
  }

  async atualizarItensPrincipais(){          
    const alert = await this.atrCtrl.create({
      header: 'Deseja atualizar os Itens?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {}
        }, {
          text: 'Confirmar',
          handler: () => {
              this.confirmarAtualizarItensPrincipais()                 
          }
        }
      ]
    });    
    await alert.present();
  }

  async confirmarAtualizarItensPrincipais(){
    let operadora = new Operadora
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
    const loading = await this.loading.presentLoading('Buscando Itens...')  
    await this.storageService.apagarTodos(Constantes.STORAGE_ITENS_PRINCIPAIS)
    await this.parametrosService.getListaItemPrincipal(operadora.codOperadora).subscribe(async(data: any) => {    
      //Atualiza a lista no dispositivo         
      for(let item of data){
         await this.storageService.adicionar(Constantes.STORAGE_ITENS_PRINCIPAIS,item)
      } 
      loading.dismiss()
      this.toastCrl.successToast('Lista de Itens atualizada.')   
    }, error => {
        this.toastCrl.errorToast(error)
        loading.dismiss()
    })
  }

  async atualizarUF(){          
    const alert = await this.atrCtrl.create({
      header: 'Deseja atualizar as UFs?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {}
        }, {
          text: 'Confirmar',
          handler: () => {
              this.confirmarAtualizarUF()                 
          }
        }
      ]
    });    
    await alert.present();
  }

  async confirmarAtualizarUF(){
    let operadora = new Operadora
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
    const loading = await this.loading.presentLoading('Buscando UFs...')  
    await this.storageService.apagarTodos(Constantes.STORAGE_UF)
    await this.prestadorService.getUFPrestadores(operadora).subscribe(async (data: any) => {       
      //Atualiza a lista no dispositivo         
      for(let uf of data){
         await this.storageService.adicionar(Constantes.STORAGE_UF,uf)
      } 
      loading.dismiss()
      this.toastCrl.successToast('Lista de UF atualizada.')   
    }, error => {
        this.toastCrl.errorToast(error)
        loading.dismiss()
    })
  }

  async enviarAcompanhamentosEmail(){
    let listaAcompanhamentos: AcompanhamentoMedico[]
    this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(async itens =>{ 
      if(itens){        
        const loading = await this.loading.presentLoading('Enviando...')
        listaAcompanhamentos = itens
        await this.acompanhamentoService.enviarAcompanhamentosEmail(listaAcompanhamentos,this.usuario.login).subscribe(async (data: any) => {       
          loading.dismiss()
          if(data){
            this.toastCrl.successToast('Acompanhamentos enviados.')
          }else{
            this.toastCrl.errorToast('Erro no envio dos Acompanhamentos.')
          }     
        }, error => {
            this.toastCrl.errorToast(error)
            loading.dismiss()
        })
      }
    })   
  }

  async atualizarTipoInternacao(){          
    const alert = await this.atrCtrl.create({
      header: 'Deseja atualizar os Tipos de Internação?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {}
        }, {
          text: 'Confirmar',
          handler: () => {
              this.confirmarAtualizarTipoInternacao()                 
          }
        }
      ]
    });    
    await alert.present();
  }

  async confirmarAtualizarTipoInternacao(){
    let operadora = new Operadora
    let dominioCodigo = new DominioCodigo
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
    dominioCodigo.codTabela = Constantes.TABELA_TIPO_INTERNACAO      
    dominioCodigo.operadora = operadora
    const loading = await this.loading.presentLoading('Buscando Tipos de Internação...')
    await this.storageService.apagarTodos(Constantes.STORAGE_TIPO_INTERNACAO) 
    await this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(async (data: any) => {
        //Atualiza a lista no dispositivo         
        for(let internacao of data){
          await this.storageService.adicionar(Constantes.STORAGE_TIPO_INTERNACAO,internacao)              
        }  
        loading.dismiss()
        this.toastCrl.successToast('Lista de Tipo de Internação atualizada.')   
    }, error => {
        this.toastCrl.errorToast(error)
        loading.dismiss()
    })
  }

  async atualizarCaraterAtendimento(){          
    const alert = await this.atrCtrl.create({
      header: 'Deseja atualizar Caráter de Atendimento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {}
        }, {
          text: 'Confirmar',
          handler: () => {
              this.confirmarAtualizarCaraterAtendimento()                 
          }
        }
      ]
    });    
    await alert.present();
  }

  async confirmarAtualizarCaraterAtendimento(){
    let operadora = new Operadora
    let dominioCodigo = new DominioCodigo
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
    dominioCodigo.codTabela = Constantes.TABELA_CARATER_ATENDIMENTO      
    dominioCodigo.operadora = operadora
    const loading = await this.loading.presentLoading('Buscando Tipos de Internação...')
    await this.storageService.apagarTodos(Constantes.STORAGE_CARATER_ATENDIMENTO) 
    await this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(async (data: any) => {
        //Atualiza a lista no dispositivo         
        for(let carater of data){
          await this.storageService.adicionar(Constantes.STORAGE_CARATER_ATENDIMENTO,carater)              
        }  
        loading.dismiss()
        this.toastCrl.successToast('Lista de Caráter de Atendimento atualizada.')   
    }, error => {
        this.toastCrl.errorToast(error)
        loading.dismiss()
    })
  }

  async atualizarOrigemInternacao(){          
    const alert = await this.atrCtrl.create({
      header: 'Deseja atualizar Origem Internação?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {}
        }, {
          text: 'Confirmar',
          handler: () => {
              this.confirmarAtualizarOrigemInternacao()                 
          }
        }
      ]
    });    
    await alert.present();
  }

  async confirmarAtualizarOrigemInternacao(){
    let operadora = new Operadora
    let dominioCodigo = new DominioCodigo
    operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
    dominioCodigo.codTabela = Constantes.TABELA_ORIGEM_INTERNACAO      
    dominioCodigo.operadora = operadora
    const loading = await this.loading.presentLoading('Buscando Origem Internação..')
    await this.storageService.apagarTodos(Constantes.STORAGE_ORIGEM_INTERNACAO) 
    await this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(async (data: any) => {
        //Atualiza a lista no dispositivo         
        for(let origem of data){
          await this.storageService.adicionar(Constantes.STORAGE_ORIGEM_INTERNACAO,origem)              
        }  
        loading.dismiss()
        this.toastCrl.successToast('Lista de Origem Internação atualizada.')   
    }, error => {
        this.toastCrl.errorToast(error)
        loading.dismiss()
    })
  }
}     