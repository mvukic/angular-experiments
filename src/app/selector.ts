import { Component } from '@angular/core';

@Component({
  selector: '[customSelector]',
  template: `<div>custom selector</div>`,
  standalone: true,
})
export class CustomSelectorComponent {}

@Component({
  selector: 'selector-component',
  template: ` <span customSelector></span> `,
  imports: [CustomSelectorComponent],
  standalone: true,
})
export default class SelectorComponent {}
