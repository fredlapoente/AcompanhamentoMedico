import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario.model';
import { NavController, IonInput } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import Constantes from 'src/app/config/constantes/constantes';

@Component({
  selector: 'redirecionaPerfil',
  templateUrl: './redirecionaPerfil.page.html',
  styleUrls: ['./redirecionaPerfil.page.scss'],
})
export class RedirecionaPerfilPage implements OnInit {

  public deviceId: string
  public flgTrabalhaComSenha: number;
 
  constructor(private navCtrl: NavController,
              private storageService: StorageService,
              private router: Router,
  ) { }

  ngOnInit(){
    let usuario = new Usuario()
    usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
    usuario.operadora.codOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora')).codOperadora;
    if(JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario')).flagUtilizaSenhaAcompMedico == 1){
      this.flgTrabalhaComSenha = 1;
    }    
       
    if(usuario.configFormulario.codDominio == Constantes.PERFIL_DOMICILIAR){
      this.navCtrl.navigateForward('/menu-principal/abrir-sem-senha-domiciliar')
    }else {
      if(this.flgTrabalhaComSenha == 1){
        this.navCtrl.navigateForward('/menu-principal/buscar-senha')
      }else{
        this.navCtrl.navigateForward('/menu-principal/abrir-sem-senha')
      }
    }

    let rota = '/menu-principal';
    if (usuario.configFormulario.codDominio === Constantes.PERFIL_DOMICILIAR) {
      rota = '/menu-principal/abrir-sem-senha-domiciliar';
    } else if (this.flgTrabalhaComSenha == 1) {
      rota = '/menu-principal/buscar-senha';
    } else {
      rota = '/menu-principal/abrir-sem-senha';
    }
    // Redireciona sem guardar na pilha (não será possível voltar para cá)
    this.router.navigateByUrl(rota, { replaceUrl: true });
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
}