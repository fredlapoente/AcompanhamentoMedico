import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedirecionaPerfilRoutingModule } from './redirecionaPerfil-routing.module';

import { RedirecionaPerfilPage } from './redirecionaPerfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedirecionaPerfilRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RedirecionaPerfilPage]
})
export class RedirecionaPerfilPageModule {}
