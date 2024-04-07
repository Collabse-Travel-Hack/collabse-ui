import { Component } from '@angular/core';
import { MESSAGES } from '@api/mocks';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.less'
})
export class SearchComponent {
  messages: any[] = MESSAGES;

  handleEnter(query: string): void {
    this.messages.push({
      text: query,
      date: new Date(),
      from: 'user',
    });
  }
}
