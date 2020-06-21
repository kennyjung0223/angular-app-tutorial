import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Task } from '../models/Task'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  constructor(private http:HttpClient) {  }

  // get todos (tasks)
  getTodos():Observable<Task[]> {
    return this.http.get<Task[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // delete tasks
  deleteTask(task:Task):Observable<Task> {
    const url = `${this.todosUrl}/${task.id}`;
    return this.http.delete<Task>(url, httpOptions);
  }

  // add task
  addTask(task:Task):Observable<Task> {
    return this.http.post<Task>(this.todosUrl, task, httpOptions)
  }

  // toggle completed
  toggleCompleted(task:Task):Observable<any> {
    const url = `${this.todosUrl}/${task.id}`;
    return this.http.put(url, task, httpOptions);
  }
}
