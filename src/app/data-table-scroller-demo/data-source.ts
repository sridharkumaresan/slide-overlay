import { DemoService } from './../data-table-demo/demo.service';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';

export class TableDataSource extends DataSource<any | undefined> {
  private cachedData = Array.from<any>({ length: 0 });
  private dataStream = new BehaviorSubject<(any | undefined)[]>(this.cachedData);
  private subscription = new Subscription();

  private pageSize = 10;
  private lastPage = 0;

  constructor(private demoService: DemoService) {
    super();

    // Start with some data.
    this._fetchData();
  }

  connect(collectionViewer: CollectionViewer): Observable<(any | undefined)[] | ReadonlyArray<any | undefined>> {
    this.subscription.add(collectionViewer.viewChange.subscribe(range => {

      const currentPage = this._getPageForIndex(range.end);

      if (currentPage && range) {
        console.log(currentPage, this.lastPage);
      }

      if (currentPage > this.lastPage) {
        this.lastPage = currentPage;
        this._fetchData();
      }
    }));
    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }

  private _fetchData(): void {
    for (let i = 0; i < this.pageSize; ++i) {
      this.demoService.getData().subscribe(res => {
        this.cachedData = this.cachedData.concat(res);
        this.dataStream.next(this.cachedData);
      });
    }
  }

  private _getPageForIndex(i: number): number {
    return Math.floor(i / this.pageSize);
  }
}
