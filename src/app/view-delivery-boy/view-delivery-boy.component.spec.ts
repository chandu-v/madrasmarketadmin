import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeliveryBoyComponent } from './view-delivery-boy.component';

describe('ViewDeliveryBoyComponent', () => {
  let component: ViewDeliveryBoyComponent;
  let fixture: ComponentFixture<ViewDeliveryBoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDeliveryBoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeliveryBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
