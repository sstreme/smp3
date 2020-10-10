import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalightComponent } from './formalight.component';

describe('FormalightComponent', () => {
  let component: FormalightComponent;
  let fixture: ComponentFixture<FormalightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormalightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
