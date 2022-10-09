import { AsyncPipe, JsonPipe } from '@angular/common'
import { ApplicationRef, Component, createComponent, ElementRef, EnvironmentInjector, inject, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'lazy-2',
    template: `
        <h3>lazy2</h3>
        <br />
        params: {{ params$ | async | json }} <br />
        state: {{ state | json }} <br />
        <button (click)="lazyLoad()">Lazy load 4</button>
        <div #container></div>
    `,
    standalone: true,
    imports: [AsyncPipe, JsonPipe],
})
export default class Lazy2 {
    @ViewChild('container', { static: true })
    private container!: ElementRef

    protected params$ = inject(ActivatedRoute).queryParamMap
    protected state = inject(Router).getCurrentNavigation()?.extras.state
    private appRef = inject(ApplicationRef)
    private injector = inject(EnvironmentInjector)

    async lazyLoad() {
        const footer = document.createElement('p')
        footer.innerText = 'footer'

        const { Lazy4 } = await import('./lazy4')
        const ref = createComponent(Lazy4, {
            environmentInjector: this.injector,
            hostElement: this.container.nativeElement,
            projectableNodes: [[footer]],
        })
        this.appRef.attachView(ref.hostView)
    }
}
