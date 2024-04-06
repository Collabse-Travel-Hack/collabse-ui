import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import {
  AdminComponent,
  PartnerComponent,
  UserComponent,
} from './pages';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'partner', component: PartnerComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AdminComponent,
    PartnerComponent,
    UserComponent,
  ]
})
export class MainModule { }
