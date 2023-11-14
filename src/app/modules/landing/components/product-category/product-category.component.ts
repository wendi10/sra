import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/core/services/product.service';
declare var $: any; 

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  public productCategory:any = []

  constructor(config: NgbCarouselConfig, private productService: ProductService, private router: Router) {
    config.interval = 3000
    config.showNavigationArrows= false;
    config.showNavigationIndicators= false;
   }

  ngOnInit(): void {
    this.getProductCategory();
  }

  public onClickCategory(categoryId: string, categoryName: string): void {
    this.router.navigate(['products'], {queryParams: {categoryId, categoryName}})
  }

  private getProductCategory(): void {
    this.productService.getCategory().subscribe(response => {
      this.productCategory = response.data;
    })
  }
}
