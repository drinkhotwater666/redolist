import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DragdropService {
  constructor(private http: HttpClient) { }

  todos: Todo[] = [];

  url = ' http://localhost:4000/todos';

  getTodos() {
    return this.http.get<Todo[]>(this.url);
  }

  addnew(todoName: string) {
    return this.http.post<Todo>(this.url, {
      name: todoName,
      done: false,
    });
  }
  updateStatus(id: number, done: boolean) {
    return this.http.patch<Todo>(`${this.url}/${id}`,
      {
        done,
      });
  }

  remove(id: number) {
    return this.http.delete<object>(`${this.url}/${id}`);
  }
}
