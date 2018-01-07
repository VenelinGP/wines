import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineDetailsByregionComponent } from './wine-details-byregion.component';

describe('WineDetailsByregionComponent', () => {
  let component: WineDetailsByregionComponent;
  let fixture: ComponentFixture<WineDetailsByregionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineDetailsByregionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineDetailsByregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
