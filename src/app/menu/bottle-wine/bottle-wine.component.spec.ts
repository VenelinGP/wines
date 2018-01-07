import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottleWineComponent } from './bottle-wine.component';

describe('BottleWineComponent', () => {
  let component: BottleWineComponent;
  let fixture: ComponentFixture<BottleWineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottleWineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottleWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
