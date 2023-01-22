import { Directive, OnDestroy } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Directive({
  selector: 'onDestroy',
  standalone: true
})
export class OnDestroyDirective implements OnDestroy {
  #destroy = new Subject<boolean>();

  get destroy() {
    return this.#destroy.asObservable();
  }

  ngOnDestroy(): void {
    this.#destroy.next(true);
    this.#destroy.complete();
  }

}

