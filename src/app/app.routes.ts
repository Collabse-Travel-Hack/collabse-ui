import { Routes } from '@angular/router';

// auth
import { AuthComponent } from './auth/auth.component';

// roles
import { AdminComponent } from './admin/admin.component';
import { PartnerComponent } from './partner/partner.component';
import { UserComponent } from './user/user.component';

// roles

export const routes: Routes = [
  // auth
  { path: 'auth', component: AuthComponent },

  // roles
  { path: 'admin', component: AdminComponent },
  { path: 'partner', component: PartnerComponent },
  { path: 'user', component: UserComponent },

  // ...
  { path: '**', redirectTo: 'auth' },
];
