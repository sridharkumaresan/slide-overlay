import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tab } from './tab-demo.component';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TabDemoService {
  data$: Observable<any>;
  constructor(private http: HttpClient) { }

  getData = (): Observable<Tab[]> => {
    return this.http.get<Tab[]>('http://localhost:3000/tabs');
  }

  getSomething = (): Observable<any> => {
    if (!this.data$) {
      this.data$ = this.http.get('http://localhost:3000/dataset').pipe(shareReplay(1));
    }
    return this.data$;
  }
}
