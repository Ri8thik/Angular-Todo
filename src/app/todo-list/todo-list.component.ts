import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input("snoTask") snoTask = 0;
  @Input("textTask") textTask = "";
  @Input("statusTask") statusTask = "";

  @Output() taskDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  checkBtnColor() {
    if (this.statusTask == "InComplete") {
      return "red"
    }
    return "green"
  }

  onBtnClick() {
    if (this.statusTask == "InComplete") {
      this.statusTask = "Complete"
    }
    else {
      this.statusTask = "InComplete"
    }
  }

  getTaskDelete() {
    this.taskDelete.emit(this.snoTask);
  }

  isCheckDiable() {
    if (this.statusTask == "InComplete") {
      return true;
    }
    return false;
  }
}
