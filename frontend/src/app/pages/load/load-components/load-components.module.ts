import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { LoadAddFormComponent } from './load-add-form/load-add-form.component';
import { SearchDateFormComponent } from './search-date-form/search-date-form.component';

@NgModule({
  declarations: [
    LoadAddFormComponent,
    SearchDateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    LoadAddFormComponent,
    SearchDateFormComponent
  ]
})
export class LoadComponentsModule { }
