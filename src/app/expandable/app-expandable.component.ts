import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { AppExpandableTrigger } from './expandable-trigger.cmp';

@Component({
  selector: 'app-expandable',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AppExpandableTrigger],
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 100%;

        .content {
          height: 100%;
          overflow: hidden;
        }

        .content-with-label {
          @extend .content;
          display: grid;
          place-items: center center;
          .label {
            writing-mode: vertical-lr;
            transform: rotate(180deg);
          }
        }

        .footer {
          display: flex;
          padding: 0 5px;
        }
      }
    `,
  ],
  template: `
    <div class="content" [style.display]="_display()">
      <ng-content />
    </div>
    @if (!_expanded()) {
    <div class="content-with-label">
      @if (label) {
      <div class="label">{{ label }}</div>
      }
    </div>
    } @if (!_withoutTrigger()) {
    <div class="footer">
      <app-expandable-trigger
        [value]="_expanded()"
        (valueChange)="_expanded.set($event)"
      />
    </div>
    }
  `,
})
export class AppExpandable {
  @Input()
  label?: string;

  @Input({ transform: booleanAttribute })
  set expanded(value: boolean) {
    this._expanded.set(value);
  }

  @Input({ transform: booleanAttribute })
  set withoutTrigger(value: boolean) {
    this._withoutTrigger.set(value);
  }

  @Output()
  expand = new EventEmitter<boolean>();

  protected _expanded = signal(true);
  protected _display = computed(() => {
    return this._expanded() ? 'block' : 'none';
  });
  protected _withoutTrigger = signal(false);

  toggle() {
    this._expanded.set(!this._expanded());
    this.expand.emit(this._expanded());
  }
}
