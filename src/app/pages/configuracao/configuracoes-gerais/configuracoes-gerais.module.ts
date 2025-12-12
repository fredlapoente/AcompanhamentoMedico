import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracoesGeraisPageRoutingModule } from './configuracoes-gerais-routing.module';

import { ConfiguracoesGeraisPage } from './configuracoes-gerais.page';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ConfiguracoesGeraisPageRoutingModule,
      ReactiveFormsModule
    ],
    declarations: [ConfiguracoesGeraisPage]
  })
  export class ConfiguracoesGeraisPageModule {}