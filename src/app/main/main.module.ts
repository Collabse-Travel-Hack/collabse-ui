import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { PartnerComponent } from './partner/partner.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'partner', component: PartnerComponent },
  { path: 'component', component: UserComponent },
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
