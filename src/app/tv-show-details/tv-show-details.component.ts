import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

import * as data from '../models/tvShows.json';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css'],
})
export class TvShowDetailsComponent implements OnInit {
  tvShows = data.tvShows;
  name = '';
  tvShowDetails: any;
  trailer: any;

  constructor(
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((params) => params.name))
      .subscribe((params) => {
        this.name = params.name;
      });

    this.tvShowDetails = this.tvShows
      .filter((param) => param.name == this.name)
      .pop();

    this.trailer = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.tvShowDetails.trailer
    );
  }
}
