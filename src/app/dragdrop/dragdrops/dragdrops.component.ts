import { Component, OnInit } from '@angular/core';
import { DragdropService } from '../dragdrop.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-dragdrops',
  templateUrl: './dragdrops.component.html',
  styleUrls: ['./dragdrops.component.css'],
})
export class DragdropsComponent implements OnInit {
  constructor(private todosService: DragdropService) { }

  todos: Todo[] = [];

  remove(id: number) {
    this.todosService.remove(id).subscribe((res) => {
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
      this.todos = [...this.todos, res];
    });
  }
  // auto used when the page is freshed. Put some initial logic
  ngOnInit(): void {
    this.todosService.getTodos().subscribe((res: Todo[]) => {
      this.todos = [...res];
    });
  }
}
