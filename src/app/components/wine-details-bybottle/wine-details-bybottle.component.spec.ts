import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineDetailsBybottleComponent } from './wine-details-bybottle.component';

describe('WineDetailsBybottleComponent', () => {
  let component: WineDetailsBybottleComponent;
  let fixture: ComponentFixture<WineDetailsBybottleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineDetailsBybottleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineDetailsBybottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
