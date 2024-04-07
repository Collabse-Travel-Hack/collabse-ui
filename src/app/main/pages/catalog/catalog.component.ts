import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ElasticApiService } from '@api/services';
import { PlaceDto } from '@api/models';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.less'
})
export class CatalogComponent implements OnInit {
  searchControl = new FormControl();
  placesList: PlaceDto[] = [];

  constructor(
    private elasticApi: ElasticApiService,
  ) {}

  ngOnInit(): void {
    this.elasticApi.getPlacesList().subscribe(res => {
      this.placesList = res.records;
    });
  }
}
