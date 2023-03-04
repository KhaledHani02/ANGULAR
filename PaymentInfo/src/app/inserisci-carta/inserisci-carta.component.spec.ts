import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciCartaComponent } from './inserisci-carta.component';

describe('InserisciCartaComponent', () => {
  let component: InserisciCartaComponent;
  let fixture: ComponentFixture<InserisciCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserisciCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserisciCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
