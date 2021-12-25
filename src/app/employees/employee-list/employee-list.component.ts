import { Component, OnInit } from '@angular/core';
import { Person } from '../employee.type'
import { NzMessageService } from 'ng-zorro-antd/message';
import { EmployeesService } from '../employees.service'
import { HttpResponse } from '@angular/common/http'
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  isVisible = false;

  constructor(private message: NzMessageService, private EmployeesService: EmployeesService, private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.pattern(/^[0-9]{1,2}$/)]],
      gender: ['female', [Validators.required]],
      address: []
    });
  }
  validateForm: FormGroup;

  listOfData: Person[] = []
  curPage = 1
  pageSize = 5
  total: any
  editid!: number;

  cancel(): void {
    this.message.info('click cancel');
  }

  confirm(id: number) {
    // console.log("remove", id);
    this.EmployeesService.del(id).subscribe(res => {
      console.log(res);
      this.fetchData()
    })
  }

  fetchData() {
    this.EmployeesService.fetchData(this.curPage, this.pageSize).subscribe((res: HttpResponse<Person[]>) => {
      // console.log(res);
      this.total = res.headers.get('X-Total-Count')
      this.listOfData = res.body!
    })
  }

  trackById(index: number, employee: Person) {
    return employee.id
  }

  edit(id: number) {
    this.isVisible = true;
    this.editid = id
    this.EmployeesService.findEmployeeId(id).subscribe((employee: Person) => {
      // console.log(employee);
      //display info in the form
      this.validateForm.patchValue(employee)

    })
  }
  handleCancel() {
    this.isVisible = false
    this.reset()
  }
  handleOk() {
    const form = this.validateForm
    const { controls } = form

    Object.keys(controls).forEach(key => {
      controls[key].markAsDirty()
      controls[key].updateValueAndValidity()
    })
    // console.log(form.valid);//check if valid
    if (!form.valid) {
      return
    }
    const params = { ...form.value }

    this.EmployeesService.update(this.editid, params).subscribe((res: Person) => {
      // console.log('edit success');
      this.isVisible = false

      let index = this.listOfData.findIndex(emp => emp.id === res.id)
      // console.log(res);
      this.listOfData[index] = res
      location.reload();
      this.reset()
    })
  }

  reset() {
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  ngOnInit(): void {
    this.fetchData()
  }

}
