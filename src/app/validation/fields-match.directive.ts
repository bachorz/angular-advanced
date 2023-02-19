import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS, FormControl } from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';


@Directive({
  selector: '[fieldsMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FieldsMatchDirective,
      multi: true
    }
  ]
})
export class FieldsMatchDirective implements Validator {

  @Input()
  fieldsMatch: FormControl;
  //
  // validate(control: AbstractControl): ValidationErrors | null {
  //   if(control.value != this.fieldsMatch.value){
  //     return {
  //       'password_match':true
  //     }
  //   }
  //   return null
  // }
  //
  // registerOnValidatorChange(fn: () => void) {
  //   this.subscription = this.fieldsMatch.valueChanges.subscribe(fn)
  // }
  //


  constructor() {
    console.log(this);
  }

  registerOnValidatorChange(fn: () => void) {
    this.subscription = this.fieldsMatch.valueChanges.subscribe(fn);
  }

  validate(cntrol: AbstractControl): ValidationErrors | null {
    if (cntrol.value !== this.fieldsMatch.value) {
      return {
        'password_match': true
      };
    }
  }

  // tslint:disable-next-line:member-ordering
  subscription: Subscription;

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}
