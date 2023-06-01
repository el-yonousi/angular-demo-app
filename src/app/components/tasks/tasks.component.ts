import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})

export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
      this.tasks.sort((a, b) => {
        const dateA = new Date(a.day);
        const dateB = new Date(b.day);
        return dateB.getTime() - dateA.getTime();
      });
    })
  }


  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe((tasks) => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    })
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateTasksReminder(task).subscribe()
  }

  addTask(task: Task) {
    this.taskService.addTaskService(task).subscribe((t) => {
      this.tasks.push(t)
    })
    this.ngOnInit()
  }
}
