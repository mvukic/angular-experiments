import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { AppSortIcon } from './app-sort-icon';

export type SortDirection = 1 | -1;
export const columns = [
  'flag',
  'position',
  'name',
  'weight',
  'symbol',
] as const;
export type Attributes = (typeof columns)[number];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  flag: boolean;
}

@Component({
  selector: 'table-example',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CdkTableModule, AppSortIcon],
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
    <div>
      Sort by: <b>{{ sort() }}</b> Sort direction: <b>{{ sortDirection() }}</b>
    </div>
    <table cdk-table recycleRows fixedLayout [dataSource]="vm()">
      <!-- Position Column -->
      <ng-container cdkColumnDef="flag">
        <th cdk-header-cell *cdkHeaderCellDef>
          Flag
          <app-sort-icon
            [active]="sort() === 'flag'"
            (activeChange)="sort.set('flag')"
            (directionChange)="sortDirection.set($event)"
          />
        </th>
        <td cdk-cell *cdkCellDef="let element">{{ element.flag }}</td>
      </ng-container>
      <ng-container cdkColumnDef="position">
        <th cdk-header-cell *cdkHeaderCellDef>
          No.
          <app-sort-icon
            [active]="sort() === 'position'"
            (activeChange)="sort.set('position')"
            (directionChange)="sortDirection.set($event)"
          />
        </th>
        <td cdk-cell *cdkCellDef="let element">{{ element.position }}</td>
      </ng-container>

      <!-- Name Column -->
      <ng-container cdkColumnDef="name">
        <th cdk-header-cell *cdkHeaderCellDef>
          Name
          <app-sort-icon
            name="name"
            [active]="sort() === 'name'"
            (activeChange)="sort.set('name')"
            (directionChange)="sortDirection.set($event)"
          />
        </th>
        <td cdk-cell *cdkCellDef="let element">{{ element.name }}</td>
      </ng-container>

      <!-- Weight Column -->
      <ng-container cdkColumnDef="weight">
        <th cdk-header-cell *cdkHeaderCellDef>
          Weight
          <app-sort-icon
            [active]="sort() === 'weight'"
            (activeChange)="sort.set('weight')"
            (directionChange)="sortDirection.set($event)"
          />
        </th>
        <td cdk-cell *cdkCellDef="let element">{{ element.weight }}</td>
      </ng-container>

      <!-- Symbol Column -->
      <ng-container cdkColumnDef="symbol">
        <th cdk-header-cell *cdkHeaderCellDef>
          Symbol
          <app-sort-icon
            [active]="sort() === 'symbol'"
            (activeChange)="sort.set('symbol')"
            (directionChange)="sortDirection.set($event)"
          />
        </th>
        <td cdk-cell *cdkCellDef="let element">{{ element.symbol }}</td>
      </ng-container>

      <tr cdk-header-row *cdkHeaderRowDef="columns"></tr>
      <tr cdk-row *cdkRowDef="let row; columns: columns"></tr>
    </table>
  `,
})
export default class Table {
  columns = columns;

  data = signal(DATA);
  sort = signal<Attributes>('name');
  sortDirection = signal<SortDirection>(1);

  vm = computed(() => {
    const data = this.data();
    const sortBy = this.sort();
    const sortDirection = this.sortDirection();
    return data.slice().sort((a, b) => compare(a, b, sortBy, sortDirection));
  });
}

const DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', flag: false },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', flag: true },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', flag: false },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', flag: false },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', flag: false },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', flag: true },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', flag: true },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', flag: true },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', flag: false },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', flag: true },
];

function compare(
  a: PeriodicElement,
  b: PeriodicElement,
  sortBy: Attributes,
  direction: SortDirection,
): number {
  if (sortBy === 'weight' || sortBy === 'position') {
    return direction * (a[sortBy] - b[sortBy]);
  }
  if (sortBy === 'flag') {
    return direction * (Number(b[sortBy]) - Number(a[sortBy]));
  }
  return direction * a[sortBy].localeCompare(b[sortBy]);
}
