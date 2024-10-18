import { Component } from '@angular/core';
import { AppDrawer, AppDrawerContainer, AppDrawerContent } from './app-drawer-container';

@Component({
  selector: 'drawer-example',
  imports: [AppDrawerContainer, AppDrawerContent, AppDrawer],
  template: `
    <app-drawer-container>
      <app-drawer #appDrawer> Drawer sidenav content </app-drawer>
      <app-drawer-content>
        Drawer content
        <button (click)="appDrawer.toggle()">Toggle</button>
      </app-drawer-content>
    </app-drawer-container>
  `,
})
export class DrawerExample {}
