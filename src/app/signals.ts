import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
  ɵinput as input,
  booleanAttribute,
} from '@angular/core';

@Component({
  selector: 'demo-signals',
  standalone: true,
  styles: `:host { view-transition-name: count; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3>Signals</h3>
    <fieldset>
      <legend>First and last name</legend>
      <label for="first">First</label>
      <input
        type="text"
        name="first"
        id="first"
        (keyup)="first.set($any($event.target).value)"
        [value]="first()"
      />
      <label for="last">Last</label>
      <input
        type="text"
        name="last"
        id="last"
        (keyup)="last.set($any($event.target).value)"
        [value]="last()"
      />
    </fieldset>
    <fieldset>
      <legend>Full name</legend>
      <span>{{ full() }}</span>
    </fieldset>
  `,
})
export default class Signals {
  inputOptional = input<string>();
  inputDefault = input('initialValue');
  inputAlias = input('initialValue', { alias: 'inputAlias' });
  inputTransform = input<boolean, any>(false, { transform: booleanAttribute } );
  inputRequired = input.required<string>();

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
