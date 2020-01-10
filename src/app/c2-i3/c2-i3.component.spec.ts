import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2I3Component } from './c2-i3.component';

describe('C2I3Component', () => {
  let component: C2I3Component;
  let fixture: ComponentFixture<C2I3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2I3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2I3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
