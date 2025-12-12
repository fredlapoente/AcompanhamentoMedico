import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarSenhasPageRoutingModule } from './listar-senhas-routing.module';

import { ListarSenhasPage } from './listar-senhas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarSenhasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListarSenhasPage]
})
export class ListarSenhasPageModule {}
