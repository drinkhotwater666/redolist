import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component'
import { DragComponent } from './drag/drag.component'

const routes: Routes = [
  {
    path: 'drag',
    component: DragComponent
  },
  {
    path: 'checkbox',
    component: CheckboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionRoutingModule { }
