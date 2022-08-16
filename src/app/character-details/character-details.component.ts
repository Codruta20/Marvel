import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  name = '';
  characterDetails: any;

  paragraphTitle: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((params) => params.name))
      .subscribe((params) => {
        this.name = params.name;
      });

    this.getCharacters();

    this.paragraphTitle = this.characterDetails.description.map(function (x) {
      return x[0];
    });
  }

  getCharacters() {
    return this.http
      .get('http://localhost:3000/characters')
      .subscribe((apiResponse: any) => {
        this.characterDetails = apiResponse
          .filter((character) => character.name == this.name)
          .pop();
      });
  }
}
