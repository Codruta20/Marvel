import { Component, OnInit } from '@angular/core';

import { MarvelDataServiceService } from '../marvel-data-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters$: any;

  constructor(private marvelService: MarvelDataServiceService) {}

  ngOnInit(): void {
    this.characters$ = this.marvelService.getCharacters();
  }
}
