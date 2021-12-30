import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDeCrecimientoComponent } from './historial-de-crecimiento.component';

describe('HistorialDeCrecimientoComponent', () => {
  let component: HistorialDeCrecimientoComponent;
  let fixture: ComponentFixture<HistorialDeCrecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialDeCrecimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialDeCrecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
