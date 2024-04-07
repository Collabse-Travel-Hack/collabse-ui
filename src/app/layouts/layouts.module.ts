import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TemplateComponent } from './template/template.component';


const BASE_MODULES = [
  CommonModule,
  RouterModule,
];

@NgModule({
  imports: [
    ...BASE_MODULES,
  ],
  declarations: [
    TemplateComponent,
  ],
})
export class LayoutsModule { }
