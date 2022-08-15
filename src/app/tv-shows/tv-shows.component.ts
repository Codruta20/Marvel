import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css'],
})
export class TvShowsComponent implements OnInit {
  tvShows = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTvShows();
  }

  getTvShows() {
    return this.http
      .get('http://localhost:3000/tvShows')
      .subscribe((apiResponse: any) => {
        this.tvShows = apiResponse;
      });
  }
}
