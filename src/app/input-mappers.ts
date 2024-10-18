import { JsonPipe } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, input, numberAttribute } from '@angular/core';

@Component({
  selector: 'input-mappers-boolean',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `is disabled {{ value() }}`,
})
export class InputMapperBoolean {
  value = input(false, { transform: booleanAttribute });
}

@Component({
  selector: 'input-mappers-number',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `number is {{ value() }}`,
})
export class InputMapperNumber {
  value = input(0, { transform: numberAttribute });
}

function copy(value: Record<string, any>): {
  original: Record<string, any>;
  copy: Record<string, any>;
} {
  return { original: value, copy: structuredClone(value) };
}

@Component({
  selector: 'input-mappers-object',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <span>Original is {{ value().original | json }}</span> <br />
    <span>Copy is {{ value().copy | json }}</span> <br />
    <span>Equal == {{ value().original == value().copy }}</span> <br />
    <span>Equal === {{ value().original === value().copy }}</span>
  `,
})
export class InputMapperObject {
  value = input.required<{ original: Record<string, any>; copy: Record<string, any> }, Record<string, any>>({ transform: copy });
}

@Component({
  selector: 'input-mappers',
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
