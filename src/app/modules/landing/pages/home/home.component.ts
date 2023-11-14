import { Component, OnInit } from '@angular/core';
import { fromEvent, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.media('(max-width: 1350px)').subscribe((matches) => {
      if (matches) {
        this.isMobile = true;
        return;
      }

      this.isMobile = false;
    });
  }
  
  private media(query: string): Observable<boolean> {
    const mediaQuery = window.matchMedia(query);
    return fromEvent<MediaQueryList>(mediaQuery, 'change').pipe(
      startWith(mediaQuery),
      map((list: MediaQueryList) => list.matches)
    );
  }

}
