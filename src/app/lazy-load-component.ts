import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  createComponent,
  ElementRef,
  EnvironmentInjector,
  inject,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'lazy-load-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button (click)="lazyLoad()">Lazy load</button>
    <div #container></div>
  `,
})
export default class LazyLoadComponent {
  #appRef = inject(ApplicationRef);
  #injector = inject(EnvironmentInjector);

  @ViewChild('container', { static: true })
  container!: ElementRef;

  async lazyLoad() {
    const p = document.createElement('p');
    p.innerText = 'dynamic projected node';

    const { LazyComponent } = await import('./utils/lazy-component');
    const ref = createComponent(LazyComponent, {
      hostElement: this.container.nativeElement,
      environmentInjector: this.#injector,
      projectableNodes: [[p]],
    });
    this.#appRef.attachView(ref.hostView);
  }
}
