import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Input() bold: number | undefined;

  @Output() btnClick = new EventEmitter()

  onButtonClick() {
    this.btnClick.emit()
  }
}
