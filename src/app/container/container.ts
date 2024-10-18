import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AppContainer, AppContainerSidenavPosition } from './app-container';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'container-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        height: 100%;
        border: 1px solid saddlebrown;
        overflow-y: scroll;
      }
      [content] {
        height: 100%;
        border: 1px solid blue;
        overflow-y: scroll;
      }
      [footer] {
        border: 1px solid olive;
      }
    `,
  ],
  template: `
    <app-container [position]="position()">
      <div header>Header</div>

      <div subHeader>
        Sub header
        <input type="radio" [checked]="position() === 'start'" name="sidenavPosition" id="start" (click)="position.set('start')" />
        <label for="start">Start</label>
        <input type="radio" [checked]="position() === 'end'" name="sidenavPosition" id="end" (click)="position.set('end')" />
        <label for="end">End</label>
      </div>

      <div sidenav>
        <div *ngFor="let item of items">{{ item }}</div>
      </div>

      <div content>
        <div *ngFor="let item of items">{{ item }}</div>
      </div>

      <div footer>Footer</div>
    </app-container>
  `,
})
export default class ContainerExample {
  readonly position = signal<AppContainerSidenavPosition>('start');
  items = Array.from({ length: 25 }).map((_, i) => `Item ${i + 1}`);
}
