import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from './player/player.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { TracksComponent } from './tracks/tracks.component';
import { ArtistsComponent } from './artists/artists.component';
import { GenresComponent } from './genres/genres.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations:
    [
      PlayerComponent,
      PlaylistsComponent,
      TracksComponent,
      ArtistsComponent,
      GenresComponent
    ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule
  ],
  exports: [
    PlayerComponent,
    PlaylistsComponent,
    TracksComponent,
    ArtistsComponent,
    GenresComponent
  ]
})
export class MusicModule { }
