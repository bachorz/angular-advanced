import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsEditorComponent } from './forms-editor.component';
// import { FormsFieldEditorComponent } from './forms-field-editor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormCreatorComponent} from './form-creator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
 //   FormsEditorComponent
    FormCreatorComponent
  ],
  declarations: [
    // FormsEditorComponent,
    // FormsFieldEditorComponent
    FormCreatorComponent
  ]
})
export class FormsEditorModule { }
