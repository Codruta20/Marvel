import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-logo',
  templateUrl: './navbar-logo.component.html',
  styleUrls: ['./navbar-logo.component.css'],
})
export class NavbarLogoComponent implements OnInit {
  images = [
    { image: './assets/Logos/Avengers.png' },
    { image: './assets/Logos/Dr Strange Multiverse of Madness.png' },
    { image: './assets/Logos/Loki.png' },
    { image: './assets/Logos/Spider-Man No way home.png' },
    { image: './assets/Logos/Eternals.png' },
    { image: './assets/Logos/Shang-Chi.png' },
    { image: './assets/Logos/Moon Knight.png' },
    { image: './assets/Logos/Hawkeye.png' },
    { image: './assets/Logos/Thor Love and Thunder.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
