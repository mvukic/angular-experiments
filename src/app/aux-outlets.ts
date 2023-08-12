import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'aux-outlet-cmp-1',
  standalone: true,
  template: `Aux Outlet Cpm 1`,
})
export class AuxOutletCmp1 {}

@Component({
  selector: 'aux-outlet-cmp-2',
  standalone: true,
  template: `Aux Outlet Cpm 2`,
})
export class AuxOutletCmp2 {}

@Component({
  selector: 'aux-outlets',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <a [routerLink]="cmp1">Comp 1 is shown in sidenav</a> <br />
    <a [routerLink]="cmp2">Comp 2 is shown in sidenav</a>
  `,
})
export default class AuxOutlets {

    cmp1 = [{ outlets: { 'outlet-sidenav': ['cmp-1'] } }];
    cmp2 = [{ outlets: { 'outlet-sidenav': ['cmmp-2'] } }];
}
