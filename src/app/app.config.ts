import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import routes from './routing/routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
