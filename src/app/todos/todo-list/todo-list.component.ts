import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { Todo } from '../todo';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor() { }

  @Input()
  todos!: Todo[];

  // newTodo: Todo[] = Object.assign([], this.todos);

  @Output()
  del = new EventEmitter<number>();

  @Output()
  swap = new EventEmitter<number>();

  // @Output()
  // haveDone = new EventEmitter<Todo[]>()

  // @Output()
  // notDone = new EventEmitter<Todo[]>()
  // updateTodos() {
  //   this.newTodos.emit(this.newTodo);
  // }

  trackID(index: any, todo: Todo) {
    return todo.id;
  }

  remove(e: any, id: any) {
    e.preventDefault();
    this.del.emit(id);
  }

  updateStatus(id: any) {
    this.swap.emit(id);
  }

  havedone: Todo[] = [];
  notdone: Todo[] = [];

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.havedone =
      this.todos?.length > 0 ? this.todos.filter((i) => i.done) : [];
    this.notdone =
      this.todos?.length > 0 ? this.todos.filter((i) => !i.done) : [];
  }

  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      ); //switch status
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      event.container.data[event.currentIndex].done =
        !event.container.data[event.currentIndex].done;
    }
  }

  ngOnInit(): void {
  }
}
