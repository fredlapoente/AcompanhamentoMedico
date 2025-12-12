import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/model/Usuario.model';
import { DispositivoMovel } from 'src/app/model/DispositivoMovel.model';
import { SaudiToastComponent } from 'src/app/components/saudi-toast/saudi-toast.component';
import { SaudiLoadingComponent } from 'src/app/components/saudi-loading/saudi-loading.component';
import { AppComponent } from 'src/app/app.component';
import { NavController, IonInput } from '@ionic/angular';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NetworkService } from 'src/app/services/network.service';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { StorageService } from 'src/app/services/storage.service';
import Constantes from 'src/app/config/constantes/constantes';
import { Operadora } from 'src/app/model/Operadora.model';
import { DominioCodigo } from 'src/app/model/DominioCodigo.model';
import { PrestadorService } from 'src/app/services/prestador.service';
import { ParametrosService } from 'src/app/services/parametros.service';


@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formLogin: FormGroup 

  public urlImageOperadora: string = null
  public passwordType: string = "password"
  public icone: string = "eye-off"
  public buttonColor: string = "#a8c4c4";

  public deviceId: string
  
  constructor(private appComponent: AppComponent,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private navCtrl: NavController,
    private router: Router,
    private toast: SaudiToastComponent,
    private loading: SaudiLoadingComponent,
    private keyboard: Keyboard,
    private networkService: NetworkService,
    private uniqueDeviceID: UniqueDeviceID,
    private storageService: StorageService,
    private parametrosService: ParametrosService,
    private prestadorService: PrestadorService     
  ) {

  }

  ngOnInit() {
    const { logoOperadora } = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'))
    this.urlImageOperadora = logoOperadora
    this.criarFormulario()
    this.getUniqueDeviceID();
  }

  ionViewWillEnter() {
    this.keyboard.disableScroll(true);    
  }

  get usuario() {
    return this.formLogin.get('usuario')
  }

  get senha() {
    return this.formLogin.get('senha')
  }

  criarFormulario() {
    let login = localStorage.getItem('@appAcompanhamentoMedico:ultimoUsuarioLogado')
    if (!login) {
      login = ''
    }

    this.formLogin = this.formBuilder.group({
      usuario: [login, Validators.compose([
        Validators.required,
      ])],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(28)
      ])]
    })
  }

  toNextField(inputSenha: IonInput) {
    inputSenha.setFocus()
  }

  showHidePassword() {

    if (this.passwordType == "password") {
      this.passwordType = "text"
      this.icone = "eye"
      this.buttonColor = "#BFDFDF"
    }
    else {
      this.passwordType = "password"
      this.icone = "eye-off"
      this.buttonColor = "#a8c4c4"
    }
  }

  toSelecionarOperadora() {
    const usuario = localStorage.getItem('@appAcompanhamentoMedico:ultimoUsuarioLogado')

    if (usuario) {
      localStorage.removeItem('@appAcompanhamentoMedico:ultimoUsuarioLogado')
    }

    this.navCtrl.navigateBack('selecionar-operadora')
  }

  toRecuperarSenha() {
    this.router.navigateByUrl('/recuperar-senha', {
      state: {
        login: this.formLogin.value
      }
    })
  }

  async login() {
    if (this.formLogin.invalid) {
      return
    }
    this.networkService.CheckNetworkStatus()
    if (this.networkService.NetworkStatus.value){
      this.loginOnline()      
    }else{
      this.loginOffline()     
    }
        
  }

  async loginOnline(){
    let usuario = new Usuario()
    const loading = await this.loading.presentLoading('Verificando usuário...')
    usuario.login = this.formLogin.value.usuario
    usuario.senha = this.formLogin.value.senha
    usuario.operadora.codOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora')).codOperadora;
    usuario.dispositivoMovel = new DispositivoMovel()
    usuario.dispositivoMovel.idDispositivoMovel = this.deviceId
    usuario.dispositivoMovel.flgAtivado = "1"
    console.log("ID > "+this.deviceId)
    this.loginService.loginAcompanhamentoMedico(usuario).subscribe((dadosUsuario: Usuario) => {      
      localStorage.setItem("@appAcompanhamentoMedico:dadosUsuario", JSON.stringify(dadosUsuario))
      localStorage.setItem('@appAcompanhamentoMedico:operadoraUsuario', JSON.stringify(dadosUsuario.operadora)) 
      this.storageService.atualizar(Constantes.STORAGE_USUARIO, dadosUsuario, "idUsuario")     
      this.gravaDadosUsuarioDispositivo(dadosUsuario)
      this.gravaDadosItensPrincipaisDispositivo()
      this.gravaDadosTipoAcomodacaoDispositivo()
      this.gravaDadosTipoInternacaoDispositivo()
      this.gravaDadosCaraterAtendimentoDispositivo()
      this.gravaDadosOrigemInternacaoDispositivo()
      this.gravaDadosMotivoAltaDispositivo()
      this.gravaDadosPosologiaDispositivo()
      this.gravaDadosUfDispositivo()       
      this.appComponent.initializeApp()
      this.navCtrl.navigateForward('/menu-principal')
      loading.dismiss()      
    }, error => {
      this.toast.errorToast(error)
      loading.dismiss()
    })
  }

  async loginOffline(){
    let usuario = new Usuario()
    let listaUsuarios: Usuario[] = []
    const loading = await this.loading.presentLoading('Verificando usuário...')
    usuario.login = this.formLogin.value.usuario
    usuario.senha = this.formLogin.value.senha
    usuario.operadora.codOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora')).codOperadora;
    let usuarioOff: Usuario
    let mensagem: string
    await this.storageService.buscarTodos(Constantes.STORAGE_USUARIO).then(async items=>{
      if(items != null){
        listaUsuarios = items
        usuarioOff = listaUsuarios.find(x => x.login === usuario.login && x.operadora.codOperadora === usuario.operadora.codOperadora);
        if(usuarioOff){
          usuarioOff = listaUsuarios.find(x => x.login === usuario.login && x.senha === usuario.senha && x.operadora.codOperadora === usuario.operadora.codOperadora);
          if(usuarioOff === undefined){
            mensagem = "Senha inválida."
          } 
        }else{
          mensagem = "Usuario inválido."
        }        
      }else{
        mensagem = "Novo Usuário apenas online. Verifique sua conexão com a internet."
      }  
      if(usuarioOff){
        localStorage.setItem("@appAcompanhamentoMedico:dadosUsuario", JSON.stringify(usuarioOff))
        localStorage.setItem('@appAcompanhamentoMedico:operadoraUsuario', JSON.stringify(usuarioOff.operadora))
        this.appComponent.initializeApp()
        this.navCtrl.navigateForward('/menu-principal')
        loading.dismiss()         
      }else{
        this.toast.errorToast(mensagem)
        loading.dismiss()
      }           
    }, error => {
      this.toast.errorToast(error)
      loading.dismiss()
    })
  }

  getUniqueDeviceID() {
    console.log("getUniqueDeviceID")
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        console.log(uuid);
        this.deviceId = uuid;
      })
      .catch((error: any) => {
        console.log(error);
        this.deviceId = "Error! > "+error;
      });
  }  

  gravaDadosUsuarioDispositivo(usuario: Usuario){
    this.storageService.buscarTodos(Constantes.STORAGE_USUARIO).then(items=>{
      let usuarioOff: Usuario
      if(items != null){
        usuarioOff = items.find(x => x.idUsuario === usuario.idUsuario);
      }       
      if(usuarioOff){
        this.storageService.atualizar(Constantes.STORAGE_USUARIO,usuario,"idUsuario")        
      }else{
        this.storageService.adicionar(Constantes.STORAGE_USUARIO,usuario)
      }  
    })  
  }

  async gravaDadosItensPrincipaisDispositivo(){
    await this.storageService.buscarTodos(Constantes.STORAGE_ITENS_PRINCIPAIS).then(async items=>{     
      if(items == null){
        let dadosOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
        await this.parametrosService.getListaItemPrincipal(dadosOperadora.codOperadora).subscribe(async(data: any) => {
          for(let item of data){
            await this.storageService.adicionar(Constantes.STORAGE_ITENS_PRINCIPAIS,item)  
          } 
        })      
      }  
    })  
  }

  async gravaDadosTipoAcomodacaoDispositivo(){
    await this.storageService.buscarTodos(Constantes.STORAGE_TIPO_ACOMODACAO).then(async items=>{     
      if(items == null){
        let dominioCodigo = new DominioCodigo
        let operadora = new Operadora        
        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
        dominioCodigo.codTabela = Constantes.TABELA_TIPO_ACOMODACAO     
        dominioCodigo.operadora = operadora        
        await this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(async (data: any) => {
          for(let motivo of data){          
            await this.storageService.adicionar(Constantes.STORAGE_TIPO_ACOMODACAO,motivo)                               
          }             
        })           
      }  
    }) 
  }

  async gravaDadosTipoInternacaoDispositivo(){
    await this.storageService.buscarTodos(Constantes.STORAGE_TIPO_INTERNACAO).then(async items=>{     
      if(items == null){
        let dominioCodigo = new DominioCodigo
        let operadora = new Operadora        
        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
        dominioCodigo.codTabela = Constantes.TABELA_TIPO_INTERNACAO     
        dominioCodigo.operadora = operadora        
        await this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(async (data: any) => {
          for(let motivo of data){          
            await this.storageService.adicionar(Constantes.STORAGE_TIPO_INTERNACAO,motivo)                               
          }             
        })           
      }  
    }) 
  }

  async gravaDadosCaraterAtendimentoDispositivo(){
    await this.storageService.buscarTodos(Constantes.STORAGE_CARATER_ATENDIMENTO).then(async items=>{     
      if(items == null){
        let dominioCodigo = new DominioCodigo
        let operadora = new Operadora        
        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
        dominioCodigo.codTabela = Constantes.TABELA_CARATER_ATENDIMENTO     
        dominioCodigo.operadora = operadora        
        await this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(async (data: any) => {
          for(let motivo of data){          
            await this.storageService.adicionar(Constantes.STORAGE_CARATER_ATENDIMENTO,motivo)                               
          }             
        })           
      }  
    }) 
  }

  async gravaDadosOrigemInternacaoDispositivo(){
    await this.storageService.buscarTodos(Constantes.STORAGE_ORIGEM_INTERNACAO).then(async items=>{     
      if(items == null){
        let dominioCodigo = new DominioCodigo
        let operadora = new Operadora        
        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
        dominioCodigo.codTabela = Constantes.TABELA_ORIGEM_INTERNACAO     
        dominioCodigo.operadora = operadora        
        await this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(async (data: any) => {
          for(let motivo of data){          
            await this.storageService.adicionar(Constantes.STORAGE_ORIGEM_INTERNACAO,motivo)                               
          }             
        })           
      }  
    }) 
  }

  async gravaDadosMotivoAltaDispositivo(){
    await this.storageService.buscarTodos(Constantes.STORAGE_MOTIVO_SAIDA).then(async items=>{     
      if(items == null){
        let dominioCodigo = new DominioCodigo
        let operadora = new Operadora        
        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
        dominioCodigo.codTabela = Constantes.TABELA_MOTIVO_ALTA      
        dominioCodigo.operadora = operadora        
        await this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(async (data: any) => {
          for(let motivo of data){          
            await this.storageService.adicionar(Constantes.STORAGE_MOTIVO_SAIDA,motivo)                               
          }             
        })           
      }  
    })  
  } 
  
  async gravaDadosUfDispositivo(){
    await this.storageService.buscarTodos(Constantes.STORAGE_UF).then(async items=>{     
      if(items == null){
        let operadora = new Operadora
        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
        await this.prestadorService.getUFPrestadores(operadora).subscribe(async (data: any) => {
          for(let estado of data){
            await this.storageService.adicionar(Constantes.STORAGE_UF,estado)            
          }                
        })
      } 
    })   
  }

  async gravaDadosPosologiaDispositivo(){
    await this.storageService.buscarTodos(Constantes.STORAGE_POSOLOGIA).then(async items=>{     
      if(items == null){
        let dominioCodigo = new DominioCodigo
        let operadora = new Operadora        
        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));      
        dominioCodigo.codTabela = Constantes.TABELA_POSOLOGIA      
        dominioCodigo.operadora = operadora
        await this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(async (data: any) => {
          for(let posologia of data){
            await this.storageService.adicionar(Constantes.STORAGE_POSOLOGIA,posologia)            
          }             
        })        
      }  
    })  
  }
}