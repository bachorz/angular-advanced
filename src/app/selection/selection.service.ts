import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class SelectionService<T> {

  constructor() { }

  selection: T;

  setSelection(item: T) {
    this.selection = item;
    this.selectionChange.emit(this.selection);
  }

  // tslint:disable-next-line:member-ordering
  selectionChange = new EventEmitter<T>();

}
