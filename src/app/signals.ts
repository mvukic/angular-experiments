import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, signal, effect, OnInit, OnDestroy, inject, Input, EffectCleanupFn } from '@angular/core';

@Component({
  selector: 'demo-signals',
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
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Signals {
  first = signal(localStorage.getItem('first') ?? '');
  last = signal(localStorage.getItem('last') ?? '');
  full = computed(() => `${this.first()} ${this.last()}`);

  constructor() {
    effect(() => {
        localStorage.setItem('first', this.first())
        return () => console.log('Cleaning effect 1');
    });
    effect(() => {
        localStorage.setItem('last', this.last())
        return () => console.log('Cleaning effect 1');
    });
  }

}
