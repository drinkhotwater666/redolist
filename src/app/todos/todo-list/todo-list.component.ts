import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Todo } from '../todo'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  done: Todo[] = [];
  notDone: Todo[] = [];

  @Input()
  todos!: Todo[];

  @Output()
  del = new EventEmitter<number>()

  @Output()
  swap = new EventEmitter<number>()

  trackID(index: any, todo: Todo) {
    return todo.id
  }

  remove(e: any, id: any) {
    e.preventDefault()
    this.del.emit(id)
  }

  swapStatus(id: any) {
    this.swap.emit(id)
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.done = this.todos?.length > 0 ? this.todos.filter(i => i.done) : []
    this.notDone = this.todos?.length > 0 ? this.todos.filter(i => !i.done) : []
    // console.log(this.done);
  }

  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(event.container.data[event.currentIndex].done);
      event.container.data[event.currentIndex].done = !event.container.data[event.currentIndex].done
    }
  }
  ngOnInit(): void {
    // console.log('1111');
    this.done = this.todos?.length > 0 ? this.todos.filter(i => i.done) : []
    this.notDone = this.todos?.length > 0 ? this.todos.filter(i => !i.done) : []
  }

}
