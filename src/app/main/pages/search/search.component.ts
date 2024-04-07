import { Component } from '@angular/core';
// import { MESSAGES } from '@api/mocks';
import { PLACES } from '@api/mocks';
import { PlaceDto } from '@api/models';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.less'
})
export class SearchComponent {
  // messages: any[] = MESSAGES;
  messages: any[] = [];

  handleEnter(query: string): void {
    this.messages.push({
      text: query,
      date: new Date(),
      from: 'user',
    });

    const index: number = Math.floor(Math.random() * PLACES.length);
    const place: PlaceDto = PLACES[index];
    const link: string = 'https://russpass.ru/event/' + place.id;

    const botAnswer = `
Скорее всего вам подходит:<br/><br/>
<a href="${link}">${place.title}</a><br/>
(${place.address})
`;

    this.messages.push({
      text: botAnswer,
      date: new Date(),
      from: 'bot',
    });
  }
}
