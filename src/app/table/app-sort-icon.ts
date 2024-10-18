import { booleanAttribute, ChangeDetectionStrategy, Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { SortDirection } from './table';

@Component({
  selector: 'app-sort-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(click)': 'toggle()' },
  styles: [
    `
      span.blurred {
        opacity: 0.2;
        &:hover {
          opacity: 0.7;
        }
      }
    `,
  ],
  template: `
    <span class="material-icons" [class.blurred]="!_active()">
      {{ _icon() }}
    </span>
  `,
})
export class AppSortIcon {
  @Input()
  name?: string;

  @Input({ transform: booleanAttribute })
  set active(value: boolean) {
    this._active.set(value);
  }

  @Input()
  set direction(value: SortDirection) {
    this._direction.set(value);
  }

  @Output()
  activeChange = new EventEmitter<boolean>();

  @Output()
  directionChange = new EventEmitter<SortDirection>();

  readonly _active = signal<boolean>(false);
  readonly _direction = signal<SortDirection>(1);

  readonly _icon = computed(() => {
    return this._direction() === 1 ? 'arrow_downward' : 'arrow_upward';
  });

  toggle() {
    if (this._active()) {
      this._direction.update((value) => (value === 1 ? -1 : 1));
    }
    this.directionChange.emit(this._direction());
    this.activeChange.emit(this._active());
  }
}
