import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoServiceService } from '../../services/todo-service.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoServiceService) { }

  ngOnInit(): void {
  }
  // Set Dynamic CLasses
  setClasses(){
  let classes = {
    todo: true,
    'is-complete':this.todo.completed
  }
  return classes;
}
onToggle(todo){
  //Toggle on UI
  console.log('toggle');
  todo.completed = !todo.completed;
  //Toggle on Service
  this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
}
onDelete(todo){
  console.log('delete');
  this.deleteTodo.emit(todo);
}
}
