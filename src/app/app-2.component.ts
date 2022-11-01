import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
        <h1>App component 2 - width < 1000</h1>
        <ul>
            <li>
                <a [routerLink]="['params-and-state']" [queryParams]="{ debug: 1 }" [state]="{ debug: 1 }">Params and state</a>
            </li>
            <li>
                <a [routerLink]="['templated-ng-for']">Templated ng for</a>
            </li>
            <li>
                <a [routerLink]="['lazy-load-component']">Lazy load component</a>
            </li>
            <li>
                <a [routerLink]="['api-calls']">API calls</a>
            </li>
            <li>
                <a [routerLink]="['dynamic-component']">Dynamic component</a>
            </li>
            <li>
                <a [routerLink]="['host-directives']">Host directives</a>
            </li>
        </ul>
        <router-outlet></router-outlet>
    `,
    standalone: true,
    imports: [RouterOutlet, RouterLink],
})
export class App2Component {}
