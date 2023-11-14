import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsByCategoryComponent } from './pages/products-by-category/products-by-category.component';

const routes: Routes = [
	{
		path: '',
		component: ProductsByCategoryComponent,
	},
	{
		path: 'detail',
		component: ProductDetailComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductsByCategoryRoutingModule { }
