import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'input-mappers-cmp1',
  standalone: true,
  template: `is disabled {{ disabled1 }}, {{ disabled2 }}`,
})
export class InputMapperCmp1 {
  @Input({ transform: booleanAttribute })
  disabled1: boolean = false;

  #disabled2 = false;

  @Input()
  set disabled2(value: BooleanInput) {
    this.#disabled2 = coerceBooleanProperty(value);
  }
  get disabled2(): boolean {
    return this.#disabled2;
  }
}

@Component({
  selector: 'input-mappers-cmp2',
  standalone: true,
  template: `number is {{ size }}`,
})
export class InputMapperCmp2 {
  @Input({ transform: numberAttribute })
  size = 0;
}

@Component({
  selector: 'input-mappers',
  standalone: true,
  imports: [InputMapperCmp1, InputMapperCmp2],
  template: `
    <input-mappers-cmp1 /> <br />
    <input-mappers-cmp1 disabled1 disabled2 /> <br />
    <input-mappers-cmp1 [disabled1]="true" [disabled2]="true" /> <br />
    <input-mappers-cmp1 [disabled1]="false" [disabled2]="false" /> <br />
    <input-mappers-cmp1 disabled1="true" disabled2="true" /> <br />
    <input-mappers-cmp1 disabled1="false" disabled2="false" /> <br />
    <input-mappers-cmp2 size="10" /> <br />
    <input-mappers-cmp2 [size]="10" /> <br />
  `,
})
export default class InputMappers {}
