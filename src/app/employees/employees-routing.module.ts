import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component'
import { EmployeeAddComponent } from './employee-add/employee-add.component'
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

const routes: Routes = [
  {
    path: 'add',
    component: EmployeeAddComponent
  }, {
    path: '',
    component: EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, NzTableModule, NzDividerModule]
})
export class EmployeesRoutingModule { }
