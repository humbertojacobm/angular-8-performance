import { Component } from '@angular/core';
import {Router,
        NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

// ////esto te permite delarar el gtag objecto de google analitics
// declare var gtag

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router){
    const navEndEvents$ = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    );
    navEndEvents$.subscribe( (event: NavigationEnd) => {
        // gtag('config','UA-147044343', {
          page_path: event.urlAfterRedirects
        });
  }
}
