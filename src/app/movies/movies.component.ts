import { Component, OnInit } from '@angular/core';
import * as data from '../models/movies.json';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies = data.movies;

  constructor() {}

  ngOnInit(): void {}
}
