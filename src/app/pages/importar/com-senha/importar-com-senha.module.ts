import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportarComSenhaPageRoutingModule } from './importar-com-senha-routing.module';

import { ImportarComSenhaPage } from './importar-com-senha.page';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ImportarComSenhaPageRoutingModule,
      ReactiveFormsModule
    ],
    declarations: [ImportarComSenhaPage]
  })
export class ImportarComSenhaPageModule {}
