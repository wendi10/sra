import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { HttpClientModule } from '@angular/common/http';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from 'src/app/components/header/header.module';
import { HomeComponent } from './pages/home/home.component';
import { KnowUsComponent } from './components/know-us/know-us.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { VisionMisionComponent } from './components/vision-mision/vision-mision.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { ProductService } from 'src/app/core/services/product.service';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PromotionService } from 'src/app/core/services/promotion.service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [  
    HomeComponent,
    KnowUsComponent,
    LandingComponent,
    ProductCategoryComponent,
    PromotionsComponent,
    VisionMisionComponent,
    WelcomeSectionComponent,
    AboutUsComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    NgbCarouselModule,
    HeaderModule,
    FooterModule,
    HttpClientModule
  ],
  providers:[ProductService, PromotionService],
  exports: [HomeComponent]
})
export class HomeModule { }
