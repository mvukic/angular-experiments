import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'sidenav-cmp',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
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
  // prettier-ignore
  template: `
    <button [routerLink]="['api-calls']" routerLinkActive="underline">API calls</button>
    <button [routerLink]="['params-and-state']" [queryParams]="{ debug: 1 }" [state]="{ debug: 1 }" routerLinkActive="underline">Params and state</button>
    <button [routerLink]="['lazy-load-component']" routerLinkActive="underline">Lazy load component</button>
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
    <button [routerLink]="['table']" routerLinkActive="underline">Table</button>
    <button [routerLink]="['custom-overlay']" routerLinkActive="underline">Custom overlay</button>
    <button [routerLink]="['aux-outlets']" routerLinkActive="underline">Aux outlet</button>
    <button [routerLink]="['new-str-dirs']" routerLinkActive="underline">New structure dirs</button>
  `,
})
export default class SidenavCmp {}
