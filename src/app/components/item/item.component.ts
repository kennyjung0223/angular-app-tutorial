import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../services/task.service'

import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  // set dynamic classes
  setClasses() {
    let classes = {
      task: true,
      'is-complete': this.task.completed
    }
    return classes;
  }

  onToggle(task) {
    // Toggle in UI
    task.completed = !task.completed;
    // Toggle on server
    this.taskService.toggleCompleted(task).subscribe(task => console.log(task));
  }

  onDelete(task) {
    this.deleteTask.emit(task);
  }
}
