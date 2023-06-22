import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./modules').then((m) => m.HomeModule),
  },
  {
    path: 'characters',
    loadChildren: () => import('./modules').then((m) => m.CharactersModule),
  },
  {
    path: 'favorites',
    loadChildren: () => import('./modules').then((m) => m.FavoritesModule),
  },
  {
    path: 'comics',
    loadChildren: () => import('./modules').then((m) => m.ComicsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
