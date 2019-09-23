import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFlyoutComponent } from './action-flyout.component';

describe('ActionFlyoutComponent', () => {
  let component: ActionFlyoutComponent;
  let fixture: ComponentFixture<ActionFlyoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionFlyoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionFlyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
