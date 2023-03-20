import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { JsonPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'cdk-list-box-demo',
  standalone: true,
  //  changeDetection: ChangeDetectionStrategy.OnPush,
  //  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [CdkListbox, CdkOption, ReactiveFormsModule, JsonPipe, NgForOf],
  styles: [
    `
      .example-listbox-container {
        display: block;
        width: 250px;
        border: 1px solid black;
      }

      .example-listbox-label {
        display: block;
        padding: 5px;
      }

      .example-listbox {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .example-option {
        position: relative;
        padding: 5px 5px 5px 25px;
      }

      .example-option[aria-selected='true']::before {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z"/></svg>'); /* stylelint-disable-line */
        background-size: cover;
        position: absolute;
        left: 2px;
      }

      .example-option:focus {
        background: rgba(0, 0, 0, 0.2);
      }
    `,
  ],
  template: `
    <h3>CDK List Box</h3>
    <label class="example-listbox-label" id="example-fav-cuisine-label"> Favorite languages </label>
    <form [formGroup]="form">
      <ul cdkListbox cdkListboxMultiple formControlName="languages" aria-labelledby="example-fav-cuisine-label" class="example-listbox">
        <li *ngFor="let language of languages" [cdkOption]="language.id" class="example-option">{{ language.label }}</li>
      </ul>
    </form>
    Value: {{ form.value | json }}
    <br />
    Valid: {{ form.valid }}
  `,
})
export default class CdkListBoxDemo {
  #fb = new FormBuilder().nonNullable;

  form = this.#fb.group({
    languages: this.#fb.control<string[]>(['italian'], [Validators.required]),
  });

  languages = [
    { id: 'chinese', label: 'Chinese' },
    { id: 'french', label: 'French' },
    { id: 'italian', label: 'Italian' },
    { id: 'japanese', label: 'Japanese' },
  ];
}
