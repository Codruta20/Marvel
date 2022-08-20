import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { MarvelDataServiceService } from '../marvel-data-service.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  name = '';
  characterDetails: any;

  paragraphTitle: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private marvelService: MarvelDataServiceService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((params) => params.name))
      .subscribe((params) => {
        this.name = params.name;
      });

    this.marvelService.getCharacters().subscribe((apiResponse: any) => {
      this.characterDetails = apiResponse
        .filter((character) => character.name == this.name)
        .pop();
    });

    this.paragraphTitle = this.characterDetails.description.map(function (x) {
      return x[0];
    });
  }
}
