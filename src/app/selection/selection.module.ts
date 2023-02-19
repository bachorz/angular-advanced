import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectionService} from './selection.service';
import { SelectableDirective } from './selectable.directive';
import { SelectionProviderComponent } from './selection-provider.component';
import { SelectDirective } from './select.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SelectableDirective, SelectionProviderComponent, SelectDirective],
  exports: [SelectableDirective, SelectionProviderComponent, SelectDirective],
  providers: [
    // SelectionService
  ]
})
export class SelectionModule { }
