import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isChecked:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public onClickMenu(): void {
    this.isChecked = !this.isChecked
  }

}
