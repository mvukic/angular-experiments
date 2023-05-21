import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Injectable()
export class LogEventPlugin {
  manager!: EventManager;

  #modifier = 'log';
  #supported = (event: string) => event.endsWith(this.#modifier);
  #unwrap = (event: string) =>
    event
      .split('.')
      .filter((v) => v !== this.#modifier)
      .join('.');

  supports(event: string): boolean {
    return this.#supported(event);
  }

  addEventListener(element: HTMLElement, event: string, handler: Function): Function {
    const originalEvent = this.#unwrap(event);
    const wrapped = (event: Event): void => {
      console.log(event, originalEvent, element);
      handler(event);
    };
    return this.manager.addEventListener(element, originalEvent, wrapped);
  }
}
