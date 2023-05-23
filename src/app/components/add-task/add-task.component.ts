import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

  forms: {
    text: string,
    day: string,
    reminder: boolean
  } = {
    text: '',
    day: '',
    reminder: false
  }

  errors: {
    text: string;
    day: string;
  } = {
      text: '',
      day: '',
    };

  onSubmit() {
    this.errors.text = !this.forms.text ? 'Please add a task name' : ''
    this.errors.day = !this.forms.day ? 'Please add a task date' : ''

    if (!this.forms.text || !this.forms.day) {
      return
    }

    const newTask = {
      text: this.forms.text,
      day: this.forms.day,
      reminder: this.forms.reminder
    }

    this.onAddTask.emit(newTask)

    // @todo - emit event
    this.forms.text = '';
    this.forms.day = '';
    this.forms.reminder = false;
  }
}
