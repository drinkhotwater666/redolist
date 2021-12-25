import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EmployeesService } from '../employees.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})

export class EmployeeAddComponent implements OnInit {

  constructor(private fb: FormBuilder, private es: EmployeesService, private message: NzMessageService, private router: Router) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.pattern(/^[0-9]{1,2}$/)]],
      gender: ['female', [Validators.required]],
      address: []
    });
  }
  validateForm: FormGroup;

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    if (!this.validateForm.valid) {
      return
    }
    const params = { ...this.validateForm.value }
    // console.log(params);
    this.es.add(params).subscribe(res => {
      this.message.create('success', 'Success');
      this.reset()
      this.router.navigate(['/home/employees'])
    })
  }

  reset() {
    this.validateForm.reset({
      gender: 'female'
    });
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.reset()
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };



  ngOnInit(): void {
  }

}
