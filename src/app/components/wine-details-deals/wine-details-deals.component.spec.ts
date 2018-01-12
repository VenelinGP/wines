import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineDetailsDealsComponent } from './wine-details-deals.component';

describe('WineDetailsDealsComponent', () => {
  let component: WineDetailsDealsComponent;
  let fixture: ComponentFixture<WineDetailsDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineDetailsDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineDetailsDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
