import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'params-and-state',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3>Params and state</h3>
    params: {{ params$ | async | json }} <br />
    state: {{ state | json }} <br /><br />
  `,
})
export default class ParamsAndState {
  protected params$ = inject(ActivatedRoute).queryParamMap;
  protected state = inject(Router).getCurrentNavigation()?.extras.state;
}
