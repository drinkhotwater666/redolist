import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {

  constructor() { }
  todoname = ''
  @Output()
  add = new EventEmitter<string>()

  addnew() {
    if (this.todoname.trim() === '') { return }

    this.add.emit(this.todoname)

    this.todoname = ''
  }
  ngOnInit(): void {
  }

}
