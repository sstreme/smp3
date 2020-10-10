import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtoneComponent } from './mtone.component';

describe('MtoneComponent', () => {
  let component: MtoneComponent;
  let fixture: ComponentFixture<MtoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
