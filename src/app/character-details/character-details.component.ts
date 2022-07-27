import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import * as data from '../models/characters.json';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  characters = data.characters;
  name = '';
  characterDetails: any;

  paragraphTitle: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((params) => params.name))
      .subscribe((params) => {
        this.name = params.name;
      });

    this.characterDetails = this.characters
      .filter((character) => character.name == this.name)
      .pop();

    this.paragraphTitle = this.characterDetails.description.map(function (x) {
      return x[0];
    });
    console.log(this.paragraphTitle);
  }
}
