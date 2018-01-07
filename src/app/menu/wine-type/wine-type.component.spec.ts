import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineTypeComponent } from './wine-type.component';

describe('WineTypeComponent', () => {
  let component: WineTypeComponent;
  let fixture: ComponentFixture<WineTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
