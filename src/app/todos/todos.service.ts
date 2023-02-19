import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Todo } from './models/todo';
import { AuthService } from '../auth/auth.service';
import {catchError, filter, map, share, switchMap, tap} from 'rxjs/operators';
import {empty} from 'rxjs/observable/empty';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

interface Params {
  perpage: number;
  query: string;
  page: number;
}

@Injectable()
export class TodosService {

  url = 'http://localhost:3000/todos/';
  params = new BehaviorSubject<Params>({
    query: '',
    perpage: 10,
    page: 1,
  });

  createTodo(todo: Partial<Todo>) {
    return this.http.post<Todo>(this.url, todo).pipe(
      tap(() => {
        this.params.next( this.params.getValue());
      })
    );
  }

  // queryTodos(todo?: Partial<Todo>) {
  //   return this.http.get<Todo[]>(this.url);
  // }

  queryTodos(query) {
    return this.http.get<Todo[]>(this.url, {
      params: {
        q: query
      }
    }).pipe(
      share()
    );
  }

  setPerPage(perpage: number) {
    this.params.next({
      ...this.params.getValue(),
      perpage
    });
  }

  setPage(page: number) {
    this.params.next({
      ...this.params.getValue(),
      page
    });
  }

  state = {
    total: 0,
    page: 1,
    pages: 1
  };

  setTotal(total: number) {
    this.state = {
      total,
      page: 1,
      pages: Math.ceil(total / this.params.getValue().perpage)
    };
  }

  query(query) {
    this.params.next({
      ...this.params.getValue(),
      query
    });
  }

  // tslint:disable-next-line:member-ordering
  totalCountHeader = 'X-Total-Count';

  getTodos() {
    return this.params.pipe(
      filter(params => !!params.query),
      switchMap( para => this.http.get<Todo[]>(this.url, {
        params: {
          q: para.query,
          _limit: "" + para.perpage,
          _page: ""+ para.page
        },
        observe: 'response',
      })),
      map( (response: HttpResponse<Todo[]>) => {
          this.setTotal(parseInt(response.headers.get(this.totalCountHeader)));
          return response.body;
        }
      ),
    share()
  );
  }

  constructor(private http: HttpClient, private auth: AuthService) { }

}
