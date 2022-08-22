import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

import { MarvelDataServiceService } from '../marvel-data-service.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css'],
})
export class TvShowsComponent implements OnInit {
  tvShows$: any;

  constructor(private marvelService: MarvelDataServiceService) {}

  ngOnInit(): void {
    if (!this.marvelService.tvShows) {
      this.marvelService.getTvShows().subscribe((data) => {
        this.marvelService.tvShows = data;
        this.tvShows$ = of(this.marvelService.tvShows);
      });
    } else {
      this.tvShows$ = of(this.marvelService.tvShows);
    }
  }
}
