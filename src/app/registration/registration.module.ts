import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldsMatchDirective } from './fields-match.directive';
import { ValidationFeedbackComponent } from './validation-feedback.component'
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrationComponent, FieldsMatchDirective, ValidationFeedbackComponent],
  exports: [RegistrationComponent, FieldsMatchDirective, ValidationFeedbackComponent]
})
export class RegistrationModule { }
