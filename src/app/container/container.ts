import { Component } from '@angular/core';
import { AppContainer } from './app-container';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'container-example',
  standalone: true,
  imports: [AppContainer, NgForOf],
  styles: [
    `
      [header] {
        border: 1px solid green;
      }
      [subHeader] {
        border: 1px solid darkorchid;
      }
      [sidenav] {
        border: 1px solid saddlebrown;
        height: 100%;
        overflow: scroll;
      }
      [content] {
        border: 1px solid blue;
        height: 100%;
        overflow: scroll;
      }
    `,
  ],
  template: `
    <app-container>
      <div header>Header</div>

      <div subHeader>Sub header</div>

      <div sidenav>
        <div *ngFor="let item of items">{{ item }}</div>
      </div>

      <div content>
        <div *ngFor="let item of items">{{ item }}</div>
      </div>
    </app-container>
  `,
})
export default class ContainerExample {
  items = Array.from({ length: 25 }).map((_, i) => `Item ${i + 1}`);
}
