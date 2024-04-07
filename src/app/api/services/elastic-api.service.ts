import { Injectable } from '@angular/core';
import { ApiService } from './base/api.service';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ElasticApiService {
  constructor(
    private readonly apiService: ApiService
  ) {}

  public getPlacesList(): Observable<any> {
    return this.apiService.get('places', {
      'offset': 0,
      'size': 20,
    });
  }
}
