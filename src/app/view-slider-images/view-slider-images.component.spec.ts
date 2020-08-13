import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSliderImagesComponent } from './view-slider-images.component';

describe('ViewSliderImagesComponent', () => {
  let component: ViewSliderImagesComponent;
  let fixture: ComponentFixture<ViewSliderImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSliderImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSliderImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
