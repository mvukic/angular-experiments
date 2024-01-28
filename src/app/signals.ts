import { booleanAttribute, ChangeDetectionStrategy, Component, computed, effect, signal, input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'signal-cmp',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    Optional: {{ inputOptional() }} <br />
    Default: {{ inputDefault() }} <br />
    Alias: {{ inputAlias() }} <br />
    Transform: {{ inputTransform() }} <br />
    Required: {{ inputRequired() }} <br />
  `,
})
export class SignalCmp implements ControlValueAccessor {
  inputOptional = input<string>();
  inputDefault = input('initialValue');
  inputAlias = input('initialValue', { alias: 'inputAlias' });
  inputTransform = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });
  inputRequired = input.required<string>();

  value = input<string>();
  _value = signal<string | undefined>(undefined);

  constructor() {
    effect(
      () => {
        this._value.set(this.value());
      },
      { allowSignalWrites: true },
    );
  }

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  writeValue(value: string): void {
    this._value.set(value);
  }
}

@Component({
  selector: 'demo-signals',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SignalCmp],
  template: `
    <h3>Signals</h3>
    <fieldset>
      <legend>First and last name</legend>
      <label for="first">First</label>
      <input type="text" name="first" id="first" (keyup)="first.set($any($event.target).value)" [value]="first()" />
      <label for="last">Last</label>
      <input type="text" name="last" id="last" (keyup)="last.set($any($event.target).value)" [value]="last()" />
    </fieldset>
    <fieldset>
      <legend>Full name</legend>
      <span>{{ full() }}</span>
    </fieldset>
    <br />
    <signal-cmp
      inputOptional="optional value"
      inputDefault="optional value"
      inputAlias="optional value"
      inputTransform="optional value"
      inputRequired="optional value"
    />
  `,
})
export default class Signals {
  first = signal(localStorage.getItem('first') ?? '');
  last = signal(localStorage.getItem('last') ?? '');
  full = computed(() => `${this.first()} ${this.last()}`);

  constructor() {
    effect(() => {
      localStorage.setItem('first', this.first());
    });
    effect(() => {
      localStorage.setItem('last', this.last());
      return () => console.log('Cleaning effect 1');
    });
  }
}
