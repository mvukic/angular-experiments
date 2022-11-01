import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'templated-ng-for',
    template: `
        <h3>ngFor with template</h3>
        <ul>
            <li *ngFor="let emoji of emojis; template: customItemTemplate"></li>
        </ul>
        <ng-template #customItemTemplate let-item>
            {{ item }}
        </ng-template>
    `,
    standalone: true,
    imports: [NgForOf],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TemplatedNgFor {
    emojis = ['😊', '😎', '🎶', '😶‍🌫️'];
}
