import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .navigation {
          flex: 0 0 min-content;
          overflow: hidden;
          padding: 1px;
          border-bottom: 1px solid purple;
        }
        .content {
          flex: 1 0;
          overflow: hidden;
        }
      }
    `,
  ],
  template: `
    <div class="navigation">
      <button [routerLink]="['templated-ng-for']" routerLinkActive="underline">Templated ng for</button>
      <button [routerLink]="['params-and-state']" [queryParams]="{ debug: 1 }" [state]="{ debug: 1 }" routerLinkActive="underline">
        Params and state
      </button>
      <button [routerLink]="['lazy-load-component']" routerLinkActive="underline">Lazy load component</button>
      <button [routerLink]="['api-calls']" routerLinkActive="underline">API calls</button>
      <button [routerLink]="['dynamic-component']" routerLinkActive="underline">Dynamic component</button>
      <button [routerLink]="['host-directives']" routerLinkActive="underline">Host directives</button>
      <button [routerLink]="['expandable']" routerLinkActive="underline">Expandable</button>
      <button [routerLink]="['signals']" routerLinkActive="underline">Signals</button>
      <button [routerLink]="['cdk-listbox']" routerLinkActive="underline">CDK ListBox</button>
      <button [routerLink]="['custom-selector']" routerLinkActive="underline">Selector</button>
      <button [routerLink]="['bind-inputs', 'b']" [queryParams]="{ c: 'c' }" routerLinkActive="underline">Bind inputs</button>
      <button [routerLink]="['animations']" routerLinkActive="underline">Animations</button>
      <button [routerLink]="['event-manager']" routerLinkActive="underline">Events</button>
      <button [routerLink]="['input-mappers']" routerLinkActive="underline">Input mappers</button>
      <button [routerLink]="['forms-module']" routerLinkActive="underline">Forms</button>
    </div>
    <div class="content">
      <router-outlet />
    </div>
  `,
})
export class App {}
