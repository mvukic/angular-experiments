import { booleanAttribute, ChangeDetectionStrategy, Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';

@Component({
  selector: 'expandable-trigger',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="material-icons" (click)="toggle()">{{ _icon() }}</span>`,
})
export class ExpandableTrigger {
  @Input()
  set value(value: BooleanInput) {
    this.#value.set(booleanAttribute(value));
  }

  @Input()
  visibilityIcon = 'visibility';

  @Input()
  invisibilityIcon = 'visibility_off';

  @Output()
  valueChange = new EventEmitter<boolean>();

  #value = signal(true);
  protected _icon = computed(() => {
    return this.#value() ? this.visibilityIcon : this.invisibilityIcon;
  });
  toggle() {
    this.#value.set(!this.#value());
    this.valueChange.emit(this.#value());
  }
}
