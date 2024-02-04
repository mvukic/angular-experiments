import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatSidenavModule, RouterOutlet, MatListModule, MatToolbar, MatIcon, RouterLink, RouterLinkActive, MatIconButton],
  styles: `
    :host {
      display: flex;
      flex-direction: column;
    }
  `,
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="sidenav.toggle()"><mat-icon>menu</mat-icon></button>
      Angular experiments {{ VERSION }}
    </mat-toolbar>
    <mat-sidenav-container style="height: 100%">
      <mat-sidenav #sidenav mode="side" opened fixedInViewport fixedTopGap="70">
        <mat-list>
          <a mat-list-item [routerLink]="['api-calls']" routerLinkActive="active">API calls</a>
          <a mat-list-item [routerLink]="['params-and-state']" [queryParams]="{ debug: 1 }" [state]="{ debug: 1 }" routerLinkActive="active">
            Params and state
          </a>
          <a mat-list-item [routerLink]="['lazy-load-component']" routerLinkActive="active">Lazy load component</a>
          <a mat-list-item [routerLink]="['dynamic-component']" routerLinkActive="active">Dynamic component</a>
          <a mat-list-item [routerLink]="['host-directives']" routerLinkActive="active">Host directives</a>
          <a mat-list-item [routerLink]="['signals']" routerLinkActive="active">Signals</a>
          <a mat-list-item [routerLink]="['cdk-listbox']" routerLinkActive="active">CDK ListBox</a>
          <a mat-list-item [routerLink]="['custom-selector']" routerLinkActive="active">Selector</a>
          <a mat-list-item [routerLink]="['bind-inputs', 'b']" [queryParams]="{ c: 'c' }" routerLinkActive="active">Bind inputs</a>
          <a mat-list-item [routerLink]="['animations']" routerLinkActive="active">Animations</a>
          <a mat-list-item [routerLink]="['event-manager']" routerLinkActive="active">Events</a>
          <a mat-list-item [routerLink]="inputMappersRoute" routerLinkActive="active">Input mappers</a>
          <a mat-list-item [routerLink]="['forms-module']" routerLinkActive="active">Forms</a>
          <a mat-list-item [routerLink]="['expandable']" routerLinkActive="active">Expandable</a>
          <a mat-list-item [routerLink]="['container']" routerLinkActive="active">Container</a>
          <a mat-list-item [routerLink]="['table']" routerLinkActive="active">Table</a>
          <a mat-list-item [routerLink]="['custom-overlay']" routerLinkActive="active">Custom overlay</a>
          <a mat-list-item [routerLink]="auxRoute" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Aux outlet</a>
          <a mat-list-item [routerLink]="['new-str-dirs']" routerLinkActive="active">New structure dirs</a>
          <a mat-list-item [routerLink]="['test-cmp', 'input-value']" routerLinkActive="active">Test cmp</a>
        </mat-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <router-outlet />
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export default class App {
  VERSION = VERSION.full;

  auxRoute = [
    {
      outlets: {
        primary: 'aux-outlets',
        outletFooter: 'cmp-aux-footer-1',
      },
    },
  ];
  inputMappersRoute = [
    {
      outlets: {
        primary: 'input-mappers',
        outletFooter: 'cmp-aux-footer-2',
      },
    },
  ];
}
