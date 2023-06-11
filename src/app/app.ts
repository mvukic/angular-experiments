import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppContainer, AppContainerSidenavPosition } from './container/app-container';
import { AppExpandable } from './expandable/app-expandable.component';
import { AppExpandableTrigger } from './expandable/expandable-trigger.cmp';

@Component({
  selector: 'header-cmp',
  standalone: true,
  styles: [
    `
      :host {
        display: flex;
        gap: 5px;
        padding-left: 5px;
        background-color: lightblue;
      }
    `,
  ],
  template: `This is a header`,
})
export class HeaderCmp {}

@Component({
  selector: 'sidenav-cmp',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        gap: 2px;
        padding: 1px;
        height: 100%;
      }
    `,
  ],
  template: `
    <button [routerLink]="['templated-ng-for']" routerLinkActive="underline">Templated ng for</button>
    <button [routerLink]="['params-and-state']" [queryParams]="{ debug: 1 }" [state]="{ debug: 1 }" routerLinkActive="underline">
      Params and state
    </button>
    <button [routerLink]="['lazy-load-component']" routerLinkActive="underline">Lazy load component</button>
    <button [routerLink]="['api-calls']" routerLinkActive="underline">API calls</button>
    <button [routerLink]="['dynamic-component']" routerLinkActive="underline">Dynamic component</button>
    <button [routerLink]="['host-directives']" routerLinkActive="underline">Host directives</button>
    <button [routerLink]="['signals']" routerLinkActive="underline">Signals</button>
    <button [routerLink]="['cdk-listbox']" routerLinkActive="underline">CDK ListBox</button>
    <button [routerLink]="['custom-selector']" routerLinkActive="underline">Selector</button>
    <button [routerLink]="['bind-inputs', 'b']" [queryParams]="{ c: 'c' }" routerLinkActive="underline">Bind inputs</button>
    <button [routerLink]="['animations']" routerLinkActive="underline">Animations</button>
    <button [routerLink]="['event-manager']" routerLinkActive="underline">Events</button>
    <button [routerLink]="['input-mappers']" routerLinkActive="underline">Input mappers</button>
    <button [routerLink]="['forms-module']" routerLinkActive="underline">Forms</button>
    <button [routerLink]="['expandable']" routerLinkActive="underline">Expandable</button>
    <button [routerLink]="['container']" routerLinkActive="underline">Container</button>
  `,
})
export class SidenavCmp {}

@Component({
  selector: 'sub-header-cmp',
  standalone: true,
  styles: [
    `
      :host {
        display: flex;
        gap: 5px;
        padding-left: 10px;
      }
    `,
  ],
  template: `<ng-content /> This is a sub header`,
})
export class SubHeaderCmp {}

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, AppContainer, HeaderCmp, SidenavCmp, AppExpandable, AppExpandableTrigger, SubHeaderCmp],
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
  template: `
    <app-container>
      <header-cmp header />
      <app-expandable withoutTrigger [expanded]="expanded()" sidenav>
        <sidenav-cmp (click)="expanded.set(false)" />
      </app-expandable>
      <sub-header-cmp subHeader>
        <app-expandable-trigger [value]="expanded()" (valueChange)="expanded.set($event)" visibilityIcon="menu_open" invisibilityIcon="menu" />
      </sub-header-cmp>
      <router-outlet content />
    </app-container>
  `,
})
export default class App {
  readonly expanded = signal(false);
}
