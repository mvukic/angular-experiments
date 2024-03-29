import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'bind-inputs',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>From data: {{ a() }}</p>
    <p>From path: {{ b() }}</p>
    <p>From query: {{ c() }}</p>
    <p>From resolve: {{ d() }}</p>
  `,
})
export default class BindInputsComponents {
  a = input('');
  b = input('');
  c = input('');
  d = input('');
}
