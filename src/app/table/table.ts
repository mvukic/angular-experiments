import { ChangeDetectionStrategy, Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';

@Component({
  selector: 'app-sort-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(click)': 'toggle()',
  },
  styles: [
    `
      span.blurred {
        opacity: 0.2;
        &:hover {
          opacity: 0.7;
        }
      }
    `,
  ],
  template: `<span class="material-icons" [class.blurred]="!active">sort</span> `,
})
export class SortTrigger {
  @Input({ required: true })
  active = false;

  @Output()
  activeChange = new EventEmitter<boolean>();

  toggle() {
    this.activeChange.next(!this.active);
  }
}

@Component({
  selector: 'app-filter-column',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<input type="text" (keyup)="toggle($event)" />`,
})
export class FilterColumnInput {
  @Input()
  query!: string;

  @Output()
  queryChange = new EventEmitter<string>();

  toggle({ target }: KeyboardEvent) {
    this.queryChange.next((target as HTMLInputElement).value);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'table-example',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CdkTableModule, SortTrigger, FilterColumnInput],
  styles: [
    `
      :host {
        overflow-y: hidden;
      }
      table {
        width: 100%;
        overflow-y: scroll;
      }
    `,
  ],
  template: `
    <table cdk-table recycleRows fixedLayout [dataSource]="vm()">
      <!-- Position Column -->
      <ng-container cdkColumnDef="position">
        <th cdk-header-cell *cdkHeaderCellDef>
          No.
          <app-sort-icon [active]="sort() === 'position'" (activeChange)="sort.set('position')" />
          <br />
          <app-filter-column [query]="filterByColumn()['position']" />
        </th>
        <td cdk-cell *cdkCellDef="let element">{{ element.position }}</td>
      </ng-container>

      <!-- Name Column -->
      <ng-container cdkColumnDef="name">
        <th cdk-header-cell *cdkHeaderCellDef>
          Name
          <app-sort-icon [active]="sort() === 'name'" (activeChange)="sort.set('name')" />
          <br />
          <app-filter-column [query]="filterByColumn()['name']" />
        </th>
        <td cdk-cell *cdkCellDef="let element">{{ element.name }}</td>
      </ng-container>

      <!-- Weight Column -->
      <ng-container cdkColumnDef="weight">
        <th cdk-header-cell *cdkHeaderCellDef>
          Weight
          <app-sort-icon [active]="sort() === 'weight'" (activeChange)="sort.set('weight')" />
        </th>
        <td cdk-cell *cdkCellDef="let element">{{ element.weight }}</td>
      </ng-container>

      <!-- Symbol Column -->
      <ng-container cdkColumnDef="symbol">
        <th cdk-header-cell *cdkHeaderCellDef>
          Symbol
          <app-sort-icon [active]="sort() === 'symbol'" (activeChange)="sort.set('symbol')" />
        </th>
        <td cdk-cell *cdkCellDef="let element">{{ element.symbol }}</td>
      </ng-container>

      <tr cdk-header-row *cdkHeaderRowDef="columns"></tr>
      <tr cdk-row *cdkRowDef="let row; columns: columns"></tr>
    </table>
  `,
})
export default class Table {
  columns = ['position', 'name', 'weight', 'symbol'] as const;

  data = signal(DATA);
  sort = signal<'position' | 'name' | 'weight' | 'symbol'>('name');
  filterByColumn = signal({
    position: '',
    name: '',
    weight: '',
    symbol: '',
  });

  vm = computed(() => {
    return this.data()
      .slice()
      .sort((a, b) => compare(a, b, this.sort()));
  });
}

const DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

function compare(a: PeriodicElement, b: PeriodicElement, sortBy: 'position' | 'name' | 'weight' | 'symbol'): number {
  if (sortBy === 'weight' || sortBy === 'position') {
    return a[sortBy] - b[sortBy];
  }
  return a[sortBy].localeCompare(b[sortBy]);
}
