import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import * as data from '../models/movies.json';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movies = data.movies;
  name = '';
  movieDetails: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((params) => params.name))
      .subscribe((params) => {
        this.name = params.name;
      });

    this.movieDetails = this.movies
      .filter((movie) => movie.name == this.name)
      .pop();
    console.log(this.movieDetails);
    console.log(this.movies);
    console.log(this.name);
  }
}
