import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrostarComponent } from './quadrostar.component';

describe('QuadrostarComponent', () => {
  let component: QuadrostarComponent;
  let fixture: ComponentFixture<QuadrostarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadrostarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadrostarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
