import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lazy-4',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3>lazy4</h3>
    <button (click)="counter = counter + 1">++</button> <br />
    {{ counter }} <br />
    <ng-content select="footer"></ng-content>
  `,
})
export class LazyComponent {
  counter = 0;
}
