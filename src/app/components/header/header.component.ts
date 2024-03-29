import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isMobile: boolean;
  public isChecked:boolean = false

  constructor() { 
    this.isMobile = false
  }

  ngOnInit(): void {
  }

  public onClickMenu(): void {
    this.isChecked = !this.isChecked
  }

}
