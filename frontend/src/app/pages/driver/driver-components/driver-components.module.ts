import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AddFormComponent } from './add-form/add-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { UploadFormComponent } from './upload-form/upload-form.component';


@NgModule({
  declarations: [
    AddFormComponent,
    UpdateFormComponent,
    DeleteFormComponent,
    UploadFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AddFormComponent,
    UpdateFormComponent,
    DeleteFormComponent,
    UploadFormComponent
  ]
})
export class DriverComponentsModule { }
