import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  AbrirSemSenhaPage } from './abrir-sem-senha.page';

const routes: Routes = [
  {
    path: '',
    component:  AbrirSemSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class  AbrirSemSenhaPageRoutingModule {}
