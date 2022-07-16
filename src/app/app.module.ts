import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CarouselComponent],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent, CarouselComponent],
})
export class AppModule {}
