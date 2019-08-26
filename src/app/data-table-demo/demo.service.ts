import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }

  getData = (): Observable<any> => {
    console.log('Call More Data');
    return this.http.get('http://localhost:3000/data').pipe(
      map(
        (data: any[]) => {
          return data.map(data => ({...data, uid: '_' + Math.random().toString(36).substr(2, 9)}))
        }
      )
    );
  }
}
