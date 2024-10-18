import { ChangeDetectionStrategy, Component, computed, Directive, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { onlyInTests } from './testing/utils';

@Directive({
  selector: 'div[test-dir-inner]',
})
export class TestDirInner {}

@Component({
  selector: 'test-cmp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TestDirInner, FormsModule],
  template: `
    <!-- Label -->
    <span>{{ input() }}</span>
    <!-- Inner component -->
    @for (i of indexes(); track i) {
      <div test-dir-inner>{{ i }}</div>
    }
    <!-- Button -->
    <button id="test-cmp-btn" (click)="emit()">Click</button>

    <!-- Input -->
    <input type="text" [(ngModel)]="value" />

    <!-- Div -->
    <div>{{ value }}</div>
  `,
})
export class TestCmp {
  input = model('input');
  indexes = computed(() => Array.from({ length: this.input().length }).map((_, i) => i + 1));

  count = input(3);
  value = 'v';

  output = output<string>();

  emit() {
    this.output.emit(this.input());
    this.test();
  }

  test() {
    onlyInTests();
  }
}
