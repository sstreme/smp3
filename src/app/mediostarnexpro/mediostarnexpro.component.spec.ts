import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediostarnexproComponent } from './mediostarnexpro.component';

describe('MediostarnexproComponent', () => {
  let component: MediostarnexproComponent;
  let fixture: ComponentFixture<MediostarnexproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediostarnexproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediostarnexproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
