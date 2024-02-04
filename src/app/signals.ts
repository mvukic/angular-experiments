import { booleanAttribute, ChangeDetectionStrategy, Component, computed, effect, input, Signal, signal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';

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
  inputTransform = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });
  inputRequired = input.required<string>();

  value = input<string>();
  _value = signal<string | undefined>(undefined);

  constructor() {
    effect(
      () => {
        this._value.set(this.value());
      },
      { allowSignalWrites: true },
    );
  }

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  writeValue(value: string): void {
    this._value.set(value);
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
      <input matInput (change)="onQueryChange($event)" [value]="options()().query" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Min</mat-label>
      <input type="number" matInput [value]="options()().min" />
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Max</mat-label>
      <input type="number" matInput [value]="options()().max" />
    </mat-form-field>
  `,
})
export class FilterCmp {
  options = input.required<Signal<FilterOptions>>();

  onQueryChange(event: Event) {
    console.log(event);
  }
}

@Component({
  selector: 'demo-signals',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SignalCmp, MatDrawerContainer, MatDrawerContent, MatDrawer, MatButton, FilterCmp],
  styles: `:host { height: 100%; display: block; }`,
  template: `
    <mat-drawer-container style="height: 100%">
      <mat-drawer #drawer position="end" mode="over">
        <filter-cmp [options]="options" />
      </mat-drawer>
      <mat-drawer-content>
        <h3>Signals</h3>
        <button mat-button (click)="drawer.toggle()">Toggle options</button>
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
        <span>Query: {{ options().query }}</span>
        <span>Min: {{ options().min }}</span>
        <span>Max: {{ options().max }}</span>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
})
export default class Signals {
  first = signal(localStorage.getItem('first') ?? '');
  last = signal(localStorage.getItem('last') ?? '');
  full = computed(() => `${this.first()} ${this.last()}`);

  options = signal<FilterOptions>({
    min: 0,
    max: 100,
    query: undefined,
  });

  constructor() {
    effect(() => {
      localStorage.setItem('first', this.first());
    });
    effect(() => {
      localStorage.setItem('last', this.last());
      return () => console.log('Cleaning effect 1');
    });
  }
}
