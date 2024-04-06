import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  TuiButtonModule,
  TuiDataListModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiDataListWrapperModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiSelectModule,
} from '@taiga-ui/kit';

import { LoginComponent } from './login/login.component';


const BASE_MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
];

const TAIGA_MODULES = [
  TuiButtonModule,
  TuiDataListModule,
  TuiDataListWrapperModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiSelectModule,
  TuiTextfieldControllerModule,
];

const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [
    ...BASE_MODULES,
    ...TAIGA_MODULES,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
  ],
})
export class AuthModule { }
