import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebclubComponent } from './webclub.component';

describe('WebclubComponent', () => {
  let component: WebclubComponent;
  let fixture: ComponentFixture<WebclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
