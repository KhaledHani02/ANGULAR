import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModComponent } from './login-mod.component';

describe('LoginModComponent', () => {
  let component: LoginModComponent;
  let fixture: ComponentFixture<LoginModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
