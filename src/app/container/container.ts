import { Component } from '@angular/core';
import { ContainerCmp } from './container.cmp';

@Component({
  selector: 'container-example',
  standalone: true,
  imports: [ContainerCmp],
  styles: [
    `
      :host {
        margin: 10px;
        display: flex;
        flex-direction: column;
        height: 100%;
        [header] {
          border: 1px solid green;
        }
        [subHeader] {
          border: 1px solid darkorchid;
        }
        [sidenav] {
          border: 1px solid saddlebrown;
          height: 100%;
        }
        [content] {
          border: 1px solid blue;
          height: 100%;
          margin: 5px;
        }
      }
    `,
  ],
  template: `
    <container-cmp>
      <div header>Header</div>
      <div sidenav>Sidenav</div>
      <div subHeader>Sub header</div>
      <div content>Content</div>
    </container-cmp>
  `,
})
export default class ContainerExample {}
