import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() addTask: EventEmitter<any> = new EventEmitter();
  title:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const task = {
      title: this.title,
      completed: false
    }

    this.addTask.emit(task);

  }
}
