import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ExpandableCmp } from './expandable.cmp';
import { ExpandableTrigger } from './expandable-trigger.cmp';

@Component({
  selector: 'nav-cmp',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
          border: 1px solid saddlebrown;
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        .header {
          display: flex;
          justify-content: flex-end;
          gap: 5px;
        }
      }
    `,
  ],
  template: `
    <div class="header">
      <ng-content></ng-content>
      <span style="flex: 1 1 auto"></span>
      <span class="material-icons">filter_list</span>
      <span class="material-icons">sort</span>
    </div>
    <div class="content">Content</div>
  `,
})
export class SectionCmp {}

@Component({
  selector: 'expandable-example',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavCmp, SectionCmp, ExpandableCmp, ExpandableTrigger],
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
    <expandable-cmp label="This content is also hidden" expanded="false">
      <nav-cmp />
    </expandable-cmp>
    <section-cmp />
    <expandable-cmp label="Content is hidden">
      <nav-cmp />
    </expandable-cmp>
  `,
})
export default class ExpandableExample {}
