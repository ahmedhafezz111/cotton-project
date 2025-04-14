import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: true,
        margin: 20
      },
      600: {
        items: 2,
        nav: true,
        dots: true,
        margin: 30
      },
      1000: {
        items: 3,
        nav: true,
        dots: true,
        margin: 40
      }
    },
    rtl: true,
    stagePadding: 50,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };

}
