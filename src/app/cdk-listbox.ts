import {
  AfterContentChecked,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  ContentChildren,
  Directive,
  ElementRef,
  inject,
  Input,
  Output,
  QueryList,
  signal,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { JsonPipe, NgForOf, NgTemplateOutlet } from '@angular/common';
import { ConnectedPosition, Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  selector: 'app-list-item',
  standalone: true,
  exportAs: 'appListItem',
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
export class ListItem<T = unknown> {
  @Input({ required: true })
  value!: T;

  @Input({ required: true })
  label!: string;

  @Input({ transform: booleanAttribute })
  disabled: boolean = false;
}

@Component({
  selector: 'app-list',
  standalone: true,
  exportAs: 'appList',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [OverlayModule, NgTemplateOutlet],
  hostDirectives: [
    {
      directive: CdkListbox,
      inputs: ['cdkListboxDisabled: disabled', 'cdkListboxMultiple: multiple', 'cdkListboxValue: value'],
      outputs: ['cdkListboxValueChange: valueChange'],
    },
  ],
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
      .hidden {
        visibility: hidden;
      }
    `,
  ],
  template: `
    <button #trigger (click)="open()">{{ labels() }}</button>

    <ng-template #template>
      <div class="items">
        <ng-content />
      </div>
    </ng-template>
  `,
})
export class List<T = unknown> implements AfterContentChecked {
  #listBox = inject(CdkListbox);
  #overlay = inject(Overlay);
  #vcr = inject(ViewContainerRef);

  @ViewChild('trigger', { static: true })
  trigger!: ElementRef<HTMLButtonElement>;

  @ViewChild('template', { static: true })
  template!: TemplateRef<any>;

  @ContentChildren(ListItem)
  options!: QueryList<ListItem>;

  @Input({ required: true })
  placeholder!: string;

  @Input()
  value: T[] = [];

  @Input({ transform: booleanAttribute })
  disabled = false;

  @Input({ transform: booleanAttribute })
  multiple = false;

  @Output()
  valueChange = this.#listBox.valueChange;

  #overlayRef: OverlayRef | undefined;

  readonly #selectedLabels = signal<string[]>([]);
  readonly #isOpen = signal<boolean>(false);
  readonly labels = computed(() => {
    if (this.multiple) {
      return this.#isOpen() ? this.placeholder : `Selected ${this.#selectedLabels().length}  item(s)`;
    } else {
      return this.#isOpen() ? this.placeholder : this.#selectedLabels();
    }
  });

  constructor() {
    this.#listBox.valueChange.pipe(takeUntilDestroyed()).subscribe(() => {
      this.#setLabels();
    });
  }

  ngAfterContentChecked() {
    this.#setLabels();
  }

  open() {
    this.#createOverlay();
    this.#isOpen.set(true);
  }

  close() {
    this.#overlayRef?.detach();
    this.#overlayRef = undefined;
    this.#isOpen.set(false);
  }

  #setLabels() {
    this.#selectedLabels.set(this.options.filter((o) => this.#listBox.isValueSelected(o.value)).map((o) => o.label));
  }

  #positions: ConnectedPosition[] = [
    { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetX: 0, offsetY: 2 },
    { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetX: 0, offsetY: -2 },
  ];
  #createOverlay() {
    const portal = new TemplatePortal(this.template, this.#vcr);
    this.#overlayRef = this.#overlay.create({
      positionStrategy: this.#overlay.position().flexibleConnectedTo(this.trigger.nativeElement).withPositions(this.#positions),
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
  imports: [NgForOf, FormsModule, ReactiveFormsModule, List, ListItem, JsonPipe, CustomTrigger],
  template: `
    <app-list [(ngModel)]="templateFormSingleSelect" placeholder="Single template form select">
      <app-list-item *ngFor="let language of languages" [value]="language.id" [label]="language.label" [disabled]="language.disabled" />
    </app-list>
    Value: {{ templateFormSingleSelect }}
    <br />
    <app-list [(ngModel)]="templateFormMultipleSelect" multiple placeholder="Multiple template form select" required>
      <app-list-item *ngFor="let language of languages" [value]="language.id" [label]="language.label" [disabled]="language.disabled" />
    </app-list>
    Value: {{ templateFormMultipleSelect | json }}
    <form [formGroup]="reactiveFormSingleSelect">
      <app-list formControlName="language" placeholder="Single reactive form select">
        <app-list-item *ngFor="let language of languages" [value]="language.id" [label]="language.label" [disabled]="language.disabled" />
      </app-list>
      Value: {{ reactiveFormSingleSelect.value | json }}
    </form>
    <form [formGroup]="reactiveFormMultiSelect">
      <app-list formControlName="language" multiple placeholder="Multiple reactive form select">
        <app-list-item *ngFor="let language of languages" [value]="language.id" [label]="language.label" [disabled]="language.disabled" />
      </app-list>
      Value: {{ reactiveFormMultiSelect.value | json }} Valid: {{ reactiveFormMultiSelect.valid }}
    </form>
    <div>
      <app-list [value]="selection" (valueChange)="selection = $any($event.value)" placeholder="Using [value] input/output">
        <app-list-item *ngFor="let language of languages" [value]="language.id" [label]="language.label" [disabled]="language.disabled" />
      </app-list>
      Value: {{ selection | json }}
    </div>
    <div>
      <div style="width: 200px; border: 1px solid red" [appListCustom]="template">This is some span trigger</div>
      <ng-template #template>
        <span style="border: 1px solid green">This template has the same width as the trigger</span>
      </ng-template>
    </div>
  `,
})
export default class CdkListBoxDemo {
  selection = ['chinese'];
  templateFormSingleSelect = 'chinese';
  reactiveFormSingleSelect = new FormGroup({
    language: new FormControl('chinese'),
  });
  templateFormMultipleSelect = ['chinese', 'japanese'];
  reactiveFormMultiSelect = new FormGroup({
    language: new FormControl(['chinese', 'japanese'], [Validators.required]),
  });
  languages = [
    { id: 'chinese', label: 'Chinese', disabled: false },
    { id: 'french', label: 'French', disabled: false },
    { id: 'italian', label: 'Italian', disabled: true },
    { id: 'japanese', label: 'Japanese', disabled: false },
  ];
}
