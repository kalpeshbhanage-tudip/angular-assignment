import { Component, OnInit } from '@angular/core';
import { Slide } from "./slide.interface";

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss']
})

export class CarouselSliderComponent implements OnInit {
  slideConfig: any;
  slides: Slide[] = [
    {
      title: `Mobile internet`
    },
    {
      title: `Home internet`
    },
    {
      title: `Get a device`
    },
    {
      title: `Add a phone-line`
    },
    {
      title: `Upgrade`
    }
  ];
  currnetSlideIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
   this.slideConfig = {
     centerMode: true,
     slidesToShow: 4.39,
     arrows: false,
     draggable: true,
     dots: false,
     swipeToSlide: true,
     accessibility: false,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           arrows: false,
           centerMode: true,
           slidesToShow: 3,
           speed: 500,
           accessibility: false,
         }
       },
       {
         breakpoint: 768,
         settings: {
           arrows: false,
           centerMode: true,
           slidesToShow: 1,
           speed: 500,
           accessibility: false,
         }
       },
       {
         breakpoint: 400,
         settings: {
           arrows: false,
           centerMode: true,
           slidesToShow: 1,
           speed: 500,
           accessibility: false,
         }
       }
     ]
   }
  }

  /*
  * Track current slide index
  * */
  beforeChangeEvent(event) {
    this.currnetSlideIndex = event.nextSlide;
  }
}
