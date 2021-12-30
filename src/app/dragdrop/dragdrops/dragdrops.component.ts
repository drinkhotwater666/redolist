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
      this.todos.splice(
        this.todos.findIndex((nb) => nb.id === id),
        1
      );
    });
  }

  updateStatus(id: number) {
    let curTodo = this.todos.find((nb) => nb.id === id);
    console.log(curTodo);

    this.todosService.updateStatus(id, !curTodo!.done).subscribe((res) => {
      curTodo!.done = res!.done;
    });
  }

  addnew(todoName: string) {
    this.todosService.addnew(todoName).subscribe((res) => {
      this.todos.push(res);
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
