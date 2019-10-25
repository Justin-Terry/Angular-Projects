import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'http://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  toggleCompleted(todo):Observable<any> {
    const putUrl = `${this.todosUrl}/${todo.id}`;
    return this.http.put<Todo[]>(putUrl, todo, httpOptions);
  }

  deleteTodo(todo):Observable<any> {
    const delUrl = `${this.todosUrl}/${todo.id}`
    return this.http.delete<Todo[]>(delUrl, httpOptions);
  }
}
