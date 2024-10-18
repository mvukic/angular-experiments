import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'bind-inputs',
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
