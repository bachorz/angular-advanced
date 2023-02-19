import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, AbstractControl, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'form-creator',
  template: `
    <div class="row">
      <div class="col">
        <form [formGroup]="formDefinition">
          <div class="form-group">
            <input type="text" class="form-control" formControlName="title">
          </div>
          <div *ngFor="let field of getControlsList(this.formDefinition.get('fields'))" class="border rounded p-2 mb-2">
            <div [ngSwitch]="field.get('type').value">
              <div *ngSwitchCase=" 'text' ">
                <h5>Text Field</h5>
                <div class="form-group" [formGroup]="field">
                  <label>Label:</label>
                  <input type="text" class="form-control" formControlName="label">
                  <label><input type="checkbox" (change)="addHints(field, $event.target.checked)">Hints</label>
                  <div *ngIf="field.get('hints')">
                    <input type="text" class="form-control" formControlName="hints">
                  </div>
                </div>
              </div>
              <div *ngSwitchCase=" 'options' ">
                <h5>Options Field</h5>
                <div class="form-group" [formGroup]="field">
                  <label>Label:</label>
                  <input type="text" class="form-control" formControlName="label">
                </div>
                <div class="form-group">
                  <label>Checkbox Options</label>
                  <div class="input-group" *ngFor="let option of getControlsList(field.get('options')); let i = index" [formGroup]="option">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input type="checkbox" class="form-check" formControlName="selected">
                      </div>
                    </div>
                    <input type="text" class="form-control" formControlName="value">
                    <span class="close" (click)="removeOption(field.get('options'), i)">&times;</span>
                    <span class="close" (click)="addUpOption(field.get('options'), i)">^</span>
                  </div>
                  <button class="btn mt-1" (click)="addOption(field.get('options'))">Add Option</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col">
        <pre>{{formDefinition.value | json }}</pre>
      </div>
    </div>
  `,
  styles: []
})

export class FormCreatorComponent implements OnInit {

  formDefinition: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formDefinition = this.fb.group({
      title: this.fb.control(''),
      fields: this.fb.array([
        this.createTextField(),
        this.createOptionsField()
      ])
    });
  }

  createTextField() {
    return this.fb.group({
      type: this.fb.control('text'),
      label: this.fb.control('')
    });
  }

  addHints(field: FormGroup, checked: boolean) {
    if (checked) {
      field.addControl('hints', this.fb.control(''));
    } else {
      field.removeControl('hints');
    }
  }

  createOptionsField() {
    return this.fb.group({
      type: this.fb.control('options'),
      label: this.fb.control(''),
      options: this.fb.array([
        this.createOption('test 1'),
        this.createOption('test 2'),
        this.createOption('test 3'),
        this.createOption('test 4')
      ])
    });
  }

  addOption(options: FormArray) {
    options.push( this.createOption());
  }

  addUpOption(options: FormArray, index: number) {
   options.insert(index - 1 , this.createOption());
  }

  removeOption(options: FormArray, index: number) {
    options.removeAt(index);
  }

  getControlsList(fields: AbstractControl) {
    if (!(fields instanceof FormArray)) {
      return [];
    }
    return fields.controls;
  }
  createOption(defaultValue = '', selected = false) {
    return this.fb.group({
      selected: this.fb.control(selected),
      value: this.fb.control(defaultValue)
    });
  }

  ngOnInit() {
  }
}
