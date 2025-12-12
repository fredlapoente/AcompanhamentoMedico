import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbrirSemSenhaPageRoutingModule } from './abrir-sem-senha-routing.module';

import { AbrirSemSenhaPage } from './abrir-sem-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbrirSemSenhaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AbrirSemSenhaPage]
})
export class AbrirSemSenhaPageModule {}
