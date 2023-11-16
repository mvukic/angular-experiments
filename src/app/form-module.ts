import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe, NgForOf } from '@angular/common';

export enum BoxType {
  TYPE1 = 'TYPE1',
  TYPE2 = 'TYPE2',
}

export type Box = {
  id: string;
  type: BoxType;
  name: string;
  opened: boolean;
  items: {
    id: number;
    name: string;
  }[];
};

@Component({
  selector: 'form-box',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, NgForOf, JsonPipe],
  template: `
    <form #f="ngForm">
      <fieldset>
        <legend>Box</legend>
        <span>Id: {{ box.id }} </span>
        <input [(ngModel)]="box.name" name="name" />
        <select id="select" name="type" [(ngModel)]="box.type">
          <option [value]="BoxType.TYPE1">Type 1</option>
          <option [value]="BoxType.TYPE2">Type 2</option>
        </select>
        <input
          type="checkbox"
          id="opened"
          name="opened"
          [(ngModel)]="box.opened"
        />
        <label for="opened">Opened</label>
        <fieldset>
          <legend>Items</legend>
          <button (click)="addItem()">Add</button>
          <div
            style="display: flex; flex-direction: column; gap: 5px"
            ngModelGroup="items"
          >
            @for (item of box.items; track item.id) {
              <div>
                <span>Id: {{ item.id }} </span>
                <input
                  [(ngModel)]="item.name"
                  [name]="'item' + item.id"
                  required
                />
                <button (click)="remove($index)">Remove</button>
              </div>
            }
          </div>
        </fieldset>
      </fieldset>
    </form>
    <div style="display: flex;">
      <div>
        <span>Valid: {{ f.valid }}</span> <br />
        <span>{{ f.errors | json }}</span> <br />
        <pre>{{ f.value | json }}</pre>
      </div>
      <pre>{{ box | json }}</pre>
    </div>
  `,
})
export class BoxForm {
  @Input({ required: true, transform: copyAttribute })
  box!: Box;

  BoxType = BoxType;

  addItem() {
    const id = (this.box.items.at(-1)?.id ?? 0) + 1;
    this.box.items.push({ id, name: `item ${id}` });
  }

  remove(index: number) {
    this.box.items.splice(index, 1);
  }
}

function copyAttribute(value: { [key: string]: any }): Record<string, any> {
  return structuredClone(value);
}

@Component({
  selector: 'form-module-example',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BoxForm],
  template: ` <form-box [box]="_box" /> `,
})
export default class FormModuleExample {
  _box: Box = {
    id: '12345',
    name: 'Box 1',
    opened: true,
    type: BoxType.TYPE1,
    items: [
      { id: 1, name: 'Name 1' },
      { id: 2, name: 'Name 2' },
      { id: 3, name: 'Name 3' },
      { id: 4, name: 'Name 4' },
    ],
  };
}
