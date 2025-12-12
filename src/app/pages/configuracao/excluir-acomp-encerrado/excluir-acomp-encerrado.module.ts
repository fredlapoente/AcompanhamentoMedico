import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcluirAcompEncerradoPageRoutingModule } from './excluir-acomp-encerrado-routing.module';

import { ExcluirAcompEncerradoPage } from './excluir-acomp-encerrado.page';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ExcluirAcompEncerradoPageRoutingModule,
      ReactiveFormsModule
    ],
    declarations: [ExcluirAcompEncerradoPage]
  })
  export class ExcluirAcompEncerradoPageModule {}