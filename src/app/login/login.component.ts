import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    if (!this.validateForm.valid) {
      console.log("fail");
      alert('Your input is invalid. Please try again.')
      return
    } else if ((this.validateForm.value.userName == "admin@test.com") && (this.validateForm.value.password == "123456")) {
      // localStorage.setItem('username', "admin@test.com")
      // localStorage.setItem('pwd', "123456")
      localStorage.setItem('set-token', "mootsadmin")
      this.router.navigate(['/todo'])
    } else {
      localStorage.setItem('set-token', "moots")
      this.router.navigate(['/home'])
    }
  }

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{1,8}$/)]]
    });
  }
}