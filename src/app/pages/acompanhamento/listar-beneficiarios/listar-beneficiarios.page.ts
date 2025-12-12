import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavController, AlertController } from '@ionic/angular';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AcompanhamentoService } from 'src/app/services/acompanhamento.service';
import { Usuario } from 'src/app/model/Usuario.model';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';
import { StorageService } from 'src/app/services/storage.service';
import Constantes from 'src/app/config/constantes/constantes';
import { Beneficiario } from 'src/app/model/Beneficiario.model';
import { SenhaAutorizacao } from 'src/app/model/SenhaAutorizacao.model';
import { DominioCodigo } from 'src/app/model/DominioCodigo.model';
import { Prestador } from 'src/app/model/Prestador.model';

@Component({
    selector: 'app-listar-beneficiarios',
    templateUrl: './listar-beneficiarios.page.html',
    styleUrls: ['./listar-beneficiarios.page.scss'],
  })
  export class ListarBeneficiariosPage implements OnInit {
    
    public listaBeneficiarios = []
    public listaBeneficiariosFiltrados = []
    public filtroBeneficiario: string
    public maxId: number
    public operCosta: number
    public prestadorModel: Prestador
    
    constructor(
        private router: Router,
        private navCtrl: NavController,
        private toast: SaudiToastComponent,
        private atrCtrl: AlertController) { }


    ngOnInit() {
        moment.locale('pt-br')
        this.recuperarDados()
    }

    recuperarDados() {
        let getNav = this.router.getCurrentNavigation()
        if (getNav.extras.state) {            
          this.listaBeneficiarios = getNav.extras.state.lista
          this.listaBeneficiariosFiltrados = this.listaBeneficiarios
          this.prestadorModel = getNav.extras.state.prestadorModel
        }else {
            this.toast.errorToast('aqui')
            this.navCtrl.navigateBack('menu-principal/abrir-sem-senha-domiciliar')
        }
    }   

    async selecionarBeneficiario(beneficiario: Beneficiario) {
      let usuario: Usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
      let acompanhamentoMedicoBusca: AcompanhamentoMedico = new AcompanhamentoMedico()
      acompanhamentoMedicoBusca.configFormulario = usuario.configFormulario
      //CRIAR AQUI LOGICA QUE VAI CRIAR A SENHA
      let senhaAutorizacao : SenhaAutorizacao = new SenhaAutorizacao()
      senhaAutorizacao.beneficiario = beneficiario
      senhaAutorizacao.prestador = this.prestadorModel
      //crio a senha aleatoria
      let dataAtual = new Date()      
      senhaAutorizacao.senha = dataAtual.getFullYear() + "" + ('0' + (dataAtual.getMonth() + 1)).slice(-2) + "" + ('0' + dataAtual.getDate()).slice(-2) + "" + ('0' + dataAtual.getHours()).slice(-2) + "" + ('0' + dataAtual.getMinutes()).slice(-2) + "" + ('0' + dataAtual.getSeconds()).slice(-2)+ "" + dataAtual.getMilliseconds();
      this.confirmarSelecaoBeneficiario(senhaAutorizacao)
    }
    
    gerarSenha(cartao: string): string {
      let senha : string
      let dataAtual = new Date()
      senha = cartao + dataAtual.getMilliseconds().toString().slice(-2);
      return senha;
    }

    async confirmarSelecaoBeneficiario(senhaAutorizacao: SenhaAutorizacao){
      let usuario: Usuario = new Usuario()
      this.operCosta = 286
      usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))

      //Exibe mensagem para confirmar se o usuario quer ou não abrir o acompanhamento novo
      this.confirmarAbrirAcompanhamentoSenhaNovo(senhaAutorizacao)
    }

    async confirmarAbrirAcompanhamentoSenhaNovo(senhaAutorizacao: SenhaAutorizacao) {
      let mensagem = "<br><b>Senha: </b>"+senhaAutorizacao.senha+
      "<br><b>Beneficiário: </b>"+senhaAutorizacao.beneficiario.nomeBeneficiario+
      "<br><b>Prestador: </b>"+senhaAutorizacao.prestador.nomePrestador+
      "<br><b>Data de Nascimento: </b>"+senhaAutorizacao.beneficiario.dataNascimento+
      "<br><b>Idade: </b>"+senhaAutorizacao.beneficiario.idade+
      "<br><b>Sexo: </b>"+senhaAutorizacao.beneficiario.sexo

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
                this.router.navigateByUrl('menu-principal/exibirFormDomiciliar', navigationExtras)                
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
              this.router.navigateByUrl('menu-principal/exibirForm-Domiciliar', navigationExtras)
            }
          }
        ]
      });
      await alert.present(); 
    }

    filtrarBeneficiario(event){
      this.filtroBeneficiario = event.target.value.toLowerCase()
      this.listaBeneficiariosFiltrados = this.listaBeneficiarios     
      this.listaBeneficiariosFiltrados = this.listaBeneficiariosFiltrados.filter((item) =>{
        return item.concatDadosSenhaFiltro.toLowerCase().includes(this.filtroBeneficiario)
      })     
    }

    cancelaFiltroBeneficiario(){
      this.filtroBeneficiario = ''
      this.listaBeneficiariosFiltrados = this.listaBeneficiarios      
    }    
  }