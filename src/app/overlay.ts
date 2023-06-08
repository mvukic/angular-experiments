import { Component, computed, signal } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'expandable-cmp',
  standalone: true,
  imports: [NgIf],
  host: {},
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .content {
          height: 100%;
          overflow: hidden;
        }

        .footer {
          padding: 0 5px;
          border-top: 1px solid black;
        }
      }
    `,
  ],
  template: `
    <div class="content">
      <ng-container *ngIf="visible()">
        <ng-content />
      </ng-container>
    </div>
    <div class="footer">
      <span class="material-icons" (click)="toggle()">{{ this.icon() }}</span>
    </div>
  `,
})
export class ExpandableCmp {
  visible = signal(true);
  icon = computed(() => {
    return this.visible() ? 'visibility' : 'visibility_off';
  });

  toggle() {
    this.visible.set(!this.visible());
  }
}

@Component({
  selector: 'nav-cmp',
  standalone: true,
  imports: [NgForOf],
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .header {
          display: flex;
          overflow: hidden;
          border: 1px solid saddlebrown;
          padding: 3px;
          flex: 0 0 min-content;
        }

        .items {
          display: flex;
          flex-direction: column;
          gap: 1px;
          overflow-y: scroll;
          padding-left: 3px;
          flex: 1;

          .item {
            border: 1px solid green;
            padding: 5px;
          }
        }
      }
    `,
  ],
  template: `
    <div class="header">Header</div>
    <div class="items">
      <div class="item" *ngFor="let item of items">
        {{ item }}
      </div>
    </div>
  `,
})
export class NavCmp {
  items = Array.from({ length: 25 }).map((_, i) => `Item ${i + 1}`);
}

@Component({
  selector: 'section-cmp',
  standalone: true,
  styles: [
    `
      :host {
        border: 1px solid red;
        height: 100%;
        overflow: hidden;
      }
    `,
  ],
  template: ` section `,
})
export class SectionCmp {}

@Component({
  selector: 'overlay-example',
  standalone: true,
  imports: [NavCmp, SectionCmp, ExpandableCmp],
  styles: [
    `
      :host {
        display: flex;
        height: 100%;
        overflow: hidden;

        expandable-cmp {
          flex-basis: 200px;
        }

        section-cmp {
          flex: 1;
        }
      }
    `,
  ],
  template: `
    <expandable-cmp>
      <nav-cmp />
    </expandable-cmp>
    <section-cmp />
  `,
})
export default class OverlayExample {}
