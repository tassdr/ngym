import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Sport } from '../models/sport';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  private url: string = "http://5cd3f2edb231210014e3d2ff.mockapi.io/api/test/sports"


  constructor(private http: HttpClient) { }

  getSports() {
    return this.http.get<Sport[]>(this.url)
  }

  addSport(sport): Observable<Sport> {
    return this.http.post<Sport>(this.url, sport);
  }
}
