import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzLoginComponent } from './ez-login.component';

describe('EzLoginComponent', () => {
  let component: EzLoginComponent;
  let fixture: ComponentFixture<EzLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
