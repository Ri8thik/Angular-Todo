import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() todoTasks=new EventEmitter<any>();

  task:any[]=[];
  no=0;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitButton(input:HTMLInputElement){
    this.no=this.no+1;
    this.task.push(this.no);
    this.task.push(input.value);
    this.task.push("InComplete");
    
    this.todoTasks.emit(this.task);
    this.task=[];
  }

}
