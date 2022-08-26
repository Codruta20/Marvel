import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NavbarLogoComponent } from './navbar-logo/navbar-logo.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { CharactersComponent } from './characters/characters.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { MoviesComponent } from './movies/movies.component';
import { ComicsComponent } from './comics/comics.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { MarvelDataServiceService } from '../app/marvel-data-service.service';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    NavbarLogoComponent,
    FooterComponent,
    CardComponent,
    CharactersComponent,
    CharacterDetailsComponent,
    MoviesComponent,
    ComicsComponent,
    TvShowsComponent,
    ComicsListComponent,
    MovieDetailsComponent,
    TvShowDetailsComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule,
    CarouselModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    MatPaginatorModule,
  ],
  providers: [MarvelDataServiceService],
  bootstrap: [AppComponent, CarouselComponent],
})
export class AppModule {}
