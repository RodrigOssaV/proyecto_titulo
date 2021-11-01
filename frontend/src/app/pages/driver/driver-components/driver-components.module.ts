import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { AddFormComponent } from './add-form/add-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { GraphicDriverComponent } from './graphic-driver/graphic-driver.component';


@NgModule({
  declarations: [
    AddFormComponent,
    UpdateFormComponent,
    DeleteFormComponent,
    GraphicDriverComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
  ],
  exports: [
    AddFormComponent,
    UpdateFormComponent,
    DeleteFormComponent,
    GraphicDriverComponent
  ]
})
export class DriverComponentsModule { }
