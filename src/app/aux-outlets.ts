import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'aux-outlet-cmp-1',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `Aux Outlet Cpm 1`,
})
export class AuxOutletCmp1 {}

@Component({
  selector: 'aux-outlet-cmp-2',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `Aux Outlet Cpm 2`,
})
export class AuxOutletCmp2 {}

@Component({
  selector: 'aux-outlet-cmp-3',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `Aux Outlet Cpm 3`,
})
export class AuxOutletCmp3 {}

@Component({
  selector: 'aux-outlets',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styles: [
    `
      .links {
        display: flex;
        gap: 5px;
        justify-content: space-around;
      }
      .active {
        color: darkgreen;
        text-decoration-color: red;
        text-underline-style: dash;
      }
    `,
  ],
  template: `
    <div class="links">
      <a [routerLink]="cmp1" routerLinkActive="active">Comp 1</a>
      <a [routerLink]="cmp2" routerLinkActive="active">Comp 2</a>
      <a [routerLink]="cmp3" routerLinkActive="active">Comp 3</a>
    </div>
    <fieldset>
      <legend>Outlet 1</legend>
      <router-outlet name="outlet-sidenav-1" />
    </fieldset>
    <fieldset>
      <legend>Outlet 2</legend>
      <router-outlet name="outlet-sidenav-2" />
    </fieldset>
  `,
})
export default class AuxOutlets {
  cmp1 = [{ outlets: { 'outlet-sidenav-1': ['cmp-1'] } }];
  cmp2 = [{ outlets: { 'outlet-sidenav-2': ['cmp-2'] } }];
  cmp3 = [{ outlets: { 'outlet-footer': ['cmp-3'] } }];
}
