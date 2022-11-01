import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App1Component } from './app/app-1.component';
import { App2Component } from './app/app-2.component';

import routes from './app/routing/routes';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './app/http/interceptor';
import { ApplicationRef } from '@angular/core';

bootstrapApplication(window.innerWidth > 1000 ? App1Component : App2Component, {
    providers: [provideRouter(routes), provideHttpClient(withInterceptors([httpInterceptor]))],
})
    .then((appRef: ApplicationRef) => console.log(appRef.componentTypes))
    .catch((err) => console.error(err));
