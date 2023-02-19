import {Directive, Host, HostBinding, HostListener, Input} from '@angular/core';
import {SelectionService} from './selection.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[selectable]'
})
export class SelectableDirective {

  constructor(private selection: SelectionService<any>) {
    console.log('hello from selectable');
  }

  @Input('selectable')
  item;

  @HostListener('click')
  select() {
    this.selection.setSelection(this.item);
  }

  // tslint:disable-next-line:member-ordering
  @HostBinding('class.active')
  selected = false;

  // tslint:disable-next-line:member-ordering
  subscription;

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // tslint:disable-next-line:triple-equals
    this.selected = this.selection.selection == this.item;
    this.subscription =
    this.selection.selectionChange.subscribe(selection => {
      // tslint:disable-next-line:triple-equals
      this.selected = selection == this.item;
     });
  }

}
