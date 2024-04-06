import { Routes } from '@angular/router';


export const routes: Routes = [
  // auth
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },

  // main
  {
    path: 'app',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },

  // ...
  { path: '**', redirectTo: 'auth' },
];
