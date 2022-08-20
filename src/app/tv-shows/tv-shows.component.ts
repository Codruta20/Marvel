import { Component, OnInit } from '@angular/core';

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
    this.tvShows$ = this.marvelService.getTvShows();
  }
}
