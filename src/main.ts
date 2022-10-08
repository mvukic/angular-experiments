import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App1Component } from './app/app-1.component';
import { App2Component } from './app/app-2.component';

import { environment } from './environments/environment';
import { routes } from './routes';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './app/interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(window.innerWidth > 1000 ? App1Component : App2Component, {
  providers: [
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    importProvidersFrom(HttpClientModule),
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
  ],
})
  .then((appRef) => console.log(appRef.componentTypes))
  .catch((err) => console.error(err));
