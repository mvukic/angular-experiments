import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'lazy-cmp',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <fieldset>
      <legend>Lazy loaded component</legend>
      <button (click)="counter.set(counter() + 1)">+ +</button>
      <button (click)="counter.set(counter() - 1)">- 1</button>
      <span>{{ counter() }}</span>
      <fieldset>
        <legend>Projected nodes</legend>
        <ng-content select="footer" />
      </fieldset>
    </fieldset>
  `,
})
export class LazyComponent {
  counter = signal(0);
}
