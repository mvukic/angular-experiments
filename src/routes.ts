import { CanLoadFn, Route, Routes, UrlSegment, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { Main } from './app/main'
import { ngHTML } from './app/ng-html'

export const canLoad: CanLoadFn = (route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    return true
}

export const routes: Routes = [
    { path: '', component: Main },
    { path: 'lazy1', loadComponent: () => import('./app/lazy1'), title: 'Lazy 1', canLoad: [canLoad] },
    { path: 'lazy2', loadComponent: () => import('./app/lazy2'), title: 'Lazy 2', canLoad: [canLoad] },
    { path: 'lazy3', component: ngHTML('<h1>Lazy load 3</h1>'), title: 'Lazy 3', canLoad: [canLoad] },
]
