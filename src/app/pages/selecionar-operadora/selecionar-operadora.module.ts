import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionarOperadoraPageRoutingModule } from './selecionar-operadora-routing.module';

import { SelecionarOperadoraPage } from './selecionar-operadora.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    SelecionarOperadoraPageRoutingModule
  ],
  declarations: [SelecionarOperadoraPage]
})
export class SelecionarOperadoraPageModule {}
