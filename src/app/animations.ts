import { trigger, transition, style, animate } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

const showHide = trigger('fadeIn', [
  transition(':enter', [style({ opacity: 0 }), animate('.2s ease-out', style({ opacity: 1 }))]),
  transition(':leave', [animate('.2s ease-in', style({ opacity: 0 }))]),
]);

@Component({
  selector: 'animation-comp',
  standalone: true,
  imports: [NgIf],
  template: `
    <button (click)="show = !show">Toggle</button>
    <div @fadeIn *ngIf="show">Some text</div>
  `,
  animations: [showHide],
})
export default class AnimationComponent {
  show = false;
}
