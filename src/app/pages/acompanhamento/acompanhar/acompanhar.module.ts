import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AcompanharPageRoutingModule } from './acompanhar.-routing.module';
import { AcompanharPage } from './acompanhar.page';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      AcompanharPageRoutingModule,
      ReactiveFormsModule
    ],
    declarations: [AcompanharPage]
  })
export class AcompanharPageModule {}
