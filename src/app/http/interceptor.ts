import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  console.log('Api call', req.url);
  return next(req);
};
