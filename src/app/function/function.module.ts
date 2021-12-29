import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionRoutingModule } from './function-routing.module';
import { DragComponent } from './drag/drag.component';
import { CheckboxComponent } from './checkbox/checkbox.component';


@NgModule({
  declarations: [
    DragComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    FunctionRoutingModule
  ]
})
export class FunctionModule { }
