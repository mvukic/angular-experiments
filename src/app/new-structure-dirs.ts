import { Component, signal } from '@angular/core';

@Component({
  selector: 'new-str-dirs',
  standalone: true,
  template: `
    <fieldset>
      <legend>For loop</legend>
      <ul>
        <!-- @for (item of items(); track item) {
        <li>{{ item }}</li>
        } -->
      </ul>
    </fieldset>
    <fieldset>
      <legend>Deferred loading</legend>
      @defer(on hover) {
      <div>Defer block</div>
      } @loading {
      <div>Loading block</div>
      } @placeholder {
      <div>Placeholder block</div>
      }
    </fieldset>
  `,
})
export default class NewStructureDirs {
  #values = [1, 2, 3, 4, 5];
  items = signal([...this.#values]);

  set() {
    this.items.set([...this.#values]);
  }

  clear() {
    this.items.set([]);
  }
}
