import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'quick-todo',
  template: `
    <div>
      <div class="close" (click)="close()">&times;</div>
      <div class="alert alert-danger" *ngIf="error">{{error}}</div>
      <div class="alert alert-success" *ngIf="message">{{message}}</div>

      <div class="input-group">
        <input type="text" class="form-control" #titleRef>
        <button class="btn btn-success" (click)="addTodo(titleRef.value)">Add Todo</button>
      </div>
    </div>
  `,
  styles: [`
    :host(){
      width: 50%;
      display: block;
      position: fixed;
      background:#fff;
      left: 50%;
      margin-left: -25%;
      bottom: 20px;
      border: 1px solid lightgray;
      padding: 1em;
    }
  `]
})
export class QuickTodoComponent implements OnInit {

  error: string;
  message: string;

  close() {
    this.router.navigate([{ outlets: { popup: null }}])
  }

  constructor(protected todosService: TodosService,
              private router: Router) { }

  addTodo(title) {
    this.todosService.createTodo({
      title
    })
      .subscribe(() => {
        this.message = 'success!'
      }, err => {
        this.error = err.message
      })
  }

  ngOnInit() {
  }

}
