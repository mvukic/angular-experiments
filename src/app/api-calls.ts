import { JsonPipe, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { finalize, firstValueFrom } from 'rxjs';

@Component({
  selector: 'api-calls',
  template: `
    <h3>API calls</h3>
    <button (click)="callApiAsync()">Call api async</button>
    {{ response1 | json }} <br /><br />
    <button (click)="callApiObservable()">Call api observable</button>
    {{ response2 | json }} <br /><br />
  `,
  standalone: true,
  imports: [JsonPipe, NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ApiCalls {
  #http = inject(HttpClient);
  #cdRef = inject(ChangeDetectorRef);

  protected response1: any = {};
  protected response2: any = {};

  callApiObservable() {
    this.#http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(finalize(() => this.#cdRef.markForCheck()))
      .subscribe({
        next: (response: any) => (this.response2 = response),
      });
  }

  async callApiAsync() {
    const apiCall = this.#http.get('https://jsonplaceholder.typicode.com/todos/1');
    const response = await firstValueFrom(apiCall);
    this.#cdRef.markForCheck();
    this.response1 = response;
  }
}
