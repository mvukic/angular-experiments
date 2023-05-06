import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div>
        <a [routerLink]="['']">Experiments</a>
      </div>
      <div>
        <button [routerLink]="['params-and-state']" [queryParams]="{ debug: 1 }" [state]="{ debug: 1 }" routerLinkActive="underline">
          Params and state
        </button>
        <button [routerLink]="['templated-ng-for']" routerLinkActive="underline">Templated ng for</button>
        <button [routerLink]="['lazy-load-component']" routerLinkActive="underline">Lazy load component</button>
        <button [routerLink]="['api-calls']" routerLinkActive="underline">API calls</button>
        <button [routerLink]="['dynamic-component']" routerLinkActive="underline">Dynamic component</button>
        <button [routerLink]="['host-directives']" routerLinkActive="underline">Host directives</button>
        <button [routerLink]="['overlay']" routerLinkActive="underline">Overlay</button>
        <button [routerLink]="['signals']" routerLinkActive="underline">Signals</button>
        <button [routerLink]="['cdk-listbox']" routerLinkActive="underline">CDK ListBox</button>
        <button [routerLink]="['custom-selector']" routerLinkActive="underline">Selector</button>
        <button [routerLink]="['bind-inputs', 'b']" [queryParams]="{ c: 'c' }" routerLinkActive="underline">Bind inputs</button>
        <button [routerLink]="['animations']" routerLinkActive="underline">Animations</button>
      </div>
    </div>
    <div style="width: 100%; height: 100%">
      <router-outlet />
    </div>
  `,
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class App {}
