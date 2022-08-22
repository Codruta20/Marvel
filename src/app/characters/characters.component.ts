import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

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
    if (!this.marvelService.characters) {
      this.marvelService.getCharacters().subscribe((data) => {
        this.marvelService.characters = data;
        this.characters$ = of(this.marvelService.characters);
        console.log('Apel');
      });
      console.log(this.marvelService.characters);
    } else {
      this.characters$ = of(this.marvelService.characters);
    }
  }
}
