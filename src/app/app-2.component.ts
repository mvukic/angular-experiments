import { Component } from '@angular/core'
import { RouterLinkWithHref, RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-root',
    template: `
        <h1>App component 2 - width < 1000</h1>
        <ul>
            <li>
                <a [routerLink]="['lazy1']" [queryParams]="{ debug: 1 }" [state]="{ debug: 1 }">Lazy 1</a>
            </li>
            <li>
                <a [routerLink]="['lazy2']" [queryParams]="{ debug: 2 }" [state]="{ debug: 2 }">Lazy 2</a>
            </li>
            <li>
                <a [routerLink]="['lazy4']" [queryParams]="{ debug: 4 }" [state]="{ debug: 4 }">Lazy 4</a>
            </li>
        </ul>
        <router-outlet></router-outlet>
    `,
    standalone: true,
    imports: [RouterOutlet, RouterLinkWithHref],
})
export class App2Component {}
