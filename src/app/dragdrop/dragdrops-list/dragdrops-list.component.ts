import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Todo } from '../todo';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragdrops-list',
  templateUrl: './dragdrops-list.component.html',
  styleUrls: ['./dragdrops-list.component.css'],
})

export class DragdropsListComponent implements OnInit {
  constructor() { }

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

  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.updateStatus(event.container.data[event.currentIndex].id);
    }
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    this.havedone = this.todos?.length > 0 ? this.todos.filter((i) => i.done) : [];
    this.notdone = this.todos?.length > 0 ? this.todos.filter((i) => !i.done) : [];
  }
}
