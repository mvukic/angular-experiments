import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { App } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations';

import routes from './app/routing/routes';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './app/http/interceptor';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideAnimations()
],
}).catch((err) => console.error(err));
