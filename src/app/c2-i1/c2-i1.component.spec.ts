import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2I1Component } from './c2-i1.component';

describe('C2I1Component', () => {
  let component: C2I1Component;
  let fixture: ComponentFixture<C2I1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2I1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2I1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
