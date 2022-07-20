import { Component, OnInit } from '@angular/core';
import * as data from '../models/tvShows.json';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css'],
})
export class TvShowsComponent implements OnInit {
  tvShows = data.tvShows;

  constructor() {}

  ngOnInit(): void {}
}
