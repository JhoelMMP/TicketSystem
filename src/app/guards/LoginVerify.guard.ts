import { Router, type CanActivateFn } from '@angular/router';

export const loginVerifyGuard: CanActivateFn = (route, state) => {

  let router: Router = new Router();

  if (localStorage.getItem('Valido') === 'Si') return true;

  router.navigate(['Login']);
  return false
};
