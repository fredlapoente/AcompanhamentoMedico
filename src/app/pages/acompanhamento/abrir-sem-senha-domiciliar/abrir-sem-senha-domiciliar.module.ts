import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbrirSemSenhaDomiciliarPageRoutingModule } from './abrir-sem-senha-domiciliar-routing.module';

import { AbrirSemSenhaDomiciliarPage } from './abrir-sem-senha-domiciliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbrirSemSenhaDomiciliarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AbrirSemSenhaDomiciliarPage]
})
export class AbrirSemSenhaDomiciliarPageModule {}
