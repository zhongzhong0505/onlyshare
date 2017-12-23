import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRegisterComponent } from './api-register.component';

describe('ApiRegisterComponent', () => {
  let component: ApiRegisterComponent;
  let fixture: ComponentFixture<ApiRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
