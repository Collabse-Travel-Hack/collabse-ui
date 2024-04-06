import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MOCK_RECORDS } from './mocks';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.less'
})
export class CatalogComponent {
  searchControl = new FormControl();

  recordsList = MOCK_RECORDS;
}
