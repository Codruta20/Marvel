import { Component, OnInit } from '@angular/core';
import * as data from '../models/comics.json';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent implements OnInit {
  comics = data.comics;

  constructor() {}

  ngOnInit(): void {}
}
