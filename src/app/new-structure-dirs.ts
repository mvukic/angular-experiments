import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

export type AnimalType = Dog | Cat | Cow | Horse;

export interface Dog {
  id: number;
  type: 'dog';
  bark: () => string;
}

export interface Cat {
  id: number;
  type: 'cat';
  meow: () => string;
}

export interface Cow {
  id: number;
  type: 'cow';
  moo: () => string;
}

export interface Horse {
  id: number;
  type: 'horse';
  neigh: () => string;
}

@Component({
  selector: 'new-str-dirs',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `:host { view-transition-name: count; }`,
  template: `
    <fieldset>
      <legend>Deferred loading (on hover)</legend>
      @defer (on hover) {
        <div>Defer block</div>
      } @placeholder {
        <div>Placeholder block</div>
      }
    </fieldset>
    <fieldset>
      <legend>Deferred loading (on condition)</legend>
      @defer (when shouldShow()) {
        <div>Defer block</div>
      } @loading {
        <div>Loading block</div>
      } @placeholder {
        <div>Placeholder block</div>
        <div><button (click)="shouldShow.set(true)">Show</button></div>
      }
    </fieldset>
    <fieldset>
      <legend>Deferred loading (on timer 2 seconds)</legend>
      @defer (on timer(2s)) {
        <div>Defer block</div>
      } @loading {
        <div>Loading block</div>
      } @placeholder {
        <div>Placeholder block</div>
      }
    </fieldset>
    <fieldset>
      <legend>Conditionals</legend>
      @if (isTrue()) {
        <span> is true</span>
      } @else {
        <span>Is false</span>
      }
      <div><button (click)="isTrue.set(!isTrue())">Show</button></div>
    </fieldset>
    <fieldset>
      <legend>For loop</legend>
      <div>
        <button (click)="addItem()">Add</button>
        <button (click)="removeItem()">Remove</button>
        <button (click)="clearItems()">Clear</button>
        <button (click)="setItems()">Set</button>
      </div>
      @for (item of items(); track item) {
        <span>
          #{{ $index }} - (Even: {{ $even }}, First: {{ $first }}, Last:
          {{ $last }})-{{ item }}
        </span>
        <br />
      } @empty {
        <span>No items</span>
      }
    </fieldset>
  `,
})
export default class NewStructureDirs {
  shouldShow = signal(false);
  isTrue = signal(false);

  items = signal(['😊', '😎', '🎶', '😶‍🌫️']);
  animals = signal<AnimalType[]>([
    { id: 1, type: 'cat', meow: () => 'meow' },
    { id: 2, type: 'dog', bark: () => 'bark' },
    { id: 3, type: 'cow', moo: () => 'moo' },
    { id: 4, type: 'horse', neigh: () => 'neigh' },
  ]);

  isCat = (animal: AnimalType): animal is Cat => animal.type === 'cat';
  isDog = (animal: AnimalType): animal is Dog => animal.type === 'dog';
  isCow = (animal: AnimalType): animal is Cow => animal.type === 'cow';

  addItem() {
    const index = Math.floor(Math.random() * this.items().length);
    this.items.update((value) => [...value, this.items()[index]]);
  }

  removeItem() {
    const index = Math.floor(Math.random() * this.items().length);
    this.items.update((value) => {
      value.splice(index, 1);
      return value;
    });
  }

  clearItems() {
    this.items.set([]);
  }

  setItems() {
    this.items.set(['😊', '😎', '🎶', '😶‍🌫️']);
  }
}
