import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1>Experiments</h1>
    <div class="nav">
      <div>
        <a [routerLink]="['params-and-state']" [queryParams]="{ debug: 1 }" [state]="{ debug: 1 }" routerLinkActive="active"> Params and state </a>
      </div>
      <div>
        <a [routerLink]="['templated-ng-for']" routerLinkActive="active">Templated ng for</a>
      </div>
      <div>
        <a [routerLink]="['lazy-load-component']" routerLinkActive="active">Lazy load component</a>
      </div>
      <div>
        <a [routerLink]="['api-calls']" routerLinkActive="active">API calls</a>
      </div>
      <div>
        <a [routerLink]="['dynamic-component']" routerLinkActive="active">Dynamic component</a>
      </div>
      <div>
        <a [routerLink]="['host-directives']" routerLinkActive="active">Host directives</a>
      </div>
      <div>
        <a [routerLink]="['overlay']" routerLinkActive="active">Overlay</a>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  styles: [
    `
      .nav {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        padding-bottom: 10px;
        > div {
          justify-self: center;
        }
      }
    `,
  ],
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class App {}
