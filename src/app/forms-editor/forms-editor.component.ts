// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'forms-editor',
//   template: `
//     <h3>Form editor</h3>
//     <div class="row">
//       <div class="col-3">
//         <forms-field-editor [data_input]="fieldData" (dataChange)="formSaved($event)"></forms-field-editor>
//       </div>
//       <div>
// <!--        <pre>Outer Model: {{ fieldData | json }}</pre>-->
//       </div>
//     </div>
//   `,
//   styles: []
// })
// export class FormsEditorComponent implements OnInit {
//
//   fieldData = {
//     name: 'Default value',
//     active: true,
//     enabled: true,
//     hints: '',
//     type: 'text'
//     //  extra: ''
//   };
//
//   formSaved(data) {
//     this.fieldData = data;
//     console.log('saved', data);
//   }
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
