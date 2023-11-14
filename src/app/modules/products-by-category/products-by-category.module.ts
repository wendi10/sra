import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsByCategoryComponent } from './pages/products-by-category/products-by-category.component';
import { ProductsByCategoryRoutingModule } from './products-by-category.routing';
import { ProductService } from 'src/app/core/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HeaderModule } from 'src/app/components/header/header.module';



@NgModule({
  declarations: [
    ProductsByCategoryComponent,
    ProductCardComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsByCategoryRoutingModule,
    HeaderModule,
    NgbCarouselModule,
    HttpClientModule
  ],
  exports: [ProductsByCategoryComponent],
  providers: [ProductService]
})
export class ProductsByCategoryModule { }
