import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { App } from './app/app';

import routes from './app/routing/routes';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './app/http/interceptor';

bootstrapApplication(App, {
  providers: [provideRouter(routes, withPreloading(PreloadAllModules)), provideHttpClient(withInterceptors([httpInterceptor]))],
}).catch((err) => console.error(err));
