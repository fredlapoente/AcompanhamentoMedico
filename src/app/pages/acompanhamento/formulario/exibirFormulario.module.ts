import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExibirFormularioPageRoutingModule } from './exibirFormulario-routing.module';
import { ExibirFormularioPage } from './exibirFormulario.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExibirFormularioPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [ExibirFormularioPage]
})
export class ExibirFormularioPageModule {}
