import { Component, Directive, ElementRef, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { JsonPipe, NgForOf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { List, ListItem } from './custom-listbox/cdk-listbox';
import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Directive({
  selector: '[appListCustom]',
  standalone: true,
  host: {
    '(click)': 'open()',
  },
})
export class CustomTrigger {
  #overlay = inject(Overlay);
  #vcr = inject(ViewContainerRef);
  #trigger = inject(ElementRef);

  @Input({ required: true, alias: 'appListCustom' })
  template!: TemplateRef<any>;

  #overlayRef: OverlayRef | undefined;

  open() {
    this.#createOverlay();
  }

  close() {
    this.#overlayRef?.detach();
    this.#overlayRef = undefined;
  }

  #positions: ConnectedPosition[] = [
    { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetX: 0, offsetY: 2 },
    { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetX: 0, offsetY: -2 },
  ];
  #createOverlay() {
    const portal = new TemplatePortal(this.template, this.#vcr);
    this.#overlayRef = this.#overlay.create({
      positionStrategy: this.#overlay.position().flexibleConnectedTo(this.#trigger.nativeElement).withPositions(this.#positions),
      width: this.#trigger.nativeElement.clientWidth,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
    });
    this.#overlayRef?.attach(portal);
    this.#overlayRef?.backdropClick().subscribe(() => this.close());
  }
}

@Component({
  selector: 'custom-overlay-demo',
  standalone: true,
  imports: [NgForOf, FormsModule, ReactiveFormsModule, List, ListItem, JsonPipe, CustomTrigger],
  template: `
    <div>
      <div style="width: 200px; border: 1px solid red" [appListCustom]="template">This is some span trigger</div>
      <ng-template #template>
        <span style="border: 1px solid green">This template has the same width as the trigger</span>
      </ng-template>
    </div>
  `,
})
export default class CustomOverlayDemo {}
