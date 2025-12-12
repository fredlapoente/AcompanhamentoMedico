import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarSenhasPage } from './listar-senhas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarSenhasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarSenhasPageRoutingModule {}
