import { booleanAttribute, ChangeDetectionStrategy, Component, computed, Input, signal } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'expandable-cmp',
  standalone: true,
  imports: [NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        border: 1px solid darkorchid;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .content {
          height: 100%;
          overflow: hidden;
        }

        .content-with-label {
          height: 100%;
          overflow: hidden;
          display: grid;
          place-items: center center;
          .label {
            writing-mode: vertical-lr;
            transform: rotate(180deg);
          }
        }

        .footer {
          padding: 0 5px;
          border-top: 1px solid black;
        }
      }
    `,
  ],
  template: `
    <div class="content" [style.display]="display()">
      <ng-content />
    </div>
    <div class="content-with-label" *ngIf="!expanded()">
      <div class="label" *ngIf="label">
        {{ label }}
      </div>
    </div>
    <div class="footer">
      <span class="material-icons" (click)="toggle()">{{ this.icon() }}</span>
    </div>
  `,
})
export class ExpandableCmp {
  @Input()
  label?: string = undefined;

  @Input({ alias: 'expanded' })
  set visible(value: any) {
    this.expanded.set(booleanAttribute(value));
  }

  readonly expanded = signal(true);
  readonly icon = computed(() => {
    return this.expanded() ? 'visibility' : 'visibility_off';
  });
  readonly display = computed(() => {
    return this.expanded() ? 'block' : 'none';
  });

  toggle() {
    this.expanded.set(!this.expanded());
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
        display: flex;
        flex-direction: column;
        border: 1px solid red;
        height: 100%;
        overflow: hidden;
        .header {
          display: flex;
          justify-content: flex-end;
          gap: 5px;
          border-bottom: 1px solid greenyellow;
        }
      }
    `,
  ],
  template: `
    <div class="header">
      <span class="material-icons">filter_list</span>
      <span class="material-icons">sort</span>
    </div>
    <div class="content">Content</div>
  `,
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
          flex-basis: fit-content;
        }

        nav-cmp {
          width: 200px;
        }

        section-cmp {
          flex: 1;
        }
      }
    `,
  ],
  template: `
    <expandable-cmp label="Content is hidden">
      <nav-cmp />
    </expandable-cmp>
    <expandable-cmp expanded="false">
      <nav-cmp />
    </expandable-cmp>
    <section-cmp />
    <expandable-cmp label="Content is hidden">
      <nav-cmp />
    </expandable-cmp>
  `,
})
export default class OverlayExample {}
