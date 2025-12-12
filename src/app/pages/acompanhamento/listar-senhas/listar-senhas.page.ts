import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavController, AlertController } from '@ionic/angular';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { SenhaAutorizacao } from 'src/app/model/SenhaAutorizacao.model';
import { AcompanhamentoService } from 'src/app/services/acompanhamento.service';
import { Usuario } from 'src/app/model/Usuario.model';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';
import { StorageService } from 'src/app/services/storage.service';
import Constantes from 'src/app/config/constantes/constantes';
import { DominioCodigo } from 'src/app/model/DominioCodigo.model';

@Component({
    selector: 'app-listar-senhas',
    templateUrl: './listar-senhas.page.html',
    styleUrls: ['./listar-senhas.page.scss'],
  })
  export class ListarSenhasPage implements OnInit {
    
    public listaSenhas = []
    public listaSenhasFiltradas = []
    public filtroSenha: string
    public maxId: number
    
    constructor(
        private router: Router,
        private navCtrl: NavController,
        private toast: SaudiToastComponent,
        private atrCtrl: AlertController,
        private acompanhamentoService: AcompanhamentoService,
        private storageService: StorageService) { }


    ngOnInit() {
        moment.locale('pt-br')
        this.recuperarDados()
    }

    recuperarDados() {
        let getNav = this.router.getCurrentNavigation()
        if (getNav.extras.state) {            
          this.listaSenhas = getNav.extras.state.lista
          this.listaSenhasFiltradas = this.listaSenhas          
        }else {
            this.toast.errorToast('Ocorreu um erro inesperado, por favor tente novamente.')
            this.navCtrl.navigateBack('menu-principal/buscar-senha')
        }
    }   

    async selecionarSenha(senhaAutorizacao: SenhaAutorizacao) {
      let usuario: Usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
      let acompanhamentoMedicoBusca: AcompanhamentoMedico = new AcompanhamentoMedico()
      acompanhamentoMedicoBusca.configFormulario = usuario.configFormulario
      acompanhamentoMedicoBusca.senhaAutorizacao = senhaAutorizacao
      this.acompanhamentoService.getAcompanhamentoMedicoPorSenha(acompanhamentoMedicoBusca).subscribe((data: any) => {
        let acompanhamentoMedico: AcompanhamentoMedico = data
        if(acompanhamentoMedico != null){
          if(acompanhamentoMedico.dataEncerramento != null){
            this.toast.errorToast('Já existe acompanhamento ENCERRADO com a senha '+senhaAutorizacao.senha+'. Não é possível abrir acompanhamento.')
          }else{
            this.toast.errorToast('Já existe acompanhamento ABERTO com a senha '+senhaAutorizacao.senha+'. Favor importar acompanhamento na opção de menu Importar.')
          }
        }else{
          this.confirmarSelecaoSenha(senhaAutorizacao)
        }           
      }, error => {
        this.toast.errorToast(error)        
      })
    }

    async confirmarSelecaoSenha(senhaAutorizacao: SenhaAutorizacao){
      let usuario: Usuario = new Usuario()
      usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
      let acompanhamentoMedico: AcompanhamentoMedico     
      //Verifica se o usuário já possui acompanhamento medico cadastrado              
      this.storageService.buscarTodos(Constantes.STORAGE_ACOMPANHAMENTO_MEDICO).then(items=>{  
        if(items != null){                 
          //Busca acompanhamento para usuario, formulario e senha
          acompanhamentoMedico = items.find(x => x.senhaAutorizacao.senha === senhaAutorizacao.senha && 
                                                 x.configFormulario.idConfigFormulario === usuario.configFormulario.idConfigFormulario )
          if(acompanhamentoMedico != null){
            //Exibe mensagem para confirmar se o usuario quer ou não abrir o acompanhamento existente
            this.confirmarAbrirAcompanhamentoSenhaExistente(acompanhamentoMedico)                                  
          }else{
            //Exibe mensagem para confirmar se o usuario quer ou não abrir o acompanhamento novo
            this.confirmarAbrirAcompanhamentoSenhaNovo(senhaAutorizacao)
          }           
        }else{
          //Exibe mensagem para confirmar se o usuario quer ou não abrir o acompanhamento novo
          this.confirmarAbrirAcompanhamentoSenhaNovo(senhaAutorizacao)
        }  
      })
    }

    async confirmarAbrirAcompanhamentoSenhaNovo(senhaAutorizacao: SenhaAutorizacao) {
      let dataInternacao = ''
      if(senhaAutorizacao.dataInternacao != null){
        dataInternacao = senhaAutorizacao.dataInternacao
      }
      let mensagem = "<br><b>Senha: </b>"+senhaAutorizacao.senha+
      "<br><b>Beneficiário: </b>"+senhaAutorizacao.beneficiario.nomeBeneficiario+
      "<br><b>Data de Nascimento: </b>"+senhaAutorizacao.beneficiario.dataNascimento+
      "<br><b>Data da Autorização: </b>"+senhaAutorizacao.dataAutorizacao+      
      "<br><b>Data da Internação: </b>"+dataInternacao+
      "<br><b>Prestador: </b>"+senhaAutorizacao.prestador.nomePrestador

      const alert = await this.atrCtrl.create({
        header: 'Abrir acompanhamento com os dados abaixo?',
        message: mensagem,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: (blah) => {}
          }, 
          {
            text: 'Confirmar',
            handler: () => {              
              let usuario: Usuario = new Usuario()
              usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
              //Verifica se o formulário possui grupo configurado
              if(usuario.configFormulario.listaGrupoConfigFormulario != null && usuario.configFormulario.listaGrupoConfigFormulario.length > 0){
                //Abre o formulário
                let flgAbrindo: boolean = true
                let usuario: Usuario = new Usuario()
                usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
                let acompanhamentoMedico: AcompanhamentoMedico = new AcompanhamentoMedico()                
                acompanhamentoMedico.dataAbertura = moment(new Date()).format("DD/MM/YYYY")
                acompanhamentoMedico.senhaAutorizacao = senhaAutorizacao
                acompanhamentoMedico.dataInternacao = senhaAutorizacao.dataInternacao
                acompanhamentoMedico.beneficiario = senhaAutorizacao.beneficiario
                acompanhamentoMedico.prestador = senhaAutorizacao.prestador
                acompanhamentoMedico.diagnosticoInternacao = senhaAutorizacao.justificativaInternacao
                acompanhamentoMedico.configFormulario = usuario.configFormulario
                acompanhamentoMedico.usuario = usuario
                acompanhamentoMedico.operadora = usuario.operadora
                acompanhamentoMedico.dispositivoMovel = usuario.dispositivoMovel
                acompanhamentoMedico.motivoAlta = new DominioCodigo()
                acompanhamentoMedico.status = Constantes.STATUS_ABERTO
                acompanhamentoMedico.statusSincronismo = Constantes.STATUS_PENDENTE            
                let navigationExtras: NavigationExtras = {
                  state: {
                    acompanhamentoMedico, 
                    flgAbrindo
                  }
                }                  
                this.router.navigateByUrl('menu-principal/exibirFormulario', navigationExtras)                
              }else{
                this.toast.errorToast("Sr. Usuário, não existe configuração de formulário cadastrada. É necessário criar a configuração no SAUDI !") 
              }                            
            }
          }
        ]
      });  
      await alert.present();
    }

    async confirmarAbrirAcompanhamentoSenhaExistente(acompanhamentoMedico: AcompanhamentoMedico) {
      let mensagem = "Já existe um acompanhamento para a senha: "+acompanhamentoMedico.senhaAutorizacao.senha+" Abrir acompanhamento existente?"
      let flgAbrindo: boolean = false
      const alert = await this.atrCtrl.create({
        header: 'Abrir Acompanhamento Médico',
        message: mensagem,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: (blah) => {}
          }, {
            text: 'Confirmar',
            handler: () => {
              let navigationExtras: NavigationExtras = {
                state: {
                  acompanhamentoMedico, 
                  flgAbrindo
                }
              }                  
              this.router.navigateByUrl('menu-principal/exibirFormulario', navigationExtras)
            }
          }
        ]
      });
      await alert.present(); 
    }

    filtrarSenha(event){
      this.filtroSenha = event.target.value.toLowerCase()
      this.listaSenhasFiltradas = this.listaSenhas     
      this.listaSenhasFiltradas = this.listaSenhasFiltradas.filter((item) =>{
        return item.concatDadosSenhaFiltro.toLowerCase().includes(this.filtroSenha)
      })     
    }

    cancelaFiltroSenha(){
      this.filtroSenha = ''
      this.listaSenhasFiltradas = this.listaSenhas      
    }    
  }