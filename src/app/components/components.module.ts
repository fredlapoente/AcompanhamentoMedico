import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaudiLoadingComponent } from './saudi-loading/saudi-loading.component';
import { SaudiToastComponent } from './saudi-toast/saudi-toast.component';
import { PerfilCardComponent } from './perfil-card/perfil-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalOperadoraComponent } from './modal-operadora/modal-operadora.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { PopoverPerfilFormularioComponent } from './popover-perfil-formulario/popover-perfil-formulario.component';
import { PopoverAddNovoItemComponent } from './popover-add-novo-item/popover-add-novo-item.component';
import { ModalMensagemSincronismoComponent } from './modal-mensagem-sincronismo/modal-mensagem-sincronismo.component';
import { ModalExibirImagemComponent } from './modal-exibir-imagem/modal-exibir-imagem.component';
import { PopoverCalendarioComponent } from './popover-calendario/popover-calendario.component';
import { DatePickerModule } from 'ionic4-date-picker';
import { ModalLegendaAcompanharComponent } from './modal-legenda-acompanhar/modal-legenda-acompanhar.component';

@NgModule({
  declarations: [
    SaudiToastComponent,
    SaudiLoadingComponent,
    PerfilCardComponent,
    ModalOperadoraComponent,
    PopoverPerfilFormularioComponent,
    DynamicFormsComponent,
    PopoverAddNovoItemComponent,
    ModalMensagemSincronismoComponent,
    ModalExibirImagemComponent,
    PopoverCalendarioComponent,
    ModalLegendaAcompanharComponent     
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DatePickerModule
  ],
  exports: [
    SaudiLoadingComponent,
    SaudiToastComponent,
    PerfilCardComponent,
    PopoverPerfilFormularioComponent,
    DynamicFormsComponent,
    PopoverAddNovoItemComponent,
    PopoverCalendarioComponent,     
  ],
  providers: [
    SaudiToastComponent,
    SaudiLoadingComponent,    
  ],
  entryComponents: [
    ModalOperadoraComponent,
    PopoverPerfilFormularioComponent,
    PopoverAddNovoItemComponent,
    ModalMensagemSincronismoComponent,
    ModalExibirImagemComponent,
    PopoverCalendarioComponent,
    ModalLegendaAcompanharComponent
  ]
})
export class ComponentsModule { }
