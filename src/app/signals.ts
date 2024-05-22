import {
  afterNextRender,
  afterRender,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  model,
  signal,
  output,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { RoleAccessDir } from './auth/auth.service';

@Component({
  selector: 'signal-cmp',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    Optional: {{ inputOptional() }} <br />
    Default: {{ inputDefault() }} <br />
    Alias: {{ inputAlias() }} <br />
    Transform: {{ inputTransform() }} <br />
    Required: {{ inputRequired() }} <br />
  `,
})
export class SignalCmp implements ControlValueAccessor {
  inputOptional = input<string>();
  inputDefault = input('initialValue');
  inputAlias = input('initialValue', { alias: 'inputAlias' });
  inputTransform = input(false, { transform: booleanAttribute });
  inputRequired = input.required<string>();
  disabled = model(false);
  value = model<string>();

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  writeValue(value: string): void {
    this.value.set(value);
  }
}

type FilterOptions = {
  query: string | undefined;
  min: number;
  max: number;
};

@Component({
  selector: 'filter-cmp',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatInput, MatFormField, MatLabel],
  styles: `
  :host {
    display: flex;
    flex-direction: column;
    padding: 3px
  }
  `,
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Query</mat-label>
      <input matInput (change)="onQueryChange($event)" [value]="options().query" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Min</mat-label>
      <input type="number" (change)="onMinChange($event)" matInput [value]="options().min" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Max</mat-label>
      <input type="number" (change)="onMaxChange($event)" matInput [value]="options().max" />
    </mat-form-field>
  `,
})
export class FilterCmp {
  options = model.required<FilterOptions>();

  out = output<string>();

  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  onQueryChange(event: Event) {
    this.options.update((opt) => ({ ...opt, query: (event.target as HTMLInputElement).value }));
  }

  onMinChange(event: Event) {
    this.options.update((opt) => ({ ...opt, min: (event.target as HTMLInputElement).valueAsNumber }));
  }

  onMaxChange(event: Event) {
    this.options.update((opt) => ({ ...opt, max: (event.target as HTMLInputElement).valueAsNumber }));
  }
}

@Component({
  selector: 'demo-signals',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SignalCmp, MatDrawerContainer, MatDrawerContent, MatDrawer, MatButton, FilterCmp, RoleAccessDir],
  styles: `:host { height: 100%; display: block; }`,
  template: `
    <mat-drawer-container style="height: 100%">
      <mat-drawer #drawer position="end" mode="over">
        <filter-cmp [(options)]="options" (out)="onOut($event)" />
      </mat-drawer>
      <mat-drawer-content>
        <h3>Signals</h3>
        <fieldset>
          <legend>First and last name</legend>
          <label for="first">First</label>
          <input type="text" name="first" id="first" (keyup)="first.set($any($event.target).value)" [value]="first()" />
          <label for="last">Last</label>
          <input type="text" name="last" id="last" (keyup)="last.set($any($event.target).value)" [value]="last()" />
        </fieldset>
        <fieldset>
          <legend>Full name</legend>
          <span>{{ full() }}</span>
        </fieldset>
        <br />
        <signal-cmp
          inputOptional="optional value"
          inputDefault="optional value"
          inputAlias="optional value"
          inputTransform="optional value"
          inputRequired="optional value"
        />
        <br />
        <button mat-button (click)="drawer.toggle()">Toggle options</button> <br />
        <span>Query: {{ options().query }}</span> <br />
        <span>Min: {{ options().min }}</span> <br />
        <span>Max: {{ options().max }}</span>
        <br />

        <div style="border: 1px solid red" [requiresRole]="'role_1'">Some feature: role_1</div>
        <div style="border: 1px solid red" [requiresRole]="'role_2'">Some feature: role_2</div>
        <div style="border: 1px solid red" [requiresRole]="'role_3'">Some feature: role_3</div>

        <button popovertarget="mypopover" popovertargetaction="toggle">Toggle the popover</button>
        <div id="mypopover" popover>Popover content</div>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
})
export default class Signals {
  readonly first = signal(localStorage.getItem('first') ?? '');
  readonly last = signal(localStorage.getItem('last') ?? '');
  readonly full = computed(() => `${this.first()} ${this.last()}`);

  out = output<string>();

  readonly options = signal<FilterOptions>({
    min: 0,
    max: 100,
    query: '',
  });

  onOut(v: string) {
    console.log(v);
  }

  constructor() {
    effect(() => {
      localStorage.setItem('first', this.first());
      this.out.emit(this.first());
    });
    effect(() => {
      localStorage.setItem('last', this.last());
      return () => console.log('Cleaning effect 1');
    });
  }
}
