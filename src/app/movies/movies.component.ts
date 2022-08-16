import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getMovies()
      .then((data: any) => {
        this.movies = data;
      })
      .catch((error) => console.log(error));
  }

  getMovies() {
    return this.httpClient.get('http://localhost:3000/movies').toPromise();
  }
}
