import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [NgIf],
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .header {
          flex: 0 0 fit-content;
        }
        .sub-header {
          flex: 0 0 fit-content;
        }
        .sidenav-and-content {
          flex: 1 1 auto;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          .sidenav {
            flex: 0 0 auto;
            overflow: hidden;
          }
          .content {
            flex: 1 1 auto;
            overflow: hidden;
          }
        }
      }
    `,
  ],
  template: `
    <div class="header">
      <ng-content select="[header]" />
    </div>
    <div class="sub-header">
      <ng-content select="[subHeader]" />
    </div>
    <div class="sidenav-and-content">
      <div class="sidenav">
        <ng-content select="[sidenav]" />
      </div>
      <div class="content">
        <ng-content select="[content]" />
      </div>
    </div>
  `,
})
export class AppContainer {}
