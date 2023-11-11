import { ChangeDetectionStrategy, Component } from '@angular/core';

export function ngHTML(html: string) {
  @Component({
    template: `<div [innerHTML]="html"></div>`,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  class _HTMLComponent {
    html = html;
  }

  return _HTMLComponent;
}
