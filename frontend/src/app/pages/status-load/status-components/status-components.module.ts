import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { StatusUpdateFormComponent } from './status-update-form/status-update-form.component';

@NgModule({
  declarations: [
    StatusUpdateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StatusUpdateFormComponent
  ]
})
export class StatusComponentsModule { }
