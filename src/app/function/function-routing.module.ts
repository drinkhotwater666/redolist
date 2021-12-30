import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component'
import { DragComponent } from './drag/drag.component'
import { TodoComponent } from '../todos/todo/todo.component'
import { DragdropsComponent } from '../dragdrop/dragdrops/dragdrops.component'
const routes: Routes = [
  // {
  //   path: 'drag',
  //   component: DragComponent
  // },
  {
    path: 'checkbox',
    component: TodoComponent
  },
  {
    path: 'drag',
    component: DragdropsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionRoutingModule { }
