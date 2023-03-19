import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, CanLoadFn, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import type lazy1 from '../params-and-state';

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  console.log('can activate');
  return true;
};

export const canDeactivate: CanDeactivateFn<lazy1> = (
  component: lazy1,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot,
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  console.log('can deactivate');
  return true;
};
