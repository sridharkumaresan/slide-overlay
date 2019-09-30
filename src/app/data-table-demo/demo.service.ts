import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }

  getData = (sortDirection: string): Observable<any> => this.http.get('http://localhost:3000/dataset').pipe(
      delay(800),
      map(
        (res: any) => {
          return {tabs: res.tabs, data: res.data.map(data => ({...data, uid: '_' + Math.random().toString(36).substr(2, 9)}))}
        }
      )
    );
}
