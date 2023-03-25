import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, signal, effect, OnInit, OnDestroy, inject, Input } from '@angular/core';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export default class Signals implements OnDestroy {
  first = signal(localStorage.getItem('first') ?? '');
  last = signal(localStorage.getItem('last') ?? '');
  full = computed(() => `${this.first()} ${this.last()}`);

  #e1 = effect(() => localStorage.setItem('first', this.first()));
  #e2 = effect(() => localStorage.setItem('last', this.last()));

  ngOnDestroy(): void {
    this.#e1.destroy();
    this.#e2.destroy();
  }
}
