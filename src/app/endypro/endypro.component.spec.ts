import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndyproComponent } from './endypro.component';

describe('EndyproComponent', () => {
  let component: EndyproComponent;
  let fixture: ComponentFixture<EndyproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndyproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndyproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
