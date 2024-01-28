import { ChangeDetectionStrategy, Component, ContentChildren, inject, Input, QueryList } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { JsonPipe, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-list-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: CdkOption,
      inputs: ['cdkOption: value', 'cdkOptionDisabled: disabled'],
    },
  ],
  imports: [NgIf],
  styles: [
    `
      :host {
        position: relative;
        padding: 5px 5px 5px 25px;
      }

      i {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z"/></svg>');
        background-size: cover;
        position: absolute;
        left: 2px;
      }

      :host[aria-disabled='true'] {
        opacity: 0.5;
      }

      :host[aria-disabled='false']:focus {
        background: rgba(0, 0, 0, 0.2);
      }
    `,
  ],
  template: `
    <i *ngIf="option.isSelected()"></i>
    <span> {{ label }}</span>
  `,
})
export class ListItem<T = unknown> {
  readonly option: CdkOption<T> = inject(CdkOption);
  readonly list: CdkListbox<T> = inject(CdkListbox);

  @Input({ required: true })
  label!: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
  hostDirectives: [
    {
      directive: CdkListbox,
      inputs: ['cdkListboxDisabled: disabled', 'cdkListboxMultiple: multiple', 'cdkListboxValue: value'],
      outputs: ['cdkListboxValueChange: valueChange'],
    },
  ],
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: 3px;
        background-color: white;
        border: 1px solid black;
        width: 100%;
      }
    `,
  ],
  template: `<ng-content />`,
})
export class List<T = unknown> {
  readonly list: CdkListbox<T> = inject(CdkListbox);

  @ContentChildren(ListItem<T>)
  options!: QueryList<ListItem<T>>;
}

@Component({
  selector: 'cdk-list-box-demo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgForOf, FormsModule, ReactiveFormsModule, List, ListItem, JsonPipe],
  template: `
    <app-list [(ngModel)]="templateFormSingleSelect">
      <app-list-item *ngFor="let language of languages" [value]="language.id" [label]="language.label" [disabled]="language.disabled" />
    </app-list>
    Value: {{ templateFormSingleSelect }}
    <br />
    <app-list [(ngModel)]="templateFormMultipleSelect" multiple required>
      <app-list-item *ngFor="let language of languages" [value]="language.id" [label]="language.label" [disabled]="language.disabled" />
    </app-list>
    Value: {{ templateFormMultipleSelect | json }}
    <form [formGroup]="reactiveFormSingleSelect">
      <app-list formControlName="language">
        <app-list-item *ngFor="let language of languages" [value]="language.id" [label]="language.label" [disabled]="language.disabled" />
      </app-list>
      Value: {{ reactiveFormSingleSelect.value | json }}
    </form>
    <form [formGroup]="reactiveFormMultiSelect">
      <app-list formControlName="language" multiple>
        <app-list-item *ngFor="let language of languages" [value]="language.id" [label]="language.label" [disabled]="language.disabled" />
      </app-list>
      Value: {{ reactiveFormMultiSelect.value | json }} Valid:
      {{ reactiveFormMultiSelect.valid }}
    </form>
    <div>
      <app-list [value]="selection" (valueChange)="selection = $any($event.value)">
        <app-list-item *ngFor="let language of languages" [value]="language.id" [label]="language.label" [disabled]="language.disabled" />
      </app-list>
      Value: {{ selection | json }}
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
