import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderByDeliveryPersonComponent } from './view-order-by-delivery-person.component';

describe('ViewOrderByDeliveryPersonComponent', () => {
  let component: ViewOrderByDeliveryPersonComponent;
  let fixture: ComponentFixture<ViewOrderByDeliveryPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrderByDeliveryPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrderByDeliveryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
