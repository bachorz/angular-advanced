import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosService } from './todos.service';
import {TodosRoutingModule} from './todos.routing.module';
import {QuickTodoComponent} from './quick-todo.component';
import {TodoGuardGuard} from './todo-guard.guard';

@NgModule({
  imports: [
    CommonModule, TodosRoutingModule
  ],
  declarations: [TodosComponent, QuickTodoComponent],
  // exports: [TodosComponent],
  providers: [TodosService, TodoGuardGuard],
  exports: [QuickTodoComponent]
})
export class TodosModule { }
