import { Component, Directive, HostBinding, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { filter, finalize, interval, Observable, Subject, takeUntil, tap } from 'rxjs';
import { OnDestroyDirective } from './utils/on-destroy.directive';
import { NgLetDirective } from './utils/ng-let.directive';
import { AsyncPipe } from '@angular/common';

@Directive({
  selector: 'span[size]',
  standalone: true,
})
export class FontSizeDirective {
  @Input()
  @HostBinding('style.font-size')
  size?: string = 'xxx-large';
}

@Directive({
  selector: 'span[color]',
  standalone: true,
})
export class FontColorDirective {
  @Input()
  @HostBinding('style.color')
  color?: string = 'blue';
}

@Directive({
  selector: 'span[sizedAndColoredText]',
  standalone: true,
  hostDirectives: [
    { directive: FontSizeDirective, inputs: ['size: hostSize'] },
    { directive: FontColorDirective, inputs: ['color: hostColor'] },
  ],
})
export class ComposedDirective {
  private sizeDirective = inject(FontSizeDirective);
  private colorDirective = inject(FontColorDirective);
}

@Directive({
  selector: 'span[decoratedText]',
  standalone: true,
  hostDirectives: [{ directive: ComposedDirective }],
})
export class DecoratedAndComposedDirective {
  @Input()
  @HostBinding('style.text-decoration')
  decoration?: string;
}

@Component({
  selector: 'host-components',
  template: `
    <h1>Host directives</h1>
    <span size="x-large">Large text</span> <br />
    <span color="red">Colored text</span><br />
    <span sizedAndColoredText hostSize="xx-small" hostColor="lime"> Extra large and green</span> <br />
    <span sizedAndColoredText> Extra large and blue</span> <br />
    <span decoratedText decoration="underline"> Extra large and blue and underlined</span> <br />
    <ng-container *ngLet="interval$ | async as timer">
      <span>Counter: {{ timer }}</span>
    </ng-container>
    <br />
    <span *ngLet="interval$ | async as timer">Counter: {{ timer }}</span>
  `,
  standalone: true,
  hostDirectives: [OnDestroyDirective],
  imports: [FontSizeDirective, FontColorDirective, ComposedDirective, DecoratedAndComposedDirective, NgLetDirective, AsyncPipe],
})
export default class HostDirectives {
  #destroy$ = inject(OnDestroyDirective).destroy$;
  protected interval$ = interval(1000).pipe(
    takeUntil(this.#destroy$),
    tap((value) => console.log(value)),
    finalize(() => console.log('Completed')),
  );
}
