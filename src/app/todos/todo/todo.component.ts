import { Component, OnChanges, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit, OnChanges {
  constructor(private todosService: TodosService) { }

  todos: Todo[] = [];

  remove(id: number) {
    this.todosService.remove(id).subscribe(res => {
      this.todos.splice(this.todos.findIndex((nb) => nb.id === id), 1);
      this.todos = [...this.todos];
    });
  }

  updateStatus(id: number) {
    let curTodo = this.todos.find((nb) => nb.id === id);
    this.todosService.updateStatus(id, !curTodo!.done).subscribe((res) => {
      curTodo!.done = res!.done;
      this.todos = [...this.todos];
    });
  }

  addnew(todoName: string) {
    this.todosService.addnew(todoName).subscribe((res) => {
      // this.todos.push(res);
      this.todos = [...this.todos, res];
    });
  }
  // auto used when the page is freshed. Put some initial logic
  ngOnInit(): void {
    this.todosService.getTodos().subscribe((res: Todo[]) => {
      this.todos = [...res];
    });
  }
  ngOnChanges(): void { }
}
