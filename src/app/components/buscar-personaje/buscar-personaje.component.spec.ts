import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPersonajeComponent } from './buscar-personaje.component';

describe('BuscarPersonajeComponent', () => {
  let component: BuscarPersonajeComponent;
  let fixture: ComponentFixture<BuscarPersonajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPersonajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
