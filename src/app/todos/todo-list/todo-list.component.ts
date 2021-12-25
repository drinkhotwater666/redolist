import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo'
// import { TodosService } from '../todos.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

}
