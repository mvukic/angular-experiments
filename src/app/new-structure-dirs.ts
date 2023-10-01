import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'new-str-dirs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <legend>Deferred loading</legend>
    @defer(on hover) {
    <div>Defer block</div>
    } @loading {
    <div>Loading block</div>
    } @placeholder {
    <div>Placeholder block</div>
    }
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
