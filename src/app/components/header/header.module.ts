import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [FormsModule, CommonModule],
  exports: [HeaderComponent]
})
export class HeaderModule { }
