import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule      // 👈 Para que pueda usar la funcionabilidades routerLink en sidebar.component.html, esto es propio de angular.
  ]
})
export class SharedModule { }
