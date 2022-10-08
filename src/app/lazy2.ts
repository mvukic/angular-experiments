import { AsyncPipe, JsonPipe } from '@angular/common'
import { ApplicationRef, Component, ComponentMirror, ComponentRef, createComponent, ElementRef, EnvironmentInjector, inject, reflectComponentType, ViewChild, ViewContainerRef } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'lazy-2',
    template: `
        lazy2 <br />
        params: {{ params$ | async | json }} <br />
        state: {{ state | json }} <br />
        <button (click)="lazyLoad()">Lazy load 3</button>
        <div #container></div>
        <br />
        {{ reflect | json }}
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

    protected reflect: ComponentMirror<any> | null = null

    async lazyLoad() {
        const footer = document.createElement('p')
        footer.innerText = 'footer'

        const { Lazy3 } = await import('./lazy3')
        const ref = createComponent(Lazy3, {
            environmentInjector: this.injector,
            hostElement: this.container.nativeElement,
            projectableNodes: [[footer]],
        })
        this.appRef.attachView(ref.hostView)
        this.reflect = reflectComponentType(ref.componentType)
    }
}
