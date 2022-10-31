import { ngHTML } from './app/ng-html'
import { canActivate, canDeactivate, canLoad } from './app/route-fns'
import { Routes } from '@angular/router'
import { Main } from './app/main'

export default [
    { path: '', component: Main },
    {
        path: 'lazy1',
        loadComponent: () => import('./app/lazy1'),
        title: 'Lazy 1',
        canLoad: [canLoad],
        canActivate: [canActivate],
        canDeactivate: [canDeactivate],
    },
    { path: 'lazy2', loadComponent: () => import('./app/lazy2'), title: 'Lazy 2' },
    { path: 'lazy3', component: ngHTML('<h1>Lazy load 3</h1>'), title: 'Lazy 3' },
] as Routes
