import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu-principal',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'selecionar-operadora',
    loadChildren: () => import('./pages/selecionar-operadora/selecionar-operadora.module').then(m => m.SelecionarOperadoraPageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./pages/recuperar-senha/recuperar-senha.module').then(m => m.RecuperarSenhaPageModule)
  },

  {
    path: 'menu-principal',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/menu-principal/menu-principal.module').then(m => m.MenuPrincipalPageModule)
      },      
      {
        path: 'buscar-senha',
        loadChildren: () => import('./pages/acompanhamento/buscar-senha/buscar-senha.module').then(m => m.BuscarSenhaPageModule)
      },
      {
        path: 'abrir-sem-senha',
        loadChildren: () => import('./pages/acompanhamento/abrir-sem-senha/abrir-sem-senha.module').then(m => m.AbrirSemSenhaPageModule)
      },
      {
        path: 'redireciona-perfil',
        loadChildren: () => import('./pages/redireciona-perfil/redirecionaPerfil.module').then(m => m.RedirecionaPerfilPageModule)
      },
      {
        path: 'abrir-sem-senha-domiciliar',
        loadChildren: () => import('./pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar.module').then(m => m.AbrirSemSenhaDomiciliarPageModule)
      },
      {
        path: 'listar-senhas',
        loadChildren: () => import('./pages/acompanhamento/listar-senhas/listar-senhas.module').then(m => m.ListarSenhasPageModule)
      },
      {
        path: 'listar-beneficiarios',
        loadChildren: () => import('./pages/acompanhamento/listar-beneficiarios/listar-beneficiarios.module').then(m => m.ListarBeneficiariosPageModule)
      },
      {
        path: 'exibirFormulario',
        loadChildren: () => import('./pages/acompanhamento/formulario/exibirFormulario.module').then(m => m.ExibirFormularioPageModule)
      },
      {
        path: 'exibirFormDomiciliar',
        loadChildren: () => import('./pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar.module').then(m => m.ExibirFormDomiciliarPageModule)
      },
      {
        path: 'dia-acompanhamento',
        loadChildren: () => import('./pages/acompanhamento/dia-acompanhamento/dia-acompanhamento.module').then(m => m.DiaAcompanhamentoPageModule)
      },
      {
        path: 'anexo',
        loadChildren: () => import('./pages/acompanhamento/anexo/anexo.module').then(m => m.AnexoPageModule)
      },
      {
        path: 'acompanhar',
        loadChildren: () => import('./pages/acompanhamento/acompanhar/acompanhar.module').then(m => m.AcompanharPageModule)
      },
      {
        path: 'restaurar',
        loadChildren: () => import('./pages/restaurar/restaurar.module').then(m => m.RestaurarPageModule)
      },
      {
        path: 'importar-com-senha',
        loadChildren: () => import('./pages/importar/com-senha/importar-com-senha.module').then(m => m.ImportarComSenhaPageModule)
      },
      {
        path: 'importar-sem-senha',
        loadChildren: () => import('./pages/importar/sem-senha/importar-sem-senha.module').then(m => m.ImportarSemSenhaPageModule)
      },
      {
        path: 'listar-acompanhamento',
        loadChildren: () => import('./pages/importar/listar-acompanhamento/listar-acompanhamento.module').then(m => m.ListarAcompanhamentoPageModule)
      },
      {
        path: 'sincronizar',
        loadChildren: () => import('./pages/sincronizar/sincronizar.module').then(m => m.SincronizarPageModule)
      },            
      {
        path: 'alterar-senha',
        loadChildren: () => import('./pages/alterar-senha/alterar-senha.module').then(m => m.AlterarSenhaPageModule)
      },
      {
        path: 'configuracoes-gerais',
        loadChildren: () => import('./pages/configuracao/configuracoes-gerais/configuracoes-gerais.module').then(m => m.ConfiguracoesGeraisPageModule)
      },
      {
        path: 'excluir-acomp-encerrado',
        loadChildren: () => import('./pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.module').then(m => m.ExcluirAcompEncerradoPageModule)
      },
    ],
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
