import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportarSemSenhaPage } from './importar-sem-senha.page';

const routes: Routes = [
  {
    path: '',
    component: ImportarSemSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportarSemSenhaPageRoutingModule {}