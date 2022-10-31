import { AsyncPipe, JsonPipe, KeyValuePipe, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, firstValueFrom } from 'rxjs';
import { OPTIONS_TOKEN } from './tokens';

@Component({
    selector: 'lazy-1',
    template: `
        <h3>lazy1</h3>
        <br />
        Option: {{ options.option }}<br />
        params: {{ params$ | async | json }} <br />
        state: {{ state | json }} <br /><br />
        <button (click)="callApiAsync()">Call api async</button>
        {{ response1 | json }} <br /><br />
        <button (click)="callApiObservable()">Call api observable</button>
        {{ response2 | json }} <br /><br />
        <ul>
            <li *ngFor="let emoji of emojis; template: customItemTemplate"></li>
        </ul>
        <ng-template #customItemTemplate let-item>
            {{ item }}
        </ng-template>
    `,
    standalone: true,
    imports: [AsyncPipe, JsonPipe, KeyValuePipe, NgForOf],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: OPTIONS_TOKEN, useFactory: () => ({ options: 'Lazy option 1' }) }],
})
export default class Lazy1 {
    protected params$ = inject(ActivatedRoute).queryParamMap;
    protected state = inject(Router).getCurrentNavigation()?.extras.state;
    private http = inject(HttpClient);
    private cdRef = inject(ChangeDetectorRef);
    options = inject(OPTIONS_TOKEN);
    protected response1: any = {};
    protected response2: any = {};

    hasCalledApi = false;

    emojis = ['😊', '😎', '🎶', '😶‍🌫️'];

    callApiObservable() {
        this.http
            .get('https://jsonplaceholder.typicode.com/todos/1')
            .pipe(
                finalize(() => {
                    this.cdRef.markForCheck();
                    this.hasCalledApi = true;
                }),
            )
            .subscribe({
                next: (response: any) => (this.response2 = response),
            });
    }

    async callApiAsync() {
        const apiCall = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
        const response = await firstValueFrom(apiCall);
        this.cdRef.markForCheck();
        this.response1 = response;
        this.hasCalledApi = true;
    }
}
