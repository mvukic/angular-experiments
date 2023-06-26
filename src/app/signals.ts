import { ChangeDetectionStrategy, Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'demo-signals',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
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

/**
 * This variable is used to store the signal
 * created inside `signalInputTransform` function
 * Then it is used to assign it to input property value,
 *
 * This variable should not be exported
 */
let inputSignalStore: WritableSignal<unknown>;
function signalInputTransform<T, U extends T | undefined = T | undefined>(initialValue?: U): (value: T | U) => Signal<T | U>;
function signalInputTransform<T>(initialValue: T) {
  const signalInput = signal<T>(initialValue);
  inputSignalStore = signalInput; // assigning internal signal to another variable
  return (value: T) => {
    signalInput.set(value);
    return signalInput;
  };
}

export function signalInput<Value>(): WritableSignal<Value> {
  return inputSignalStore as WritableSignal<Value>;
}
