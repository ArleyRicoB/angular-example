import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetListService {
  constructor(private http: HttpClient) {}

  getList(): any {
    return this.http.get('https://jsonmock.hackerrank.com/api/movies?Year=2010');
  }
}
