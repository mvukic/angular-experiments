import { computed, Directive, effect, inject, Injectable, input, signal } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Injectable({ providedIn: 'root' })
export class AuthService {
  roles = signal(['role_1', 'role_2']);
}

@Directive({
  selector: '[requiresRole]',
  standalone: true,
  hostDirectives: [MatTooltip],
  host: {
    class: 'requires-role',
    '[class.disabled]': '!authorized()',
  },
})
export class RoleAccessDir {
  #tooltip = inject(MatTooltip);
  #auth = inject(AuthService);

  role = input.required<string>({ alias: 'requiresRole' });

  authorized = computed(() => this.#auth.roles().includes(this.role()));

  constructor() {
    effect(() => {
      this.#tooltip.disabled = this.authorized();
    });
    effect(() => {
      this.#tooltip.message = `This feature requires '${this.role()}' role`;
    });
  }
}
