import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecionarOperadoraPage } from './selecionar-operadora.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionarOperadoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecionarOperadoraPageRoutingModule {}
