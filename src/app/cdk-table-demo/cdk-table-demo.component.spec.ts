import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkTableDemoComponent } from './cdk-table-demo.component';

describe('CdkTableDemoComponent', () => {
  let component: CdkTableDemoComponent;
  let fixture: ComponentFixture<CdkTableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkTableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
