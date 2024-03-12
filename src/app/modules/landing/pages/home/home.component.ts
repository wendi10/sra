import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, map, Observable, startWith } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../../app.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("welcome") 
  scrollEl: ElementRef | undefined = undefined;
 
  public isMobile: boolean = false;
  public sectionNumber: string = "section-1";

  constructor(private scroller: ViewportScroller, private router: Router, private route: ActivatedRoute,) { }

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
