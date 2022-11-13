import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'main',
  template: `main`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main {}
