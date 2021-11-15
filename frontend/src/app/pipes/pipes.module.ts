import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversionPipe } from './conversion.pipe';

@NgModule({
  declarations: [
    ConversionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConversionPipe
  ]
})
export class PipesModule { 

  static forRoot() {
    return {
        ngModule: PipesModule,
        providers: [],
    };
  }
  
}
