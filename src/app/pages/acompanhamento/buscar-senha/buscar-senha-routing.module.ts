import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarSenhaPage } from './buscar-senha.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarSenhaPageRoutingModule {}
