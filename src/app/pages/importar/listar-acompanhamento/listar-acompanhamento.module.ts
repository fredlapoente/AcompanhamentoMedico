import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarAcompanhamentoPageRoutingModule } from './listar-acompanhamento-routing.module';

import { ListarAcompanhamentoPage } from './listar-acompanhamento.page';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ListarAcompanhamentoPageRoutingModule,
      ReactiveFormsModule
    ],
    declarations: [ListarAcompanhamentoPage]
  })
export class ListarAcompanhamentoPageModule {}
