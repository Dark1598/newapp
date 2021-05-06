import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder',//home
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'add-usuario',
    loadChildren: () => import('./add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mostrar-usuario',
    loadChildren: () => import('./mostrar-usuario/mostrar-usuario.module').then( m => m.MostrarUsuarioPageModule)
  },
  {
    path: 'tela',
    loadChildren: () => import('./tela/tela.module').then( m => m.TelaPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
