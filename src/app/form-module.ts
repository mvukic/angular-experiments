import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe, NgForOf } from '@angular/common';

export type Box = {
  id: string;
  type: BoxType;
  name: string;
  opened: boolean;
  items: {
    id: string;
    name: string;
  }[];
};

// @Component({
//   selector: 'form-items',
//   standalone: true,
//   imports: [FormsModule, NgForOf],
//   template: `
//     <div ngModelGroup="formGroup" #itemsFormGroup="NgModelGroup" style="display: flex; flex-direction: column; gap: 5px">
//       <div *ngFor="let item of items">
//         <span>Id: {{ item.id }} </span>
//         <input [(ngModel)]="item.name" [name]="'itemName' + item.id" required />
//       </div>
//     </div>
//   `,
// })
// export class ItemForm {
//   formGroup = { items: [] };
//   @Input()
//   items: { id: string; name: string }[] = [];
// }

export enum BoxType {
  TYPE1 = 'TYPE1',
  TYPE2 = 'TYPE2',
}

@Component({
  selector: 'form-module-example',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, NgForOf, JsonPipe],
  template: `
    <fieldset>
      <legend>Box</legend>
      <form #f="ngForm">
        <span>Id: {{ box.id }} </span>
        <input [(ngModel)]="box.name" name="boxName" />
        <select id="select" name="formSelect" [(ngModel)]="box.type">
          <option [value]="BoxType.TYPE1">Type 1</option>
          <option [value]="BoxType.TYPE2">Type 2</option>
        </select>
        <input
          type="checkbox"
          [id]="'formCheckbox-' + box.id"
          [name]="'formCheckbox-' + box.id"
          [(ngModel)]="box.opened"
        />
        <label [for]="'formCheckbox-' + box.id">Opened</label>
      </form>
      <fieldset>
        <legend>Items</legend>
        <button (click)="addItem()">Add</button>
        <div style="display: flex; flex-direction: column; gap: 5px">
          <div *ngFor="let item of box.items">
            <span>Id: {{ item.id }} </span>
            <input
              [(ngModel)]="item.name"
              [name]="'itemName' + item.id"
              required
            />
          </div>
        </div>
      </fieldset>
    </fieldset>
    <span>
      {{ f.value | json }}
    </span>
  `,
})
export default class FormModuleExample {
  _box: Box = {
    id: '12345',
    name: 'Box 1',
    opened: true,
    type: BoxType.TYPE1,
    items: [
      { id: '1', name: 'Name 1' },
      { id: '2', name: 'Name 2' },
      { id: '3', name: 'Name 3' },
      { id: '4', name: 'Name 4' },
    ],
  };

  /* The object might come from the outside */
  box = this._box;
  BoxType = BoxType;

  addItem() {
    this.box.items.push({ id: '5', name: 'item 5' });
  }
}
