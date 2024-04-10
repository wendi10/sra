import { Component, Input, OnInit } from '@angular/core';
import { csr } from 'src/app/core/models/csr.model';

@Component({
  selector: 'app-csr',
  templateUrl: './csr.component.html',
  styleUrls: ['./csr.component.scss'],
})
export class CsrComponent implements OnInit {
  @Input() csr: csr = {
    type: 0,
    title: '',
    description: '',
    url: '',
    imgUrl: '',
  };
  @Input() isMobile: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
