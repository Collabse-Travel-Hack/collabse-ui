import { Routes } from '@angular/router';

import { TemplateComponent } from './layouts/template/template.component';


export const routes: Routes = [
  // auth
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },

  // main
  {
    path: 'app',
    component: TemplateComponent,
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },

  // ...
  { path: '**', redirectTo: 'auth' },
];
