import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinivacComponent } from './minivac.component';

describe('MinivacComponent', () => {
  let component: MinivacComponent;
  let fixture: ComponentFixture<MinivacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinivacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinivacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
