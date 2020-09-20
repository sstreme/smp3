import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquimiaComponent } from './alquimia.component';

describe('AlquimiaComponent', () => {
  let component: AlquimiaComponent;
  let fixture: ComponentFixture<AlquimiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquimiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquimiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
