import { ngHTML } from '../utils/ng-html';
import { canActivate, canDeactivate } from './route-fns';
import { Routes } from '@angular/router';
import { Main } from '../main';

export default [
  { path: '', component: Main },
  {
    path: 'params-and-state',
    loadComponent: () => import('../params-and-state'),
    title: 'Query params and state',
    canActivate: [canActivate],
    canDeactivate: [canDeactivate],
  },
  { path: 'templated-ng-for', loadComponent: () => import('../templated-ng-for'), title: 'Templated ngFor' },
  { path: 'api-calls', loadComponent: () => import('../api-calls'), title: 'API calls' },
  { path: 'lazy-load-component', loadComponent: () => import('../lazy-load-component'), title: 'Lazy load component' },
  { path: 'host-directives', loadComponent: () => import('../host-directives'), title: 'Host directives' },
  { path: 'dynamic-component', component: ngHTML('<h1>Dynamically created component</h1>'), title: 'Dynamic component' },
  { path: 'overlay', loadComponent: () => import('../overlay'), title: 'Overlay' },
  { path: 'signals', loadComponent: () => import('../signals'), title: 'Signals' },
  { path: 'cdk-listbox', loadComponent: () => import('../cdk-listbox'), title: 'CDK ListBox' },
  { path: 'custom-selector', loadComponent: () => import('../selector'), title: 'Selector' },
  {
    path: 'bind-inputs/:b',
    loadComponent: () => import('../bind-inputs'),
    title: 'Bind inputs',
    data: { a: 'a' },
    resolve: { d: () => 'd' },
  },
  { path: 'animations', loadComponent: () => import('../animations'), title: 'Animations' },
] as Routes;
