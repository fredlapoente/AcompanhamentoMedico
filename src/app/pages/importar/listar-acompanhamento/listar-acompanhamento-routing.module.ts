import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarAcompanhamentoPage } from './listar-acompanhamento.page';

const routes: Routes = [
  {
    path: '',
    component: ListarAcompanhamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarAcompanhamentoPageRoutingModule {}