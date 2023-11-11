import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '[customSelector]',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div>custom selector</div>`,
})
export class CustomSelectorComponent {}

@Component({
  selector: 'selector-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CustomSelectorComponent],
  template: ` <span customSelector></span> `,
})
export default class SelectorComponent {}
