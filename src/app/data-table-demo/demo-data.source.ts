import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DemoService } from './demo.service';
import { catchError, finalize, tap } from 'rxjs/operators';

export class DemoDataSource extends DataSource<any> {
    private cachedData = Array.from<any>({ length: 0 });
    public tabsSubject = new BehaviorSubject<(any | undefined)[]>([]);
    private dataSubject = new BehaviorSubject<(any | undefined)[]>(this.cachedData);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();


    constructor(private demoService: DemoService) {
      super();
    }

    connect(collectionViewer: CollectionViewer): Observable<(any | undefined)[] | ReadonlyArray<any | undefined>> {
      return this.dataSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
      this.dataSubject.complete();
      this.loadingSubject.complete();
    }

    loadData(sortDirection: string) {
      this.loadingSubject.next(true);
      this.demoService.getData(sortDirection).pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(res => {
        const { tabs, data } = res;
        this.cachedData = this.cachedData.concat(data);
        this.dataSubject.next(this.cachedData);
        this.tabsSubject.next(tabs);
      });
    }

    reset() {
      this.cachedData = Array.from<any>({ length: 0 });
    }
}
