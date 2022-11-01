import { InjectionToken } from '@angular/core';

export type Options = { option: string };

export const OPTIONS_TOKEN = new InjectionToken<Options>('OPTIONS_TOKEN');

export const defaultOptions: Options = { option: 'default option 1' };
