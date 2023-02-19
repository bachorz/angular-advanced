import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, AsyncValidatorFn, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'registration',
  template: `
    <h3>Registration</h3>
    <form [formGroup]="registrationForm">
      <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" formControlName="username">
        <div *ngIf="registrationForm.get('username').pending">Validating username .... </div>
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
        <!--        <div class="validation-feedback" *ngIf="registrationForm.get('email').touched || registrationForm.get('email').dirty">-->
        <!--          <div *ngIf="registrationForm.get('email').hasError('required')">-->
        <!--            Field is required-->
        <!--          </div>-->
        <!--          <div *ngIf="registrationForm.get('email').hasError('email')">-->
        <!--            E-mail is incorrect-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="text" class="form-control" formControlName="password">
        <validation-feedback controlName="password">
          <!--       <div class="validation-feedback" *ngIf="registrationForm.get('password').touched || registrationForm.get('password').dirty"> -->
          <!--                 <div *ngIf="registrationForm.get('password').hasError('required')">-->
          <!--                   Field is required-->
          <!--                 </div>-->
          <div *ngIf="registrationForm.get('password').getError('password') as error">
            Password has to contain
            <span *ngIf="error.lowercase"> lowercase letter </span>
            <span *ngIf="error.uppercase"> uppercase letter </span>
            <span *ngIf="error.number"> number </span>
            <span *ngIf="error.special"> special characters </span>
          </div>
        </validation-feedback>
      </div>
      <div class="form-group">
        <label>Repeat Password</label>
        <input type="text" class="form-control" formControlName="repeat_password" [fieldsMatch]="registrationForm.get('password')">
        <validation-feedback controlName="repeat_password">
          <div *ngIf="registrationForm.get('repeat_password').hasError('password_match')">
            Password has to match
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
    form .ng-invalid.dirty {
      border: 2px solid red !important;
    }
    form .ng-invalid.ng-touched,
    .ng-invalid.ng-dirty ~ .validation-feedback {
      color: red;
    }
  `]
})
export class RegistrationComponent implements OnInit {

  registrationForm = this.form.group({
    username: this.form.control('', [
      Validators.required,
      Validators.minLength(4)
    ], [
      this.validateUserName
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
      //    Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$')
    ]),
    repeat_password: this.form.control('')});

  // tslint:disable-next-line:no-shadowed-variable
  validateUserName<AsyncValidatorFn>(control: FormControl) {
    const value = control.value;
    const notAllowed = ['demo', 'admin', 'user'];

    return Observable.create((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        const notValid = notAllowed.includes(value);
        const result = notValid ? {
          'invalid-username': value
        } : null;
        observer.next(result);
        observer.complete();
      }, 2000);
    });
  }

  // tslint:disable-next-line:no-shadowed-variable
  validatePassword(options: {
    uppercase?: boolean;
    lowercase?: boolean;
    number?: boolean;
    special?: boolean
  }): ValidatorFn {

    return (control: FormControl) => {
      const hasUppercase = control.value.match('[A-Z]');
      const hasLowercase = control.value.match('[a-z]');
      const hasNumber = control.value.match('[\\d]');
      const hasSpecial = control.value.match('[\\W]');

      const errors = {};
      let valid = true;

      if (options.lowercase && !hasLowercase) {
        errors['lowercase'] = true;
        valid = false;
      }
      if (options.uppercase && !hasUppercase) {
        errors['uppercase'] = true;
        valid = false;
      }
      if (options.number && !hasNumber) {
        errors['number'] = true;
        valid = false;
      }
      if (options.special && !hasSpecial) {
        errors['special'] = true;
        valid = false;
      }

      return valid ? null : {
        'password': errors
      };
    };
  }

  constructor(private form: FormBuilder) { }

  ngOnInit() {
    console.log(this.registrationForm);

    // this.registrationForm.get('username').hasError
  }

}
