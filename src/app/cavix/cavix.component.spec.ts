import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CavixComponent } from './cavix.component';

describe('CavixComponent', () => {
  let component: CavixComponent;
  let fixture: ComponentFixture<CavixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CavixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CavixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
