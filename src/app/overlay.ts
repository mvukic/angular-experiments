import { Component, inject, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'overlay-component',
  standalone: true,
  template: `<span>overlay component</span>`,
})
export class OverlayComponent {}

@Component({
  selector: 'overlay-example',
  imports: [OverlayModule],
  standalone: true,
  template: `<button (click)="show($event)">Button</button>`,
})
export default class OverlayExample {
  #overlay = inject(Overlay);
  #vcr = inject(ViewContainerRef);

  show($event: MouseEvent) {
    const overlayRef = this.#overlay.create();
    const portal = new ComponentPortal(OverlayComponent, this.#vcr);
    overlayRef.attach(portal);
    setTimeout(() => overlayRef.detach(), 2000);
  }
}
