import { Component,
         OnInit,
         AfterViewInit,
         PLATFORM_ID,
         Inject } from '@angular/core';

import Swiper from 'swiper';
import { isPlatformBrowser,
         isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
  }

  // ngOnInit() {
  //   if (isPlatformBrowser(this.platformId)) {
  //      // Client only code.
  //      ...
  //   }
  //   if (isPlatformServer(this.platformId)) {
  //     // Server only code.
  //     ...
  //   }
  // }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.mySwiper = new Swiper('.swiper-container');
    }
  }

}
