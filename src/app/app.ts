import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppContainer } from './container/app-container';
import { AppExpandable } from './expandable/app-expandable.component';
import { AppExpandableTrigger } from './expandable/expandable-trigger.cmp';
import SidenavCmp from './sidenav';

@Component({
  selector: 'header-cmp',
  standalone: true,
  styles: [
    `
      :host {
        display: flex;
        gap: 5px;
        padding-left: 5px;
        background-color: lightblue;
      }
    `,
  ],
  template: `This is a header`,
})
export class HeaderCmp {}

@Component({
  selector: 'sub-header-cmp',
  standalone: true,
  styles: [
    `
      :host {
        display: flex;
        gap: 5px;
        padding-left: 10px;
      }
    `,
  ],
  template: `<ng-content /> This is a sub header`,
})
export class SubHeaderCmp {}

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    AppContainer,
    HeaderCmp,
    SidenavCmp,
    AppExpandable,
    AppExpandableTrigger,
    SubHeaderCmp,
  ],
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
  template: `
    <app-container>
      <header-cmp header />
      <app-expandable withoutTrigger [expanded]="expanded()" sidenav>
        <router-outlet name="outlet-sidenav" />
        <sidenav-cmp />
      </app-expandable>
      <sub-header-cmp subHeader>
        <app-expandable-trigger
          [value]="expanded()"
          (valueChange)="expanded.set($event)"
          visibilityIcon="menu_open"
          invisibilityIcon="menu"
        />
      </sub-header-cmp>
      <router-outlet content />
      <router-outlet footer name="outlet-footer" />
    </app-container>
  `,
})
export default class App {
  readonly expanded = signal(false);
}
