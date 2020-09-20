import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraxfaceComponent } from './fraxface.component';

describe('FraxfaceComponent', () => {
  let component: FraxfaceComponent;
  let fixture: ComponentFixture<FraxfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraxfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraxfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
