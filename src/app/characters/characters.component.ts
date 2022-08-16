import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters$ = this.http.get('http://localhost:3000/characters');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
