import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarSenhaPageRoutingModule } from './buscar-senha-routing.module';

import { BuscarSenhaPage } from './buscar-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarSenhaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BuscarSenhaPage]
})
export class BuscarSenhaPageModule {}
