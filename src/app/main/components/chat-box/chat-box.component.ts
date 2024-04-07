import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.less'
})
export class ChatBoxComponent {
  @Input() messages: any[] = [];
  @Output() enter = new EventEmitter();

  textControl = new FormControl();

  sendMessage() {
    this.enter.emit(this.textControl.value);
    this.textControl.setValue('');
  }
}
