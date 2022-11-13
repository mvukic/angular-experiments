import { ChangeDetectionStrategy, Component } from '@angular/core';

export function ngHTML(html: string) {
  @Component({
    template: `<div [innerHTML]="html"></div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
  })
  class _HTMLComponent {
    html = html;
  }

  return _HTMLComponent;
}
