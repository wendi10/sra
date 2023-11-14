import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) {
   }

   getCategory(): Observable<any> {
    return this.http.get(`${environment.url.main}api/promotions?per_page=3&page=1`)
  }
}
