import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public productDetail: any;
  private productSlug: string;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { 
    this.productSlug = this.activatedRoute.snapshot.queryParams['productSlug'] || '';
    this.productDetail = {}
  }

  ngOnInit(): void {
    this.getProductDetail();
  }

  private getProductDetail(): void {
    this.productService.getProductDetail(this.productSlug).subscribe((response) => {
      this.productDetail = response.data
    })
  }
}
