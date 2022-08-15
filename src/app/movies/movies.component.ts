import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    return this.http
      .get('http://localhost:3000/movies')
      .subscribe((apiResponse: any) => {
        this.movies = apiResponse;
      });
  }
}
