import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CristalproComponent } from './cristalpro.component';

describe('CristalproComponent', () => {
  let component: CristalproComponent;
  let fixture: ComponentFixture<CristalproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CristalproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CristalproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
