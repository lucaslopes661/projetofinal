import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'logincliente',
    loadChildren: () => import('./logincliente/logincliente.module').then( m => m.LoginclientePageModule)
  },
  {
    path: 'loginpodologo',
    loadChildren: () => import('./loginpodologo/loginpodologo.module').then( m => m.LoginpodologoPageModule)
  },
  {
    path: 'cadastropodologo',
    loadChildren: () => import('./cadastropodologo/cadastropodologo.module').then( m => m.CadastropodologoPageModule)
  },
  {
    path: 'cadastrocliente',
    loadChildren: () => import('./cadastrocliente/cadastrocliente.module').then( m => m.CadastroclientePageModule)
  },
  {
    path: 'homecliente',
    loadChildren: () => import('./homecliente/homecliente.module').then( m => m.HomeclientePageModule)
  },
  {
    path: 'homepodologo',
    loadChildren: () => import('./homepodologo/homepodologo.module').then( m => m.HomepodologoPageModule)
  },
  {
    path: 'esq-senha',
    loadChildren: () => import('./esq-senha/esq-senha.module').then( m => m.EsqSenhaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
