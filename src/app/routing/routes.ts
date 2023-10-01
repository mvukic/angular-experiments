import { ngHTML } from '../utils/ng-html';
import { canActivate, canDeactivate } from './route-fns';
import { Routes } from '@angular/router';

export default <Routes>[
  { path: '', redirectTo: 'templated-ng-for', pathMatch: 'full' },
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
  { path: 'expandable', loadComponent: () => import('../expandable/expandable'), title: 'Expandable' },
  { path: 'signals', loadComponent: () => import('../signals'), title: 'Signals' },
  { path: 'cdk-listbox', loadComponent: () => import('../custom-listbox/cdk-listbox'), title: 'CDK ListBox' },
  { path: 'custom-selector', loadComponent: () => import('../selector'), title: 'Selector' },
  {
    path: 'bind-inputs/:b',
    loadComponent: () => import('../bind-inputs'),
    title: 'Bind inputs',
    data: { a: 'a' },
    resolve: { d: () => 'd' },
  },
  { path: 'animations', loadComponent: () => import('../animations'), title: 'Animations' },
  { path: 'event-manager', loadComponent: () => import('../event-manager-plugins'), title: 'Events' },
  { path: 'input-mappers', loadComponent: () => import('../input-mappers'), title: 'Input mappers' },
  { path: 'forms-module', loadComponent: () => import('../form-module'), title: 'Forms' },
  { path: 'container', loadComponent: () => import('../container/container'), title: 'Container' },
  { path: 'table', loadComponent: () => import('../table/table'), title: 'Table' },
  { path: 'custom-overlay', loadComponent: () => import('../custom-overlay'), title: 'Custom overlay' },
  {
    path: 'aux-outlets',
    title: 'Aux outlets',
    loadComponent: () => import('../aux-outlets'),
    children: [
      {
        path: 'cmp-1',
        outlet: 'outlet-sidenav',
        loadComponent: import('../aux-outlets').then((m) => m.AuxOutletCmp1),
      },
      {
        path: 'cmp-2',
        outlet: 'outlet-sidenav',
        loadComponent: import('../aux-outlets').then((m) => m.AuxOutletCmp2),
      },
    ],
  },
  {
    path: 'new-str-dirs',
    loadComponent: () => import('../new-structure-dirs'),
    title: 'New structure directives',
  },
];
