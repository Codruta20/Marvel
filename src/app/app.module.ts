import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NavbarLogoComponent } from './navbar-logo/navbar-logo.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { CharactersComponent } from './characters/characters.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CarouselComponent, NavbarLogoComponent, FooterComponent, CardComponent, CharactersComponent, CharacterDetailsComponent],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule,
    CarouselModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent, CarouselComponent],
})
export class AppModule {}
