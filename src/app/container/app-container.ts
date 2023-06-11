import { ChangeDetectionStrategy, Component, computed, Input, signal } from '@angular/core';
import { NgIf } from '@angular/common';

export type AppContainerSidenavPosition = 'start' | 'end';

@Component({
  selector: 'app-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf],
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .header {
          flex: 0 0 fit-content;
        }
        .sub-header {
          flex: 0 0 fit-content;
        }
        .sidenav-and-content {
          flex: 1 1 auto;
          overflow: hidden;
          display: flex;
          .sidenav {
            flex: 0 0 auto;
            overflow: hidden;
          }
          .content {
            flex: 1 1 auto;
            overflow: hidden;
          }
        }
        .footer {
          flex: 0 0 fit-content;
        }
      }
    `,
  ],
  template: `
    <div class="header">
      <ng-content select="[header]" />
    </div>
    <div class="sub-header">
      <ng-content select="[subHeader]" />
    </div>
    <div class="sidenav-and-content" [style.flex-direction]="_layout()">
      <div class="sidenav">
        <ng-content select="[sidenav]" />
      </div>
      <div class="content">
        <ng-content select="[content]" />
      </div>
    </div>
    <div class="footer">
      <ng-content select="[footer]" />
    </div>
  `,
})
export class AppContainer {
  readonly _position = signal<AppContainerSidenavPosition>('start');
  readonly _layout = computed(() => {
    return this._position() === 'start' ? 'row' : 'row-reverse';
  });

  @Input()
  set position(value: AppContainerSidenavPosition) {
    this._position.set(value);
  }
}
