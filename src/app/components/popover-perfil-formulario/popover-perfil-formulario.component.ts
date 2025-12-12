import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { PopoverController } from "@ionic/angular";
import { Usuario } from 'src/app/model/Usuario.model';

@Component({
  selector: 'app-popover-perfil-formulario',
  templateUrl: './popover-perfil-formulario.component.html'
})
export class PopoverPerfilFormularioComponent implements OnInit {
  
    public listaPerfil = []
    public perfilSelecionado: number
  
    constructor (private popover: PopoverController) { }

    ngOnInit() {
        moment.locale('pt-br');
        let usuario: Usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
        this.listaPerfil = usuario.listaConfigFormulario  
        this.perfilSelecionado = usuario.configFormulario.idConfigFormulario        
    }   

    confirmar(){
        let usuario: Usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'))
        let confFormulario = this.listaPerfil.find(x=> x.idConfigFormulario == this.perfilSelecionado)
        usuario.configFormulario = confFormulario
        localStorage.setItem('@appAcompanhamentoMedico:dadosUsuario',JSON.stringify(usuario))
        this.popover.dismiss() 
    }

    cancelar(){
        this.popover.dismiss() 
    }

    radioSelect(event) {
       this.perfilSelecionado = event.detail.value
    }
}