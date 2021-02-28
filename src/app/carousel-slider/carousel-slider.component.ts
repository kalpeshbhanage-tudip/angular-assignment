import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss']
})
export class CarouselSliderComponent implements OnInit {
  slideConfig: any;
  slides = [
    {
      title: `Mobile internet`,
      index: 0
    },
    {
      title: `Home internet`,
      index: 1
    },
    {
      title: `Get a device`,
      index: 2
    },
    {
      title: `Add a phone-line`,
      index: 3
    },
    {
      title: `Upgrade`,
      index: 4
    }
  ];
  currnetSlideIndex: any;

  constructor() { }

  ngOnInit(): void {
    this.currnetSlideIndex = 0;
    this.slideConfig = {
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed:1500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    }
  }

  beforeChangeEvent(event) {
    this.currnetSlideIndex = event.nextSlide;
  }
}
