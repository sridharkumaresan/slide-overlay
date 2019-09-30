import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFlyoutComponent } from './filter-flyout.component';

describe('FilterFlyoutComponent', () => {
  let component: FilterFlyoutComponent;
  let fixture: ComponentFixture<FilterFlyoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterFlyoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFlyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
