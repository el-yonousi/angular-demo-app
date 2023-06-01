import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  title: string = 'Todo App';
  showAddTask: boolean = false
  subscription!: Subscription

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle()
      .subscribe(v => (this.showAddTask = v))
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }

  hasRoute(route: string) {
    return this.router.url === route
  }
}
