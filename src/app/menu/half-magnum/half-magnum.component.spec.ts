import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfMagnumComponent } from './half-magnum.component';

describe('HalfMagnumComponent', () => {
  let component: HalfMagnumComponent;
  let fixture: ComponentFixture<HalfMagnumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfMagnumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfMagnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
