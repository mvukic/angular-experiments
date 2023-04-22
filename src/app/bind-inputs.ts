import { Component, Input } from '@angular/core';

@Component({
  selector: 'bind-inputs',
  standalone: true,
  template: `
    <p>From data: {{ a }}</p>
    <p>From path: {{ b }}</p>
    <p>From query: {{ c }}</p>
    <p>From resolve: {{ d }}</p>
  `,
})
export default class BindInputsComponents {
  @Input()
  a?: string = '';

  @Input()
  b?: string;

  @Input()
  c?: string;

  @Input({ required: true })
  d: string = '';
}
