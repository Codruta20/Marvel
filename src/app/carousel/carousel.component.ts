import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  public itemsPerSlide = 1;
  public singleSlideOffset = false;
  public noWrap = false;
  public cycleInterval = 3000;
  public slides = [
    { image: './assets/Thor Love and Thunder.jpg' },
    { image: './assets/Dr Strange Multiverse of Madness.jpg' },
    { image: './assets/Spiderman No way home.jpeg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
