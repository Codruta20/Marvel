import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: 'carousel', component: CarouselComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character-details', component: CharacterDetailsComponent },
  { path: 'movies', component: MoviesComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
