import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcluirAcompEncerradoPage } from './excluir-acomp-encerrado.page';

const routes: Routes = [
  {
    path: '',
    component: ExcluirAcompEncerradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcluirAcompEncerradoPageRoutingModule {}