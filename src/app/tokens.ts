import { InjectionToken } from '@angular/core'

export type Options = { option: string }

export const optionsFactory = (): Options => ({ option: 'option 1' })

export const OPTIONS_TOKEN = new InjectionToken<Options>('OPTIONS_TOKEN')
