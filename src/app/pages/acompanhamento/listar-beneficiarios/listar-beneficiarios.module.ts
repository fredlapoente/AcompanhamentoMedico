import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarBeneficiariosPageRoutingModule } from './listar-beneficiarios-routing.module';

import { ListarBeneficiariosPage } from './listar-beneficiarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarBeneficiariosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListarBeneficiariosPage]
})
export class ListarBeneficiariosPageModule {}
