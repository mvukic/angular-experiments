import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'sidenav-cmp',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        gap: 2px;
        padding: 1px;
        height: 100%;
      }
      .link {
        text-decoration: none;
        padding: 5px;
        text-align: center;
        text-underline-offset: 3px;
        &:hover {
          background-color: aquamarine;
          text-decoration: underline;
          text-underline-style: dash;
          cursor: pointer;
        }
        &.active {
          color: forestgreen;
          text-decoration: underline dashed blue;
        }
      }
    `,
  ],
  // prettier-ignore
  template: `
    <span class="link" [routerLink]="['api-calls']" routerLinkActive="active">API calls</span>
    <span class="link" [routerLink]="['params-and-state']" [queryParams]="{ debug: 1 }" [state]="{ debug: 1 }" routerLinkActive="active">Params and state</span>
    <span class="link" [routerLink]="['lazy-load-component']" routerLinkActive="active">Lazy load component</span>
    <span class="link" [routerLink]="['dynamic-component']" routerLinkActive="active">Dynamic component</span>
    <span class="link" [routerLink]="['host-directives']" routerLinkActive="active">Host directives</span>
    <span class="link" [routerLink]="['signals']" routerLinkActive="active">Signals</span>
    <span class="link" [routerLink]="['cdk-listbox']" routerLinkActive="active">CDK ListBox</span>
    <span class="link" [routerLink]="['custom-selector']" routerLinkActive="active">Selector</span>
    <span class="link" [routerLink]="['bind-inputs', 'b']" [queryParams]="{ c: 'c' }" routerLinkActive="active">Bind inputs</span>
    <span class="link" [routerLink]="['animations']" routerLinkActive="active">Animations</span>
    <span class="link" [routerLink]="['event-manager']" routerLinkActive="active">Events</span>
    <span class="link" [routerLink]="inputMappersRoute" routerLinkActive="active">Input mappers</span>
    <span class="link" [routerLink]="['forms-module']" routerLinkActive="active">Forms</span>
    <span class="link" [routerLink]="['expandable']" routerLinkActive="active">Expandable</span>
    <span class="link" [routerLink]="['container']" routerLinkActive="active">Container</span>
    <span class="link" [routerLink]="['table']" routerLinkActive="active">Table</span>
    <span class="link" [routerLink]="['custom-overlay']" routerLinkActive="active">Custom overlay</span>
    <span class="link" [routerLink]="auxRoute" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Aux outlet</span>
    <span class="link" [routerLink]="['new-str-dirs']" routerLinkActive="active">New structure dirs</span>
    <span class="link" [routerLink]="['test-cmp']" routerLinkActive="active">Test cmp</span>
  `,
})
export default class SidenavCmp {
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
