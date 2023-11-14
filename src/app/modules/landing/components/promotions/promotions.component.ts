import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/core/services/promotion.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  public promotions: any[]

  constructor(private promotionService: PromotionService) { 
    this.promotions = [];
  }

  ngOnInit(): void {
    this.getPromotions()
  }

  getPromotions(): void {
    this.promotionService.getCategory().subscribe(response => {
      this.promotions = response.data
    })
  }
}
