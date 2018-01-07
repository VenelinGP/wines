import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTheGlassComponent } from './by-the-glass.component';

describe('ByTheGlassComponent', () => {
  let component: ByTheGlassComponent;
  let fixture: ComponentFixture<ByTheGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByTheGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByTheGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
