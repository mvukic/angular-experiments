import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { EventManagerPlugin } from '@angular/platform-browser';

@Injectable()
export class LogEventPlugin extends EventManagerPlugin {
  #modifier = 'log';

  constructor(@Inject(DOCUMENT) private doc: any) {
    super(doc);
  }

  override supports(event: string): boolean {
    return event.endsWith(this.#modifier)
  }

  override addEventListener(element: HTMLElement, event: string, handler: Function): Function {
    const originalEvent = event
    .split('.')
    .filter((v) => v !== this.#modifier)
    .join('.');
    const wrapped = (event: Event): void => {
      console.log(event, originalEvent, element);
      handler(event);
    };
    return this.manager.addEventListener(element, originalEvent, wrapped);
  }
}
