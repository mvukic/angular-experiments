import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import routes from './app/routing/routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './app/http/interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { LogEventPlugin } from './app/events/log-event-plugin.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(withFetch(), withInterceptors([httpInterceptor])),
    provideAnimations(),
    {
      provide: EVENT_MANAGER_PLUGINS,
      useClass: LogEventPlugin,
      multi: true,
    },
  ],
};
