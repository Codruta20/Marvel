import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css'],
})
export class TvShowsComponent implements OnInit {
  tvShows$ = this.http.get('http://localhost:3000/tvShows');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
