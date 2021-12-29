import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dragdrops-header',
  templateUrl: './dragdrops-header.component.html',
  styleUrls: ['./dragdrops-header.component.css']
})
export class DragdropsHeaderComponent implements OnInit {

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
