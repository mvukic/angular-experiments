import {
    provideHttpClient,
    withFetch,
    withInterceptors,
} from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes } from '@angular/router';
import { httpInterceptor } from '../http/interceptor';
import { ngHTML } from '../utils/ng-html';
import { canActivate, canDeactivate } from './route-fns';

const t = new InjectionToken<boolean>('t');

export default <Routes>[
  { path: '', redirectTo: 'api-calls', pathMatch: 'full' },
  {
    path: 'api-calls',
    outlet: 'outlet-sidenav',
    component: () => import('../sidenav'),
  },
  {
    path: 'api-calls',
    providers: [
      provideHttpClient(withFetch(), withInterceptors([httpInterceptor])),
    ],
    loadComponent: () => import('../api-calls'),
    title: 'API calls',
  },
  {
    path: 'params-and-state',
    loadComponent: () => import('../params-and-state'),
    title: 'Query params and state',
    canActivate: [canActivate],
    canDeactivate: [canDeactivate],
  },
  {
    path: 'lazy-load-component',
    loadComponent: () => import('../lazy-load-component'),
    title: 'Lazy load component',
  },
  {
    path: 'host-directives',
    loadComponent: () => import('../host-directives'),
    title: 'Host directives',
  },
  {
    path: 'dynamic-component',
    component: ngHTML('<h1>Dynamically created component</h1>'),
    title: 'Dynamic component',
  },
  {
    path: 'expandable',
    loadComponent: () => import('../expandable/expandable'),
    title: 'Expandable',
  },
  {
    path: 'signals',
    loadComponent: () => import('../signals'),
    title: 'Signals',
  },
  {
    path: 'cdk-listbox',
    loadComponent: () => import('../custom-listbox/cdk-listbox'),
    title: 'CDK ListBox',
  },
  {
    path: 'custom-selector',
    loadComponent: () => import('../selector'),
    title: 'Selector',
  },
  {
    path: 'bind-inputs/:b',
    loadComponent: () => import('../bind-inputs'),
    title: 'Bind inputs',
    data: { a: 'a' },
    resolve: { d: () => 'd' },
  },
  {
    path: 'animations',
    providers: [provideAnimationsAsync()],
    loadComponent: () => import('../animations'),
    title: 'Animations',
  },
  {
    path: 'event-manager',
    loadComponent: () => import('../event-manager-plugins'),
    title: 'Events',
  },
  {
    path: 'input-mappers',
    loadComponent: () => import('../input-mappers'),
    title: 'Input mappers',
  },
  {
    path: 'forms-module',
    loadComponent: () => import('../form-module'),
    title: 'Forms',
  },
  {
    path: 'container',
    loadComponent: () => import('../container/container'),
    title: 'Container',
  },
  {
    path: 'table',
    loadComponent: () => import('../table/table'),
    title: 'Table',
  },
  {
    path: 'custom-overlay',
    loadComponent: () => import('../custom-overlay'),
    title: 'Custom overlay',
  },
  {
    path: 'aux-outlets',
    title: 'Aux outlets',
    providers: [
      {
        provide: t,
        useValue: false,
      },
    ],
    loadComponent: () => import('../aux-outlets'),
    children: [
      {
        path: 'cmp-1',
        outlet: 'outlet-sidenav-1',
        loadComponent: () =>
          import('../aux-outlets').then((m) => m.AuxOutletCmp1),
      },
      {
        path: 'cmp-2',
        outlet: 'outlet-sidenav-2',
        loadComponent: () =>
          import('../aux-outlets').then((m) => m.AuxOutletCmp2),
      },
    ],
  },
  {
    path: 'new-str-dirs',
    loadComponent: () => import('../new-structure-dirs'),
    title: 'New structure directives',
  },
  {
    path: 'cmp-aux-footer-1',
    outlet: 'outletFooter',
    loadComponent: () =>
      import('./../aux-outlets').then((r) => r.AuxOutletCmp3),
  },
  {
    path: 'cmp-aux-footer-2',
    outlet: 'outletFooter',
    loadComponent: () =>
      import('./../aux-outlets').then((r) => r.AuxOutletCmp4),
  },
  {
    path: 'test-cmp/:input',
    loadComponent: () =>
      import('./../test.cmp').then((r) => r.TestCmp),
  },
];
