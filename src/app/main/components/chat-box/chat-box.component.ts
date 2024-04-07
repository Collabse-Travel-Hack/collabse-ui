import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CONVERSATION } from './mocks';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.less'
})
export class ChatBoxComponent {
  textControl = new FormControl();

  currentUserId = 1;
  conversation: any[] = CONVERSATION;

  sendMessage() {
    this.conversation.push({
      text: this.textControl.value,
      date: new Date(),
      from: 'user',
    });

    this.textControl.setValue('');
  }
}
