import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContainerCmp } from './container/container.cmp';
import { ExpandableCmp } from './expandable/expandable.cmp';
import { ExpandableTrigger } from './expandable/expandable-trigger.cmp';

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
  template: `
    <ng-content />
    <div>This is a sub header</div>
  `,
})
export class SubHeaderCmp {}

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, ContainerCmp, HeaderCmp, SidenavCmp, ExpandableCmp, ExpandableTrigger, SubHeaderCmp],
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
  template: `
    <container-cmp>
      <header-cmp header />
      <expandable-cmp withoutTrigger [expanded]="expanded()" sidenav>
        <sidenav-cmp />
      </expandable-cmp>
      <sub-header-cmp subHeader>
        <expandable-trigger [value]="expanded()" (valueChange)="expanded.set($event)" visibilityIcon="menu_open" invisibilityIcon="menu" />
      </sub-header-cmp>
      <router-outlet content />
    </container-cmp>
  `,
})
export default class App {
  readonly expanded = signal(false);
}
