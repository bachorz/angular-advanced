import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AsyncValidatorFn, ValidationErrors, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'registration',
  template: `
    <h3>Registration</h3>
    <form [formGroup]="registrationForm">
      <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" formControlName="username">
        <div *ngIf="registrationForm.get('username').pending">Validating username ...</div>
        <validation-feedback controlName="username">
          <div *ngIf="registrationForm.get('username').hasError('invalid-username')">
            Username is taken or invalid
          </div>
        </validation-feedback>
      </div>
      <div class="form-group">
        <label>E-Mail:</label>
        <input type="text" class="form-control" formControlName="email">
        <validation-feedback controlName="email"></validation-feedback>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="text" class="form-control" formControlName="password">
        <validation-feedback controlName="password">
          <div *ngIf="registrationForm.get('password').getError('password') as error">
            Password has to contain
              <div *ngIf="error.lowercase"> - lowercase letters </div>
              <div *ngIf="error.uppercase"> - uppercase letters </div>
              <div *ngIf="error.number"> - numbers </div>
              <div *ngIf="error.special"> - special characters </div>
          </div>
        </validation-feedback>
      </div>
      <div class="form-group">
        <label>Repeat Password</label>
        <input type="text" class="form-control" formControlName="repeat_password" 
                                                [fieldsMatch]="registrationForm.get('password')">
        <validation-feedback controlName="repeat_password">
          <div *ngIf="registrationForm.get('repeat_password').hasError('password_match')">
            Passwords must match
          </div>
        </validation-feedback>
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-success btn-block" value="Register">
      </div>
    </form>
  `,
  styles: [`
    form .ng-invalid.ng-touched,
    form .ng-invalid.ng-dirty {
        border: 2px solid red !important;
    }
  `]
})
export class RegistrationComponent implements OnInit {

  registrationForm = this.form.group({
    username: this.form.control('', [
      Validators.required,
      Validators.minLength(3)
    ], [
      this.validateUsername
    ]),
    email: this.form.control('', [
      Validators.required,
      Validators.email
    ]),
    password: this.form.control('', [
      Validators.required,
      this.validatePassword({
        lowercase: true,
        uppercase: true,
        number: true
      })
    ]),
    repeat_password: this.form.control('')
  })

  validateUsername<AsyncValidatorFn>(control: FormControl) {
    const value = control.value;

    return Observable.create( (observer:Observer<ValidationErrors | null>) => {
        setTimeout(()=>{
          const notAllowed = ['demo','admin','user']
          const notValid = notAllowed.includes(value)
          const result = notValid? {
            'invalid-username': value
          } : null
          observer.next(result)
          observer.complete()
        },2000)
    })
  }

  validatePassword(options: {
    uppercase?: boolean;
    lowercase?: boolean;
    number?: boolean;
    special?: boolean;
  }): ValidatorFn {

    return (control: FormControl) => {

      const hasUppercase = control.value.match(/[A-Z]/)
      const hasLowercase = control.value.match(/[a-z]/)
      const hasNumber = control.value.match(/[\d]/)
      const hasSpecial = control.value.match(/[\W]/)

      const errors = {}
      let valid = true

      if (options.lowercase && !hasLowercase) {
        errors['lowercase'] = true
        valid = false
      }
      if (options.uppercase && !hasUppercase) {
        errors['uppercase'] = true
        valid = false
      }
      if (options.number && !hasNumber) {
        errors['number'] = true
        valid = false
      }
      if (options.special && !hasSpecial) {
        errors['special'] = true
        valid = false
      }

      return valid ? null : {
        'password': errors
      }
    }
  }

  constructor(private form: FormBuilder) { }

  ngOnInit() {
    console.log(this.registrationForm)

    // this.registrationForm.get('username').hasError
  }

}
