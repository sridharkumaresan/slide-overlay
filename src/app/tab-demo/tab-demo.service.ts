import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tab } from './tab-demo.component';

@Injectable({
  providedIn: 'root'
})
export class TabDemoService {

  constructor(private http: HttpClient) { }

  getData = (): Observable<Tab[]> => {
    return this.http.get<Tab[]>('http://localhost:3000/tabs');
  }
}
