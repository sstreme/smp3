import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndypComponent } from './endyp.component';

describe('EndypComponent', () => {
  let component: EndypComponent;
  let fixture: ComponentFixture<EndypComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndypComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
