import { ApplicationRef, Component, createComponent, ElementRef, EnvironmentInjector, inject, ViewChild } from '@angular/core';

@Component({
    selector: 'lazy-load-component',
    template: `
        <h3>Lazy load component</h3>
        <button (click)="lazyLoad()">Lazy load 4</button>
        <div #container></div>
    `,
    standalone: true,
})
export default class LazyLoadComponent {
    @ViewChild('container', { static: true })
    private container!: ElementRef;

    private appRef = inject(ApplicationRef);
    private injector = inject(EnvironmentInjector);

    async lazyLoad() {
        const footer = document.createElement('p');
        footer.innerText = 'footer';

        const { LazyComponent } = await import('./utils/lazy-component');
        const ref = createComponent(LazyComponent, {
            environmentInjector: this.injector,
            hostElement: this.container.nativeElement,
            projectableNodes: [[footer]],
        });
        this.appRef.attachView(ref.hostView);
    }
}
