import { Component, inject, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'overlay-component',
  template: `<span>overlay component</span>`,
  standalone: true,
})
export class OverlayComponent {}

@Component({
  selector: 'overlay-example',
  template: `<button (click)="show($event)">Button</button>`,
  imports: [OverlayModule],
  standalone: true,
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
