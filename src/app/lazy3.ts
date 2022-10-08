import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'lazy-3',
    template: `
        lazy3 <br />
        <button (click)="counter = counter + 1">++</button> <br />
        {{ counter }} <br />
        <ng-content select="footer"></ng-content>
    `,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lazy3 {
    counter = 0
}
