import { bootstrapApplication, EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { App } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations';

import routes from './app/routing/routes';

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './app/http/interceptor';
import { LogEventPlugin } from './app/events/log-event-plugin.service';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
    provideHttpClient(withFetch(), withInterceptors([httpInterceptor])),
    provideAnimations(),
    {
      provide: EVENT_MANAGER_PLUGINS,
      useClass: LogEventPlugin,
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
