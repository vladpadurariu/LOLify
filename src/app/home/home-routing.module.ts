import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { GenresComponent } from './genres/genres.component';
import { TracksComponent } from './tracks/tracks.component';
import { ArtistsComponent } from './artists/artists.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from '../_services/auth-guard.service';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'playlists',
        component: PlaylistsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'genres',
        component: GenresComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tracks',
        component: TracksComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'artists',
        component: ArtistsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard]
    },
    {
        // this needs some configuring
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
