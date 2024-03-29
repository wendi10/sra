import { CommonModule } from '@angular/common';
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
	}
];

@NgModule({
  imports: [CommonModule ,RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
