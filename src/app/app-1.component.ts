import { Component } from '@angular/core'
import { RouterLinkWithHref, RouterOutlet } from '@angular/router'
import { Options, OPTIONS_TOKEN, optionsFactory } from './tokens'

const app1OptionsFactory = (): Options => ({ option: 'App 1 option' })

@Component({
    selector: 'app-root',
    template: `
        <h1>App component 1 - width > 1000</h1>
        <ul>
            <li>
                <a [routerLink]="['lazy1']" [queryParams]="{ debug: 1 }" [state]="{ debug: 1 }">Lazy 1</a>
            </li>
            <li>
                <a [routerLink]="['lazy2']" [queryParams]="{ debug: 2 }" [state]="{ debug: 2 }">Lazy 2</a>
            </li>
            <li>
                <a [routerLink]="['lazy3']" [queryParams]="{ debug: 3 }" [state]="{ debug: 3 }">Lazy 3</a>
            </li>
        </ul>
        <router-outlet></router-outlet>
    `,
    standalone: true,
    imports: [RouterOutlet, RouterLinkWithHref],
    providers: [{ provide: OPTIONS_TOKEN, useFactory: app1OptionsFactory }],
})
export class App1Component {}
