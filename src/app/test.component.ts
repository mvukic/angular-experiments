import { ChangeDetectionStrategy, Component, inject, Injectable, Input } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TestService {
  getName() {
    return 'TestService';
  }
}

@Component({
  selector: 'demo-cmp',
  template: `
    <span>{{ getName() }}</span>
    <span>{{ getAge() }}</span>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TestService],
})
export class TestComponent {
  #service = inject(TestService);

  @Input()
  name: string | undefined;

  @Input()
  age: number | undefined;

  getName(): string {
    return this.name ?? this.#service.getName();
  }

  getAge(): number {
    return this.age ?? 0;
  }
}
