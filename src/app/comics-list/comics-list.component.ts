import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import data from '../models/comicsList.json';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css'],
})
export class ComicsListComponent implements OnInit {
  comicsData = data;
  name = '';
  comicsList: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams
      .pipe(filter((params) => params.name))
      .subscribe((params) => {
        this.name = params.name;
      });
    this.comicsList = this.comicsData[this.name];
    console.log(this.comicsList);
    console.log(this.comicsList[0].name);
  }

  ngOnInit(): void {}
}
