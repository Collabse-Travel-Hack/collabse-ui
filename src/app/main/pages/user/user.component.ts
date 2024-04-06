import { Component } from '@angular/core';


enum SearchMode {
  SMART = 'smart',
  USUAL = 'usual',
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.less'
})
export class UserComponent {
  searchMode = SearchMode.SMART;
}
