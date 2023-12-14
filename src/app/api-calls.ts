import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'api-calls',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `:host { view-transition-name: count; }`,
  imports: [JsonPipe],
  template: `
    <h3>API calls</h3>
    <fieldset>
      <legend>Call api - async/await</legend>
      <button (click)="callApiAsync()">Call api async</button>
      <br />
      {{ response1() | json }}
    </fieldset>
    <fieldset>
      <legend>Call api - observable</legend>
      <button (click)="callApiObservable()">Call api async</button>
      <br />
      {{ response2() | json }}
    </fieldset>
    <fieldset>
      <legend>Call api - toSignal</legend>
      <span>Call api signal</span><br />
      {{ response3() | json }} <br /><br />
    </fieldset>
  `,
})
export default class ApiCalls {
  #destroyRef = inject(DestroyRef);
  #http = inject(HttpClient);

  #api = this.#http.get('https://jsonplaceholder.typicode.com/todos/1');
  response1 = signal<any>({});
  response2 = signal<any>({});
  response3 = toSignal(this.#api, { initialValue: {} });

  callApiObservable() {
    this.#api
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((response: any) => this.response2.set(response));
  }

  async callApiAsync() {
    const response = await firstValueFrom(this.#api);
    this.response1.set(response);
  }
}
