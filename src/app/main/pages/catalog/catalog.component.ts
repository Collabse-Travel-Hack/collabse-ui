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
  allPlaces: PlaceDto[] = [];
  placesList: PlaceDto[] = [];

  searchControl = new FormControl();

  constructor(
    private elasticApi: ElasticApiService,
  ) {}

  ngOnInit(): void {
    this.elasticApi.getPlacesList().subscribe(res => {
      this.allPlaces = res.records;
      this.placesList = res.records;
    });
  }

  handleSearch(): void {
    this.placesList = this.allPlaces.filter((place: PlaceDto) => {
      const query = this.searchControl.value;
      const isTitle = place.title.includes(query);
      const isDescription = place.description.includes(query);
      const isAddress = place.address.includes(query);
      return isTitle || isDescription || isAddress;
    });
  }
}
