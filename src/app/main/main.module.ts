import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  TuiInputModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiLinkModule,
  TuiScrollbarModule,
} from '@taiga-ui/core';


import {
  CatalogComponent,
  DashboardComponent,
} from './pages';

import {
  PreviewCardComponent,
} from './components';
// import { HttpClientModule } from '@angular/common/http';


const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const TAIGA_MODULES = [
  TuiInputModule,
  TuiButtonModule,
  TuiLinkModule,
  TuiScrollbarModule,
];

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'catalog', component: CatalogComponent },
];

@NgModule({
  imports: [
    ...BASE_MODULES,
    ...TAIGA_MODULES,
    // HttpClientModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DashboardComponent,
    CatalogComponent,
    PreviewCardComponent,
  ]
})
export class MainModule { }
