import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

export const routerOptions: ExtraOptions = {
	anchorScrolling: 'enabled',
  }

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadChildren: () =>
			import('./modules/landing/home.module').then(
				(module) => module.HomeModule
			),
	},
	{
		path: 'products',
		loadChildren: () =>
			import('./modules/products-by-category/products-by-category.module').then(
				(module) => module.ProductsByCategoryModule
			),
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
