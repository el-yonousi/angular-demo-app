import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
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
      day: new Date().toString(),
      reminder: false
    }

  errors: {
    text: string;
    day: string;
  } = {
      text: '',
      day: '',
    };

  showAddTask: boolean = false
  subscription!: Subscription

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle()
      .subscribe(v => (this.showAddTask = v))
  }

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
