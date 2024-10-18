import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'event-manager-plugins',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <br />
    <button (click)="onClick()">Click with alert</button> <br />
    <button (click.log)="onClick()">Click with alert and with log</button>
  `,
})
export default class EventManagerPlugins {
  onClick() {
    alert('click');
  }
}
