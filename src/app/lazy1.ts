import { AsyncPipe, JsonPipe, KeyValuePipe, NgForOf } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { ChangeDetectionStrategy, Component, inject, ChangeDetectorRef } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { finalize } from 'rxjs'
import { OPTIONS_TOKEN, optionsFactory } from './tokens'

@Component({
    selector: 'lazy-1',
    template: `
        <h3>lazy1</h3>
        <br />
        Option: {{ options.option }}<br />
        params: {{ params$ | async | json }} <br />
        state: {{ state | json }} <br /><br />
        <button (click)="callApi()">Call api</button><br />
        {{ response | json }} <br /><br />
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
    providers: [{ provide: OPTIONS_TOKEN, useFactory: optionsFactory }],
})
export default class Lazy1 {
    protected params$ = inject(ActivatedRoute).queryParamMap
    protected state = inject(Router).getCurrentNavigation()?.extras.state
    private http = inject(HttpClient)
    private cdRef = inject(ChangeDetectorRef)
    options = inject(OPTIONS_TOKEN)
    protected response: any = {}

    emojis = ['😊', '😎', '🎶', '😶‍🌫️']

    callApi() {
        this.http
            .get('https://jsonplaceholder.typicode.com/todos/1')
            .pipe(finalize(() => this.cdRef.markForCheck()))
            .subscribe({
                next: (response: any) => (this.response = response),
            })
    }
}
