import { Component, OnInit } from '@angular/core';
// import { RegisterModel } from '../../models/register.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fname: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      lname: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(16)
      ]],
      email: ['' , [
        Validators.required,
        Validators.pattern('^\\w+[\\w-\\.]*\\@\\w+((-\\w+)|(\\w*))\\.[a-z]{2,3}$')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16)
      ]],
      confirmPassword: ['',
        this.passValidator
      ]
    });

    this.f.password.valueChanges
      .subscribe(
        x => this.f.confirmPassword.updateValueAndValidity()
      );
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password'); // magic is this
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }

  onRegisterSubmit() {
    console.log(this.registerForm.value);

    // stop here if form is invalid
    // this is not necesary because I set the submit button to disabled if the form is not valid
    if (this.registerForm.invalid) {
      return;
    }
  }
}
