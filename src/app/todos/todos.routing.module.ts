import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos.component';
import {TodoGuardGuard} from './todo-guard.guard';

const routes: Routes = [
  {
    path: 'todos',
    component: TodosComponent,
    canActivateChild: [
      TodoGuardGuard
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodosRoutingModule { }
