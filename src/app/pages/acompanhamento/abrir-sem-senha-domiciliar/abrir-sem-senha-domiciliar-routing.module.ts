import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbrirSemSenhaDomiciliarPage } from './abrir-sem-senha-domiciliar.page';

const routes: Routes = [
  {
    path: '',
    component: AbrirSemSenhaDomiciliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbrirSemSenhaDomiciliarPageRoutingModule {}
