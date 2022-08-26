import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any = [];
  nrPages: number;
  arrPages: any = [];
  removeElement: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getMovies()
      .then((data: any) => {
        this.movies = data;
        this.nrPages = Math.ceil(this.movies.length / 12);
        this.arrPages = [...Array(this.nrPages + 1).keys()];
        this.removeElement = this.arrPages.shift();
        console.log(this.arrPages);
      })
      .catch((error) => console.log(error));
  }

  getMovies() {
    return this.httpClient.get('http://localhost:3000/movies').toPromise();
  }
}
