import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe, NgForOf } from '@angular/common';

export function cloneTransform(value: unknown) {
  return structuredClone(value);
}

export type Box = {
  id: string;
  name: string;
  items: {
    id: string;
    name: string;
  }[];
};

@Component({
  selector: 'form-module-example',
  standalone: true,
  imports: [FormsModule, NgForOf, JsonPipe],
  template: `
    <fieldset>
      <legend>Box</legend>
      <form #boxForm="ngForm">
        <input [value]="box.id" name="id" />
        <input [(ngModel)]="box.name" name="name" />
      </form>
      <fieldset>
        <legend>Items</legend>
        <div style="display: flex; flex-direction: column; gap: 5px">
          <div *ngFor="let item of box.items">
            <form #form="ngForm"></form>
            <input [value]="item.id" name="id" />
            <input [(ngModel)]="item.name" name="name" required />
          </div>
        </div>
      </fieldset>
    </fieldset>
    {{ _box | json }}
  `,
})
export default class FormModuleExample {
  _box: Box = {
    id: '12345',
    name: 'Box 1',
    items: [
      { id: '1', name: 'Name 1' },
      { id: '2', name: 'Name 2' },
      { id: '3', name: 'Name 3' },
      { id: '4', name: 'Name 4' },
    ],
  };

  /* The object might come from the outside */
  @Input({ required: true, transform: cloneTransform })
  box = this._box;
}
