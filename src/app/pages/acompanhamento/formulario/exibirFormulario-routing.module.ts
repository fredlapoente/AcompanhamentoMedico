import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExibirFormularioPage } from './exibirFormulario.page';

const routes: Routes = [
  {
    path: '',
    component: ExibirFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExibirFormularioPageRoutingModule {}
