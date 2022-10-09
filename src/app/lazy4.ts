import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { OPTIONS_TOKEN } from './tokens'

@Component({
    selector: 'lazy-4',
    template: `
        <h3>lazy3</h3>
        <br />
        Options: {{ options.option }}
        <br />
        <button (click)="counter = counter + 1">++</button> <br />
        {{ counter }} <br />
        <ng-content select="footer"></ng-content>
    `,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lazy4 {
    options = inject(OPTIONS_TOKEN)
    counter = 0
}
