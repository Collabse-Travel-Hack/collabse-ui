import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import {
  TuiInputModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiLinkModule,
} from '@taiga-ui/core';

import {
  AdminComponent,
  DashboardComponent,
  PartnerComponent,
  UserComponent,
} from './pages';


const TAIGA_MODULES = [
  TuiInputModule,
  TuiButtonModule,
  TuiLinkModule,
];

const routes: Routes = [
  // roles
  { path: 'admin', component: AdminComponent },
  { path: 'partner', component: PartnerComponent },
  { path: 'user', component: UserComponent },

  // features
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ...TAIGA_MODULES,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AdminComponent,
    PartnerComponent,
    UserComponent,
  ]
})
export class MainModule { }
