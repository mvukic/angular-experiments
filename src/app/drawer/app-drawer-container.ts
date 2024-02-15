import { ChangeDetectionStrategy, Component, inject, model, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-drawer-container',
  standalone: true,
  styles: [
    `
      :host {
        box-sizing: border-box;
        display: block;
        overflow: hidden;
      }
    `,
  ],
  template: `
    <ng-content select="app-drawer-content" />
    <ng-content select="app-drawer" />
  `,
})
export class AppDrawerContainer {
  contentMargins = signal<{ left: number | null; right: number | null }>({ left: null, right: null });
}

@Component({
  selector: 'app-drawer-content',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-drawer-content',
    '[style.margin-left.px]': 'container.contentMargins().left',
    '[style.margin-right.px]': 'container.contentMargins().right',
  },
  styles: [
    `
      :host {
        border: 1px solid green;
        display: block;
        height: 100%;
        overflow: auto;
      }
    `,
  ],
  template: ` <ng-content /> `,
})
export class AppDrawerContent {
  container = inject(AppDrawerContainer);
}

@Component({
  selector: 'app-drawer',
  standalone: true,
  host: {
    class: 'app-drawer',
    '[class.app-drawer-opened]': 'opened()',
  },
  styles: [
    `
      :host {
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 3;
        outline: 0;
        box-sizing: border-box;
        overflow: hidden;
        transform: translate3d(-100%, 0, 0);
      }
    `,
  ],
  template: ` <ng-content /> `,
})
export class AppDrawer {
  opened = model(false);

  toggle() {
    this.opened.set(!this.opened());
  }
}
