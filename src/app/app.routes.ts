import { Routes } from '@angular/router';

// roles
import { AdminComponent } from './admin/admin.component';
import { PartnerComponent } from './partner/partner.component';
import { UserComponent } from './user/user.component';


export const routes: Routes = [
  // auth
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },

  // roles
  { path: 'admin', component: AdminComponent },
  { path: 'partner', component: PartnerComponent },
  { path: 'user', component: UserComponent },

  // ...
  { path: '**', redirectTo: 'auth' },
];
