import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SincronizarPageRoutingModule } from './sincronizar-routing.module';

import { SincronizarPage } from './sincronizar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      SincronizarPageRoutingModule,
      ReactiveFormsModule,
      ComponentsModule
    ],
    declarations: [SincronizarPage]
  })
export class SincronizarPageModule {}
