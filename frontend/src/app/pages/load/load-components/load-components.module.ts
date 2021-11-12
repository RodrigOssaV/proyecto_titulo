import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { LoadAddFormComponent } from './load-add-form/load-add-form.component';
import { GraphicLoadComponent } from './graphic-load/graphic-load.component';

@NgModule({
  declarations: [
    LoadAddFormComponent,
    GraphicLoadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    LoadAddFormComponent,
    GraphicLoadComponent
  ]
})
export class LoadComponentsModule { }
