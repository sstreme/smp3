import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TattoostarComponent } from './tattoostar.component';

describe('TattoostarComponent', () => {
  let component: TattoostarComponent;
  let fixture: ComponentFixture<TattoostarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TattoostarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TattoostarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
