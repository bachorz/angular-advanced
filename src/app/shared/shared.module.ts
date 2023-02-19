import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectionModule} from '../selection/selection.module';
import {SelectableDirective} from '../selection/selectable.directive';
import {SelectionProviderComponent} from '../selection/selection-provider.component';
import {SelectDirective} from '../selection/select.directive';


@NgModule({
  imports: [
    CommonModule,
    SelectionModule
  ],
  exports: [SelectableDirective, SelectionProviderComponent, SelectDirective],
  declarations: []
})
export class SharedModule { }
