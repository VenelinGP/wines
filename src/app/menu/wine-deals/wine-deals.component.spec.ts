import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineDealsComponent } from './wine-deals.component';

describe('WineDealsComponent', () => {
  let component: WineDealsComponent;
  let fixture: ComponentFixture<WineDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
