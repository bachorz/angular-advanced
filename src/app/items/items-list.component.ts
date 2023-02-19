import { Component, OnInit } from '@angular/core';
import {ItemsDataService} from './items-data.service';
import {SelectionService} from '../selection/selection.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'items-list',
  template: `
<div class="list-group">
    <div class="list-group-item" *ngFor="let item of items" [selectable]="item">
      {{item.name}}
    </div>
</div>
<input class="form-control" (keyup.enter)=" items.push({name:$event.target.value})">
  `,
  // viewProviders: [SelectionService],
  styles: []
})
export class ItemsListComponent implements OnInit {

  items = [];

  constructor(private service: ItemsDataService) {
    this.items = service.getData();
  }

  ngOnInit() {
  }

}
