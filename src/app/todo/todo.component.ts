import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  addTaskToList(event:any){
    this.tasks.push(event);
  }

  deleteTask(event:number){
    for(let i of this.tasks){
      const index = this.tasks.indexOf(i);
      if (i[0]==event){
        this.tasks.splice(index,1);
      }
    }

  }
  checkEmpty(){
    if (this.tasks.length==0){
      return false;
    }
    return true;
  }
}
