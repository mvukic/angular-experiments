import { JsonPipe } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  Input,
  numberAttribute,
} from '@angular/core';

@Component({
  selector: 'input-mappers-boolean',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `is disabled {{ value }}`,
})
export class InputMapperBoolean {
  @Input({ transform: booleanAttribute })
  value: boolean = false;
}

@Component({
  selector: 'input-mappers-number',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `number is {{ value }}`,
})
export class InputMapperNumber {
  @Input({ transform: numberAttribute })
  value: number = 0;
}

function copy(value: { [key: string]: any }): {
  original: Record<string, any>;
  copy: Record<string, any>;
} {
  return { original: value, copy: structuredClone(value) };
}

@Component({
  selector: 'input-mappers-object',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <span>Original is {{ value.original | json }}</span> <br />
    <span>Copy is {{ value.copy | json }}</span> <br />
    <span>Equal ==: {{ value.original == value.copy }}</span> <br />
    <span>Equal ===: {{ value.original === value.copy }}</span>
  `,
})
export class InputMapperObject {
  @Input({ required: true, transform: copy })
  value!: { original: Record<string, any>; copy: Record<string, any> };
}

@Component({
  selector: 'input-mappers',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InputMapperBoolean, InputMapperNumber, InputMapperObject],
  template: `
    <input-mappers-boolean /> <br />
    <input-mappers-boolean value /> <br />
    <input-mappers-boolean value="true" /> <br />
    <input-mappers-boolean value="false" /> <br />
    <input-mappers-number value="10" /> <br />
    <input-mappers-number [value]="10" /> <br />
    <input-mappers-number [value]="10" /> <br />
    <input-mappers-object [value]="obj" /> <br />
  `,
})
export default class InputMappers {
  obj = { name: 'Test' };
}
