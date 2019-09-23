import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableScrollerDemoComponent } from './data-table-scroller-demo.component';

describe('DataTableScrollerDemoComponent', () => {
  let component: DataTableScrollerDemoComponent;
  let fixture: ComponentFixture<DataTableScrollerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableScrollerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableScrollerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
