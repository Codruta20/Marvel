import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

import { MarvelDataServiceService } from '../marvel-data-service.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css'],
})
export class TvShowDetailsComponent implements OnInit {
  name = '';
  tvShowDetails: any;
  trailer: any;

  constructor(
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private marvelService: MarvelDataServiceService
  ) {}

  ngOnInit(): void {
    this.getTvShows();

    this.route.queryParams
      .pipe(filter((params) => params.name))
      .subscribe((params) => {
        this.name = params.name;
      });
  }

  getTvShows() {
    this.marvelService.getTvShows().subscribe((apiResponse: any) => {
      this.tvShowDetails = apiResponse
        .filter((movie) => movie.name == this.name)
        .pop();

      this.trailer = this._sanitizer.bypassSecurityTrustResourceUrl(
        this.tvShowDetails.trailer
      );
    });
  }
}
