import { Component, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'input-mappers-cmp',
  standalone: true,
  template: `is disabled {{ disabled1 }}, {{ disabled2 }}`,
})
export class InputMapperCmp {
  @Input({ transform: coerceBooleanProperty })
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
  selector: 'input-mappers',
  standalone: true,
  imports: [InputMapperCmp],
  template: `
    <input-mappers-cmp /> <br />
    <input-mappers-cmp disabled1 disabled2 /> <br />
    <input-mappers-cmp [disabled1]="true" [disabled2]="true" /> <br />
    <input-mappers-cmp [disabled1]="false" [disabled2]="false" /> <br />
    <input-mappers-cmp disabled1="true" disabled2="true" /> <br />
    <input-mappers-cmp disabled1="false" disabled2="false" /> <br />
  `,
})
export default class InputMappers {}
