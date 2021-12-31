import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Todo } from '../todo';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  constructor() { }

  panelOpenState = false;
  isFirst = true
  @Input()
  todos!: Todo[];

  @Output()
  del = new EventEmitter<number>();

  @Output()
  swap = new EventEmitter<number>();

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
    this.havedone =
      this.todos?.length > 0 ? this.todos.filter((i) => i.done) : [];
    this.notdone =
      this.todos?.length > 0 ? this.todos.filter((i) => !i.done) : [];
  }

  ngOnInit(): void { }
}
