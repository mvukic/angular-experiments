import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

const showHide = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('.2s ease-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('.2s ease-in', style({ opacity: 0 }))]),
]);

@Component({
  selector: 'animation-comp',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [showHide],
  template: `
    <button (click)="show.set(!show())">Toggle</button>
    @if (show()) {
      <div @fadeIn>Some text</div>
    }
  `,
})
export default class AnimationComponent {
  show = signal(false);
}
