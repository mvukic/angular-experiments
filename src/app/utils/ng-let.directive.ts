import { Directive, inject, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

export class NgLetContext<T = any> {
  $implicit: T | null = null;
  ngLet: T | null = null;
}

@Directive({
  selector: '[ngLet]',
  standalone: true,
})
export class NgLetDirective<T = any> implements OnInit {
  #context: NgLetContext<T> = new NgLetContext<T>();
  #vcr = inject(ViewContainerRef);
  #templateRef: TemplateRef<NgLetContext<T>> = inject(TemplateRef);

  @Input()
  set ngLet(value: T | null) {
    this.#context.$implicit = this.#context.ngLet = value;
  }

  ngOnInit() {
    this.#vcr.createEmbeddedView(this.#templateRef, this.#context);
  }

  public static ngLetUseIfTypeGuard: void;

  static ngTemplateGuard_ngLet: 'binding';

  static ngTemplateContextGuard<T>(dir: NgLetDirective<T>, ctx: any): ctx is NgLetContext<Exclude<T, false | 0 | '' | null | undefined>> {
    return true;
  }
}
