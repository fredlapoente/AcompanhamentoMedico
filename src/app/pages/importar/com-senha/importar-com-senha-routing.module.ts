import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportarComSenhaPage } from './importar-com-senha.page';

const routes: Routes = [
  {
    path: '',
    component: ImportarComSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportarComSenhaPageRoutingModule {}