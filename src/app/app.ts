import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn-ghost btn text-xl normal-case" [routerLink]="['']">Experiments</a>
      </div>
      <div class="flex-none">
        <button
          class="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          [routerLink]="['params-and-state']"
          [queryParams]="{ debug: 1 }"
          [state]="{ debug: 1 }"
          routerLinkActive="underline"
        >
          Params and state
        </button>
        <button
          class="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          [routerLink]="['templated-ng-for']"
          routerLinkActive="underline"
        >
          Templated ng for
        </button>
        <button
          class="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          [routerLink]="['lazy-load-component']"
          routerLinkActive="underline"
        >
          Lazy load component
        </button>
        <button
          class="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          [routerLink]="['api-calls']"
          routerLinkActive="underline"
        >
          API calls
        </button>
        <button
          class="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          [routerLink]="['dynamic-component']"
          routerLinkActive="underline"
        >
          Dynamic component
        </button>
        <button
          class="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          [routerLink]="['host-directives']"
          routerLinkActive="underline"
        >
          Host directives
        </button>
        <button
          class="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          [routerLink]="['overlay']"
          routerLinkActive="underline"
        >
          Overlay
        </button>
      </div>
    </div>
    <div class="h-full w-full overflow-hidden">
      <router-outlet></router-outlet>
    </div>
  `,
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class App {}
