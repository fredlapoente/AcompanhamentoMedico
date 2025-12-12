import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracoesGeraisPage } from './configuracoes-gerais.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracoesGeraisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracoesGeraisPageRoutingModule {}