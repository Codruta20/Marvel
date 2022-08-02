import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import data from '../models/comicsList.json';
import * as dataComic from '../models/comics.json';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css'],
})
export class ComicsListComponent implements OnInit {
  comicsData = data;
  comics = dataComic.comics;
  name = '';
  comicsList: any;
  comic: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams
      .pipe(filter((params) => params.name))
      .subscribe((params) => {
        this.name = params.name;
      });
    this.comicsList = this.comicsData[this.name];

    this.comic = this.comics.filter((comic) => comic.name == this.name).pop();
  }

  ngOnInit(): void {}
}
