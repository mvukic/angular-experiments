import { ChangeDetectionStrategy, Component, contentChildren, inject, input, model } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';

let cmpId = 0;

@Component({
  selector: 'div[app-check-list]',
  standalone: true,
  hostDirectives: [
    {
      directive: CdkListbox,
      inputs: ['cdkListboxDisabled: disabled', 'cdkListboxMultiple: multiple', 'cdkListboxValue: value'],
      outputs: ['cdkListboxValueChange: valueChange'],
    },
  ],
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  `,
  template: `<ng-content />`,
})
export class CheckListDirective {}

@Component({
  selector: 'app-check-list-item',
  standalone: true,
  hostDirectives: [
    {
      directive: CdkOption,
      inputs: ['cdkOption: value', 'cdkOptionDisabled: disabled'],
    },
  ],
  styles: `
    :host {
      display: flex;
      flex-direction: row;
      gap: 5px;
      &[aria-disabled="false"]:hover * {
        cursor: pointer;
      }
    }
  `,
  template: `
    <input
      type="checkbox"
      [attr.id]="option.id"
      [attr.name]="list.id"
      [value]="option.value"
      [disabled]="option.disabled"
      [checked]="option.isSelected()"
      (change)="option.toggle()"
    />
    <label [attr.for]="option.id">{{ label() }}</label>
  `,
})
export class CheckListItemComponent<T = unknown> {
  readonly option = inject(CdkOption<T>);
  readonly list = inject(CdkListbox<T>);

  label = input.required<string>();
}

@Component({
  selector: 'cdk-list-box-demo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ReactiveFormsModule, JsonPipe, CheckListDirective, CheckListItemComponent],
  template: `
    <div app-check-list [(ngModel)]="templateFormSingleSelect">
      @for (language of languages; track language) {
        <app-check-list-item [label]="language.label" [value]="language.id" [disabled]="language.disabled">
          {{ language.label }}
        </app-check-list-item>
      }
    </div>
    Value: {{ templateFormSingleSelect | json }}
    <br />
    <div app-check-list [(ngModel)]="templateFormMultipleSelect" multiple required>
      @for (language of languages; track language) {
        <app-check-list-item [label]="language.label" [value]="language.id" [disabled]="language.disabled">
          {{ language.label }}
        </app-check-list-item>
      }
    </div>
    Value: {{ templateFormMultipleSelect | json }}
    <form [formGroup]="reactiveFormSingleSelect">
      <div app-check-list formControlName="language">
        @for (language of languages; track language) {
          <app-check-list-item [label]="language.label" [value]="language.id" [disabled]="language.disabled">
            {{ language.label }}
          </app-check-list-item>
        }
      </div>
      Value: {{ reactiveFormSingleSelect.value | json }}
    </form>
    <form [formGroup]="reactiveFormMultiSelect">
      <div app-check-list formControlName="language" multiple>
        @for (language of languages; track language) {
          <app-check-list-item [label]="language.label" [value]="language.id" [disabled]="language.disabled">
            {{ language.label }}
          </app-check-list-item>
        }
      </div>
      Value: {{ reactiveFormMultiSelect.value | json }} Valid:
      {{ reactiveFormMultiSelect.valid }}
    </form>
    <div>
      <div app-check-list [value]="selection" (valueChange)="selection = $any($event.value)">
        @for (language of languages; track language) {
          <app-check-list-item [label]="language.label" [value]="language.id" [disabled]="language.disabled">
            {{ language.label }}
          </app-check-list-item>
        }
      </div>
      Value: {{ selection | json }}
    </div>
  `,
})
export default class CdkListBoxDemo {
  templateFormSingleSelect = 'chinese';

  selection = ['chinese'];
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
