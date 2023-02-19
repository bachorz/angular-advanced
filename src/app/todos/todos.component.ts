import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';
import {Observable} from 'rxjs/Observable';
import {Todo} from './models/todo';

@Component({
  selector: 'todos',
  template: `
    <div class="row">
      <div class="col">
        <h3>Search Todos</h3>
        <div class="input-group">
          <input type="text" class="form-control" (keyup.enter)="search($event.target.value)" placeholder="Search .... "
                 [value]="todosService.params.getValue().query">
        </div>
        <div class="list-group">
          <div class="list-group-item" *ngFor="let todo of todos | async">
            {{todo.title}}
          </div>
        </div>
        <div class="input-group" *ngIf="todos | async">
          <div class="input-group-prepend">
            <div class="input-group-text">
              Showing
            </div>
          </div>
          <input type="number" class="form-control"
                 (change)="todosService.setPage($event.target.value)"
                 min="1"
                 [value]="todosService.params.getValue().page"
                 [max]="todosService.state.pages">
          <select class="form-control" (change)="todosService.setPerPage($event.target.value)" [value]="todosService.params.getValue().perpage">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <div class="input-group-append">
            <div class="input-group-text">
              of {{ todosService.state.total || 0 }} todos
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="alert alert-danger" *ngIf="error">{{error}}</div>
        <h3>Create Todo</h3>
        <div class="form-group">
          <input type="text" class="form-control" #titleRef>
        </div>
        <button class="btn btn-success" (click)="addTodo(titleRef.value)">Add Todo</button>
      </div>
    </div>
  `,
  styles: []
})
export class TodosComponent implements OnInit {

  error: boolean;

  todos = this.todosService.getTodos();

  title: string;

  addTodo(title) {
    this.todosService.createTodo({
      title
    })
      .subscribe(() => {
        console.log('success!');
      }, err => {
        this.error = err.message;
      });
  }

  search(query) {
    this.todosService.query(query);
  }

  setError(error) {
    this.error = error;
  }

  constructor(protected todosService: TodosService) { }

  ngOnInit() {
  }

}
