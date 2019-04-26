import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'register',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'playlists',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'genres',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'tracks',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'artists',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'settings',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
