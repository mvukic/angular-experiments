import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, signal, viewChild } from '@angular/core';
import { codeToHtml } from 'shiki';

const showHide = trigger('fadeIn', [
  transition(':enter', [style({ opacity: 0 }), animate('.2s ease-out', style({ opacity: 1 }))]),
  transition(':leave', [animate('.2s ease-in', style({ opacity: 0 }))]),
]);

@Component({
  selector: 'animation-comp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [showHide],
  template: `
    <button (click)="show.set(!show())">Toggle</button>
    @if (show()) {
      <div @fadeIn>Some text</div>
    }

    <div #htmlDiv></div>
    <div #tsDiv></div>
  `,
})
export default class AnimationComponent implements OnInit {
  show = signal(false);
  htmlDiv = viewChild.required('htmlDiv', { read: ElementRef });
  tsDiv = viewChild.required('tsDiv', { read: ElementRef });

  async ngOnInit() {
    const html = await codeToHtml(html1, {
      lang: 'angular-html',
      theme: 'houston',
    });
    const ts = await codeToHtml(ts1, {
      lang: 'typescript',
      theme: 'houston',
    });
    this.htmlDiv().nativeElement.innerHTML = html;
    this.tsDiv().nativeElement.innerHTML = ts;
  }
}

const html1 = `
<button (click)="show.set(!show())">Toggle</button>
@if (show()) {
  <div @fadeIn>Some text</div>
}
`;

const ts1 = `
@Component({
  selector: '...',
  templateUrl: 'template.html',
})
export default class AnimationComponent implements OnInit {
  show = signal(false);
}
`;
