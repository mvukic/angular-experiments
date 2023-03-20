import { Component, inject, Injectable, OnDestroy } from '@angular/core';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'loader-component',
  template: `
    <div>
      <div class="icon"></div>
      <div class="message">Loading</div>
    </div>
  `,
  styles: [
    `
      :host {
        display: grid;
        place-items: center;
      }
      .icon {
      }
    `,
  ],
  standalone: true,
})
export class LoaderComponent {}

@Injectable()
export class LoadingService implements OnDestroy {
  #dialog = inject(Dialog);

  #dialogRef: DialogRef<any, LoaderComponent> | null = null;

  open() {
    if (this.#dialogRef != null) {
      return;
    }
    this.#dialogRef = this.#dialog.open(LoaderComponent);
  }

  close() {
    this.#dialogRef?.close();
    this.#dialogRef = null;
  }

  ngOnDestroy() {
    this.#dialogRef?.close();
  }
}

@Component({
  selector: 'overlay-example',
  template: `<button (click)="show()">Button</button>`,
  imports: [LoaderComponent, DialogModule],
  providers: [LoadingService],
  standalone: true,
})
export default class OverlayExample {
  #loading = inject(LoadingService);

  show() {
    this.#loading.open();
    setTimeout(() => this.#loading.close(), 2000);
  }
}
