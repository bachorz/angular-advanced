import { Component, OnInit } from '@angular/core';
import {SelectionService} from './selection.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'selection-provider',
  template: `
    <ng-content></ng-content>
  `,
  providers: [SelectionService],
  styles: []
})
export class SelectionProviderComponent implements OnInit {

  constructor(public selec: SelectionService<any>) { }

  ngOnInit() {
  }

}
