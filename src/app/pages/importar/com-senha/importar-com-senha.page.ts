import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { SaudiLoadingComponent } from 'src/app/components/saudi-loading/saudi-loading.component';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';
import { Beneficiario } from 'src/app/model/Beneficiario.model';
import { Prestador } from 'src/app/model/Prestador.model';
import { SenhaAutorizacao } from 'src/app/model/SenhaAutorizacao.model';
import { Usuario } from 'src/app/model/Usuario.model';
import { AcompanhamentoService } from 'src/app/services/acompanhamento.service';
import { PrestadorService } from 'src/app/services/prestador.service';


@Component({
    selector: 'app-importar-com-senha',
    templateUrl: './importar-com-senha.page.html',
    styleUrls: ['./importar-com-senha.page.scss'],
  })
export class ImportarComSenhaPage implements OnInit {

  public formImportar: FormGroup;
  public showFiltros: boolean = false
  public listaPrestadores = []    

  constructor(private formBuilder: FormBuilder,
              private navCtrl: NavController,
              private loading: SaudiLoadingComponent,
              private toast: SaudiToastComponent,
              private prestadorService: PrestadorService,
              private acompanhamentoService: AcompanhamentoService){}

  ngOnInit() {
      moment.locale('pt-br');
      this.criarFormulario()        
  }

  get prestador() {
      return this.formImportar.get('prestador')
  }  
    
  get filtroPrestador(){
      return this.formImportar.get('filtroPrestador')
  }

  get filtroSenha(){
      return this.formImportar.get('filtroSenha')
  }
    
  get filtroPaciente(){
      return this.formImportar.get('filtroPaciente')
  }
  
  get filtroNumeroCarteira(){
      return this.formImportar.get('filtroNumeroCarteira')
  }

  criarFormulario() {        
      this.formImportar = this.formBuilder.group({
        filtroPrestador: [''],
        prestador: [{
          value: '',
          disabled: true
        }, Validators.compose([Validators.required])],
        filtroSenha: [''],      
        filtroPaciente: [''],
        filtroNumeroCarteira: [''],
      })  
  }
    
  async buscarPrestador() {
    this.listaPrestadores = []   
    this.prestador.disable()
    let prestador = new Prestador()   
    prestador.codNomePrestador = this.filtroPrestador.value;
    prestador.operadora.codOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora')).codOperadora;
    const loading = await this.loading.presentLoading('Buscando prestador(es)...')    
    this.prestadorService.getPrestadores(prestador).subscribe((data: any) => {
      this.listaPrestadores = data
      loading.dismiss()   
      this.prestador.enable()
      if(this.listaPrestadores.length == 1){
        this.formImportar.get("prestador").setValue(this.listaPrestadores[0].idPrestador)
        this.exibirFiltros()
      } 
    }, error => {
      this.toast.errorToast(error)
      loading.dismiss()
    })
  }  
    
  async limparBuscarPrestador(){   
      this.listaPrestadores = []    
      this.prestador.enable()
      this.prestador.reset()
      this.filtroSenha.reset()
      this.filtroPaciente.reset()
      this.filtroNumeroCarteira.reset()
      this.showFiltros = false;         
  } 
    
  exibirFiltros(){    
      this.showFiltros = true;    
  }

  async buscarAcompanhamento(){
    let acompanhamentoMedico: AcompanhamentoMedico = new AcompanhamentoMedico()
    let senhaAutorizacao: SenhaAutorizacao = new SenhaAutorizacao()
    let beneficiario: Beneficiario = new Beneficiario()
    let prestador: Prestador = new Prestador()
    let usuario: Usuario = new Usuario()

    usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))

    prestador.idPrestador = this.prestador.value
    senhaAutorizacao.senha = this.filtroSenha.value
    beneficiario.nomeBeneficiario = this.filtroPaciente.value
    beneficiario.carteiraBeneficiario = this.filtroNumeroCarteira.value

    acompanhamentoMedico.prestador = prestador
    acompanhamentoMedico.senhaAutorizacao = senhaAutorizacao
    acompanhamentoMedico.beneficiario = beneficiario
    acompanhamentoMedico.usuario = usuario
    acompanhamentoMedico.operadora = usuario.operadora

    const loading = await this.loading.presentLoading('Buscando acompanhamentos...')  
    this.acompanhamentoService.getAcompanhamentosParaImportar(acompanhamentoMedico).subscribe((data: any) => {
      if(data != null && data != ''){  
        loading.dismiss()
        let lista = data
        let navigationExtras: NavigationExtras = {
          state: {
            lista
          }
        };
        this.navCtrl.navigateForward(['menu-principal/listar-acompanhamento'], navigationExtras);
      }else{
        loading.dismiss()
        this.toast.errorToast("Não existem acompanhamentos para os dados informados") 
      }     
    }, error => {
        this.toast.errorToast(error)
        loading.dismiss()
    })   
  }
}