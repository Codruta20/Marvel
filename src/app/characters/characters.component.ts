import { Component, OnInit } from '@angular/core';
import * as data from '../models/characters.json';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters = data.characters;

  constructor() {}

  ngOnInit(): void {}
}
