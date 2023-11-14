import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 
  }

  getCategory(): Observable<any> {
    return this.http.get(`${environment.url.main}api/product-categories`)
  }

  getProductByCategory(categoryId: string, page: number): Observable<any> {
    return this.http.get(`${environment.url.main}api/products?filter[product_category_id]=${categoryId}`)
  }

  getProductDetail(productSlug: string): Observable<any> {
    return this.http.get(`${environment.url.main}api/products/${productSlug}`)
  }
}
