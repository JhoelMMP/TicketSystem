import { Routes } from '@angular/router';
import { loginVerifyGuard } from './guards/LoginVerify.guard';

export const routes: Routes = [

  {
    path: 'Login',
    title: 'LogIn',
    loadComponent: ()=>import ('./Login/Login.component')
  },
  {
    path: 'Dashboard',
    title: 'Dashboard',
    canActivate: [loginVerifyGuard],
    loadComponent: () => import('./dashboard/dashboard.component')
  },
  {
    path: '**',
    redirectTo: 'Login'
  }

];
