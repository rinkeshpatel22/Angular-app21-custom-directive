import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { CountryCodeDirective } from './country-code.directive';

@NgModule({
  declarations: [DemoComponent, CountryCodeDirective],
  exports: [DemoComponent],
  imports: [CommonModule]
})
export class DemoModule { }

