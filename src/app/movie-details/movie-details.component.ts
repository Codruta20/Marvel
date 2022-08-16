import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  name = '';
  movieDetails: any;
  trailer: any;

  constructor(
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getMovies();

    this.route.queryParams
      .pipe(filter((params) => params.name))
      .subscribe((params) => {
        this.name = params.name;
      });
  }

  getMovies() {
    return this.http
      .get('http://localhost:3000/movies')
      .subscribe((apiResponse: any) => {
        this.movieDetails = apiResponse
          .filter((movie) => movie.name == this.name)
          .pop();

        this.trailer = this._sanitizer.bypassSecurityTrustResourceUrl(
          this.movieDetails.trailer
        );
      });
  }
}
