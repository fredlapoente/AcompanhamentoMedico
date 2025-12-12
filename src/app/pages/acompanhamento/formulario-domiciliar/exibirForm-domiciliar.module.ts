import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExibirFormDomiciliarPageRoutingModule } from './exibirForm-domiciliar-routing.module';
import { ExibirFormDomiciliarPage } from './exibirForm-domiciliar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExibirFormDomiciliarPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [ExibirFormDomiciliarPage]
})
export class ExibirFormDomiciliarPageModule {}
