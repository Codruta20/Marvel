import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    return this.http
      .get('http://localhost:3000/characters')
      .subscribe((apiResponse: any) => {
        this.characters = apiResponse;
        console.log(this.characters);
      });
  }
}
