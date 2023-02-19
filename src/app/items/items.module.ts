import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list.component';
import { ItemsDataService } from './items-data.service';
import {SelectionModule} from '../selection/selection.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ItemsListComponent],
  exports : [ItemsListComponent],
  providers: []
})
export class ItemsModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ItemsModule,
      providers: [
        ItemsDataService
      ]
    };
  }
}
