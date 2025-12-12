import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiaAcompanhamentoPageRoutingModule } from './dia-acompanhamento-routing.module';

import { DiaAcompanhamentoPage } from './dia-acompanhamento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiaAcompanhamentoPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [DiaAcompanhamentoPage]
})
export class DiaAcompanhamentoPageModule {}
