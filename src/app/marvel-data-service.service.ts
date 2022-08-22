import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MarvelDataServiceService {
  constructor(private http: HttpClient) {}

  characters = null;
  tvShows = null;

  getCharacters() {
    return this.http.get('http://localhost:3000/characters');
  }

  getTvShows() {
    return this.http.get('http://localhost:3000/tvShows');
  }
}
