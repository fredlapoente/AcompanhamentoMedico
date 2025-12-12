import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import * as moment from 'moment';
import { SaudiLoadingComponent } from 'src/app/components/saudi-loading/saudi-loading.component';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { AcompanhamentoMedico } from 'src/app/model/AcompanhamentoMedico.model';
import { Beneficiario } from 'src/app/model/Beneficiario.model';
import { DominioCodigo } from 'src/app/model/DominioCodigo.model';
import { Operadora } from 'src/app/model/Operadora.model';
import { Prestador } from 'src/app/model/Prestador.model';
import { Usuario } from 'src/app/model/Usuario.model';
import { AcompanhamentoService } from 'src/app/services/acompanhamento.service';
import { PrestadorService } from 'src/app/services/prestador.service';


@Component({
    selector: 'app-importar-sem-senha',
    templateUrl: './importar-sem-senha.page.html',
    styleUrls: ['./importar-sem-senha.page.scss'],
  })
export class ImportarSemSenhaPage implements OnInit {

    public formImportar: FormGroup;  
    public showFiltros: boolean = false
    public prestador: Prestador     
    public listaPrestadores = [] 
    public listaEstados = []

    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private navCtrl: NavController,
                private loading: SaudiLoadingComponent,
                private toast: SaudiToastComponent,
                private prestadorService: PrestadorService,
                public atrCtrl: AlertController,
                private acompanhamentoService: AcompanhamentoService){}

    ngOnInit() {
        moment.locale('pt-br');
        this.listaEstados = []          
        this.buscarUf()  
        
        this.formImportar = this.formBuilder.group({
            estado: [{value: '',disabled: false}],
            prestadorSelecionado: [{value: this.prestador ? this.prestador.idPrestador : '',disabled: true}, !this.prestador ? Validators.compose([Validators.required]) : ''],
            filtroPaciente: [''],
            filtroNumeroCarteira: ['']
        })
    }

    get estado(){
        return this.formImportar.get("estado")
    }

    get prestadorSelecionado() {
        return this.formImportar.get('prestadorSelecionado')
    }

    get filtroPaciente(){
        return this.formImportar.get('filtroPaciente')
    }
    
    get filtroNumeroCarteira(){
        return this.formImportar.get('filtroNumeroCarteira')
    }

    async buscarUf(){
        let operadora = new Operadora()
        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
        const loading = await this.loading.presentLoading('Buscando estado(s)...') 
        this.prestadorService.getUFPrestadores(operadora).subscribe((data: any) => {
            this.listaEstados = data
            loading.dismiss()   
            this.prestadorSelecionado.enable() 
        }, error => {
            this.toast.errorToast(error)
            loading.dismiss()
        })        
    }     

    async exibirPrestador(){
        this.listaPrestadores = []
        this.showFiltros = false; 
        let uf = new DominioCodigo()
        let operadora = new Operadora()
        let prestador = new Prestador()
        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'))
        uf.seqDominio = this.estado.value
        prestador.operadora = operadora
        prestador.uf = uf
        const loading = await this.loading.presentLoading('Buscando prestador(es)...')  
        this.prestadorService.getPrestadoresPorUf(prestador).subscribe((data: any) => {
          this.listaPrestadores = data
          loading.dismiss()        
        }, error => {
          this.toast.errorToast(error)
          loading.dismiss()
          this.listaPrestadores = []
          this.showFiltros = false;
        })
    }   
     
    exibirFiltros(){    
        this.showFiltros = true;    
    }

    async buscarAcompanhamento(){
        let acompanhamentoMedico: AcompanhamentoMedico = new AcompanhamentoMedico()
        let beneficiario: Beneficiario = new Beneficiario()
        let prestador: Prestador = new Prestador()
        let usuario: Usuario = new Usuario()
  
        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
  
        prestador.idPrestador = this.prestadorSelecionado.value
        beneficiario.nomeBeneficiario = this.filtroPaciente.value
        beneficiario.carteiraBeneficiario = this.filtroNumeroCarteira.value
  
        acompanhamentoMedico.prestador = prestador
        acompanhamentoMedico.beneficiario = beneficiario
        acompanhamentoMedico.usuario = usuario
  
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