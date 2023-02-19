import { Component, OnInit, Input, Optional } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'validation-feedback',
  template: `
    <div class="validation-feedback" *ngIf="control.touched || control.dirty">
      <div *ngIf="control.hasError('required')">
        Field is required
      </div>
      <div *ngIf="control.getError('minlength') as error">
        Field has to at least {{error.requiredLength}} letters
      </div>
      <div *ngIf="control.hasError('email')">
        E-mail is incorrect
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .validation-feedback {
      color: red;
    }
  `]
})
export class ValidationFeedbackComponent implements OnInit {

  @Input()
  control;

  @Input()
  controlName;

  constructor(@Optional() private formGroup: FormGroupDirective) {
  }

  ngOnInit() {
    if (!this.control && !this.controlName) {
      throw new Error('Validation Feedback must have [control] or [controlName] inputs');
    } else {
      if (this.controlName && this.formGroup) {
        this.control = this.formGroup.form.get(this.controlName);
      }
    }
  }

}
