import {Directive, Input, Output} from '@angular/core';
import {SelectionService} from './selection.service';

@Directive({
  selector: '[select]',
  providers: [SelectionService]
})
export class SelectDirective {

  constructor(private selection: SelectionService<any>) { }

  @Input('select')
  set setSelection(newSelection) {
    this.selection.setSelection(newSelection);
  }

  @Output()
  changeSelect = this.selection.selectionChange;
}
