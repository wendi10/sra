import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, map, Observable, startWith } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss'],
})
export class ProductsByCategoryComponent implements OnInit {
  public categoryId: string = '';
  public categoryName: string = '';
  public categoryImg: string = '';
  public page: number = 1;
  public products: any[] = [];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
    this.categoryId = this.activatedRoute.snapshot.queryParams['categoryId'] || '';
    this.categoryName = this.activatedRoute.snapshot.queryParams['categoryName'] || '';


  }

  ngOnInit(): void {
    this.media('(max-width: 1350px)').subscribe((matches) => {
      if (matches) {
        this.getProduct(1);
      } else {
        this.getProduct(5);
      }
    });
  }

  private media(query: string): Observable<boolean> {
    const mediaQuery = window.matchMedia(query);
    return fromEvent<MediaQueryList>(mediaQuery, 'change').pipe(
      startWith(mediaQuery),
      map((list: MediaQueryList) => list.matches)
    );
  }

  private getProduct(size: number): void {
    this.productService.getProductByCategory(this.categoryId, this.page).subscribe(response => {
      const bigArray = response.data;
      this.categoryImg = response.data[0].category?.icons[0].url
      let arrayOfArrays = [];
      for (var i = 0; i < bigArray.length; i += size) {
        arrayOfArrays.push(bigArray.slice(i, i + size));
      }
      this.products = arrayOfArrays;
    })
  }
}
