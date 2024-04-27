import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withHashLocation, withViewTransitions } from '@angular/router';

import routes from './routing/routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withHashLocation(), withComponentInputBinding(), withViewTransitions()),
    provideAnimationsAsync(),
  ],
};
