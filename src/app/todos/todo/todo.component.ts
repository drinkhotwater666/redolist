import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { TodosService } from '../todos.service'
import { Todo } from '../todo'
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnChanges {

  constructor(private todosService: TodosService) { }

  todos: Todo[] = []
  havedone: Todo[] = [];
  notdone: Todo[] = [];

  remove(id: number) {
    this.todosService.remove(id).subscribe(res => {
      this.todos.splice(this.todos.findIndex(nb => nb.id === id), 1)
    })
  }

  swapStatus(id: number) {
    let curTodo = this.todos.find(nb => nb.id === id)
    this.todosService.swapStatus(id, !curTodo!.done).subscribe(res => {
      curTodo!.done = res!.done
      console.log("parent: ", curTodo?.done);
    })
  }

  addnew(todoName: string) {
    this.todosService.addnew(todoName).subscribe(res => {
      this.todos.push(res)
    })
  }

  @ViewChild(TodoListComponent) TodoListComponent!: TodoListComponent
  // auto used when the page is freshed. Put some initial logic
  ngOnInit(): void {
    this.todosService.getTodos().subscribe((res: Todo[]) => {
      this.todos = [...res];
    })
  }
  ngOnChanges(): void {
    this.TodoListComponent.havedone = this.todos?.length > 0 ? this.todos.filter(i => i.done) : []
    this.TodoListComponent.notdone = this.todos?.length > 0 ? this.todos.filter(i => !i.done) : []
    console.log(this.TodoListComponent.notdone);
  }

}
