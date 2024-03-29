import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from 'src/app/components/header/header.module';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GaleryComponent } from './components/galery/galery.component';
import { LightgalleryModule } from 'lightgallery/angular/13';
import { ProductComponent } from './components/product/product.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CsrComponent } from './components/csr/csr.component';

@NgModule({
  declarations: [  
    HomeComponent,
    WelcomeSectionComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    GaleryComponent,
    ProductComponent,
    ContactUsComponent,
    CsrComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NgbCarouselModule,
    HeaderModule,
    FooterModule,
    LightgalleryModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
