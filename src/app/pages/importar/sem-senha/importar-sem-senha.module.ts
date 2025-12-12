import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportarSemSenhaPageRoutingModule } from './importar-sem-senha-routing.module';

import { ImportarSemSenhaPage } from './importar-sem-senha.page';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ImportarSemSenhaPageRoutingModule,
      ReactiveFormsModule
    ],
    declarations: [ImportarSemSenhaPage]
  })
export class ImportarSemSenhaPageModule{}
