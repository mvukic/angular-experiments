import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'lazy-4',
    template: `
        <h3>lazy4</h3>
        <button (click)="counter = counter + 1">++</button> <br />
        {{ counter }} <br />
        <ng-content select="footer"></ng-content>
    `,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyComponent {
    counter = 0;
}
