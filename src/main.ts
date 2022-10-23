import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { App1Component } from './app/app-1.component'
import { App2Component } from './app/app-2.component'

import { routes } from './routes'

import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { httpInterceptor } from './app/interceptor'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'

bootstrapApplication(window.innerWidth > 1000 ? App1Component : App2Component, {
    providers: [
      provideRouter(routes),
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      provideHttpClient(withInterceptors([httpInterceptor]))
    ],
})
    .then((appRef) => console.log(appRef.componentTypes))
    .catch((err) => console.error(err))
