import { booleanAttribute, ChangeDetectionStrategy, Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { BooleanInput } from '@angular/cdk/coercion';
import { ExpandableTrigger } from './expandable-trigger.cmp';

@Component({
  selector: 'expandable-cmp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, ExpandableTrigger],
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: fill-available;

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
        }
      }
    `,
  ],
  template: `
    <div class="content" [style.display]="display()">
      <ng-content />
    </div>
    <div class="content-with-label" *ngIf="!_expanded()">
      <div class="label" *ngIf="label">
        {{ label }}
      </div>
    </div>
    <div class="footer" *ngIf="!_withoutTrigger()">
      <expandable-trigger [value]="_expanded()" (valueChange)="_expanded.set($event)" />
    </div>
  `,
})
export class ExpandableCmp {
  @Input()
  label?: string;

  @Input()
  set expanded(value: BooleanInput) {
    this._expanded.set(booleanAttribute(value));
  }

  @Input()
  set withoutTrigger(value: BooleanInput) {
    this._withoutTrigger.set(booleanAttribute(value));
  }

  @Output()
  expand = new EventEmitter<boolean>();

  protected _expanded = signal(true);
  protected display = computed(() => {
    return this._expanded() ? 'block' : 'none';
  });
  protected _withoutTrigger = signal(false);

  toggle() {
    this._expanded.set(!this._expanded());
    this.expand.emit(this._expanded());
  }
}
