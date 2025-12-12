import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedirecionaPerfilPage } from './redirecionaPerfil.page';

const routes: Routes = [
  {
    path: '',
    component: RedirecionaPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedirecionaPerfilRoutingModule {}
