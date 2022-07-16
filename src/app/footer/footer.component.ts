import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  logos = [
    {
      name: 'Twitter',
      image: './assets/Logo footer/twitter.png',
      website: 'https://twitter.com/marvel',
    },
    {
      name: 'Instagram',
      image: './assets/Logo footer/facebook.png',
      website: 'https://www.instagram.com/marvel/',
    },
    {
      name: 'Facebook',
      image: './assets/Logo footer/instagram.png',
      website: 'https://ro-ro.facebook.com/Marvel/',
    },
    {
      name: 'Youtube',
      image: './assets/Logo footer/youtube.png',
      website: 'https://www.youtube.com/c/marvel',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
