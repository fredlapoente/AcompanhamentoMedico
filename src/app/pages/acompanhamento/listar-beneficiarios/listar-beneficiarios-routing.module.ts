import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarBeneficiariosPage } from './listar-beneficiarios.page';

const routes: Routes = [
  {
    path: '',
    component: ListarBeneficiariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarBeneficiariosPageRoutingModule {}
