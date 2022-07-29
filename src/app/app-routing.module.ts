import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: 'carousel', component: CarouselComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character-details', component: CharacterDetailsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'comics-list', component: ComicsListComponent },
  { path: 'movie-details', component: MovieDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
