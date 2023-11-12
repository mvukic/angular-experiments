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

@Component({
  selector: 'app-expandable-trigger',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="material-icons" (click)="toggle()">
      {{ _icon() }}
    </span>
  `,
})
export class AppExpandableTrigger {
  @Input({ transform: booleanAttribute })
  set value(value: boolean) {
    this.#value.set(value);
  }

  @Input()
  visibilityIcon = 'visibility';

  @Input()
  invisibilityIcon = 'visibility_off';

  @Output()
  valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  #value = signal(true);
  protected _icon = computed(() => {
    return this.#value() ? this.visibilityIcon : this.invisibilityIcon;
  });
  toggle() {
    this.#value.set(!this.#value());
    this.valueChange.emit(this.#value());
  }
}
