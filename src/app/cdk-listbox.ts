import { booleanAttribute, Component, Directive, ElementRef, inject, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { JsonPipe, NgForOf, NgTemplateOutlet } from '@angular/common';
import { ConnectedPosition, Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-list-item',
  standalone: true,
  hostDirectives: [{ directive: CdkOption, inputs: ['cdkOption: value', 'cdkOptionDisabled: disabled'] }],
  styles: [
    `
      :host[aria-selected='true']::before {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z"/></svg>'); /* stylelint-disable-line */
        background-size: cover;
        position: absolute;
        left: 2px;
      }
      :host[aria-disabled='true'] {
        opacity: 0.5;
      }
      :host {
        position: relative;
        padding: 5px 5px 5px 25px;
      }
      :host[aria-disabled='false']:focus {
        background: rgba(0, 0, 0, 0.2);
      }
    `,
  ],
  template: `<span> {{ label }}</span>`,
})
export class ListItem {
  @Input({ required: true })
  value!: string;

  @Input({ required: true })
  label!: string;

  @Input({ transform: booleanAttribute })
  multiple: boolean = false;

  @Input({ transform: booleanAttribute })
  disabled: boolean = false;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [OverlayModule, NgTemplateOutlet],
  hostDirectives: [{ directive: CdkListbox, inputs: ['cdkListboxDisabled: disabled', 'cdkListboxMultiple: multiple'] }],
  styles: [
    `
      button {
        min-width: 200px;
      }
      .items {
        display: flex;
        flex-direction: column;
        gap: 3px;
        background-color: white;
        border: 1px solid black;
        width: 100%;
      }
    `,
  ],
  template: `
    <button #trigger (click)="open()">{{ label }}</button>
    <ng-template #template>
      <div class="items">
        <ng-content />
      </div>
    </ng-template>
  `,
})
export class List {
  #overlay = inject(Overlay);
  #vcr = inject(ViewContainerRef);

  @ViewChild('trigger', { static: true })
  trigger!: ElementRef<HTMLButtonElement>;

  @ViewChild('template', { static: true })
  template!: TemplateRef<any>;

  @Input({ required: true })
  label!: string;

  @Input({ transform: booleanAttribute })
  disabled: boolean = false;

  @Input({ transform: booleanAttribute })
  multiple: boolean = false;

  #overlayRef: OverlayRef | undefined;

  open() {
    this.createOverlay();
  }

  close() {
    this.#overlayRef?.detach();
    this.#overlayRef = undefined;
  }

  positions: ConnectedPosition[] = [
    { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetX: 0, offsetY: 2 },
    { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetX: 0, offsetY: -2 },
  ];
  createOverlay() {
    const portal = new TemplatePortal(this.template, this.#vcr);
    this.#overlayRef = this.#overlay.create({
      positionStrategy: this.#overlay.position().flexibleConnectedTo(this.trigger.nativeElement).withPositions(this.positions),
      width: this.trigger.nativeElement.clientWidth,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
    });
    this.#overlayRef?.attach(portal);
    this.#overlayRef?.backdropClick().subscribe(() => this.close());
  }
}

@Component({
  selector: 'cdk-list-box-demo',
  standalone: true,
  imports: [NgForOf, FormsModule, ReactiveFormsModule, List, ListItem, JsonPipe],
  template: `
    <app-list [(ngModel)]="templateFormSingleSelect" label="Single template form select">
      <app-list-item *ngFor="let language of languages" [value]="language.id" [label]="language.label" [disabled]="language.disabled" />
    </app-list>
    Value: {{ templateFormSingleSelect }}
    <br />
    <app-list [(ngModel)]="templateFormMultipleSelect" multiple label="Multiple template form select">
      <app-list-item *ngFor="let language of languages" [value]="language.id" [label]="language.label" [disabled]="language.disabled" />
    </app-list>
    Value: {{ templateFormMultipleSelect }}
    <form [formGroup]="reactiveFormSingleSelect">
      <app-list formControlName="language" label="Single reactive form select">
        <app-list-item *ngFor="let language of languages" [value]="language.id" [label]="language.label" [disabled]="language.disabled" />
      </app-list>
      Value: {{ reactiveFormSingleSelect.value | json }}
    </form>
    <form [formGroup]="reactiveFormMultiSelect">
      <app-list formControlName="language" multiple label="Multiple reactive form select">
        <app-list-item *ngFor="let language of languages" [value]="language.id" [label]="language.label" [disabled]="language.disabled" />
      </app-list>
      Value: {{ reactiveFormMultiSelect.value | json }}
    </form>
  `,
})
export default class CdkListBoxDemo {
  templateFormSingleSelect = 'chinese';
  reactiveFormSingleSelect = new FormGroup({
    language: new FormControl('chinese'),
  });
  templateFormMultipleSelect = ['chinese', 'italian'];
  reactiveFormMultiSelect = new FormGroup({
    language: new FormControl(['chinese', 'italian']),
  });
  languages = [
    { id: 'chinese', label: 'Chinese', disabled: false },
    { id: 'french', label: 'French', disabled: false },
    { id: 'italian', label: 'Italian', disabled: true },
    { id: 'japanese', label: 'Japanese', disabled: false },
  ];
}
