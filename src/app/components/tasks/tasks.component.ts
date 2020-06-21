import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'

import { Task } from '../../models/Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[]

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTodos().subscribe(tasks =>
      this.tasks = tasks);
  }

  deleteTask(task:Task) {
    // remove from UI
    this.tasks = this.tasks.filter(t => t.id != task.id);
    // remove from server
    this.taskService.deleteTask(task).subscribe();
  }

  addTask(task:Task) {
    this.taskService.addTask(task).subscribe(task => {
      this.tasks.push(task);
    })
  }
}
