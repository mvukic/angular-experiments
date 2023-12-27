import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Directive({
  selector: 'div[test-dir-inner]',
  standalone: true,
})
export class TestDirInner {}

@Component({
  selector: 'test-cmp',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TestDirInner, FormsModule],
  template: `
    <!-- Label -->
    <span>{{ input }}</span>
    <!-- Inner component -->
    @for (i of indexes; track i) {
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
  @Input()
  input = 'input';

  @Input()
  count = 3;

  value = 'v';

  indexes = Array.from({ length: this.input.length });

  @Output()
  output = new EventEmitter<string>();

  emit() {
    this.output.emit(this.input);
    this.test();
  }

  test() {}
}
