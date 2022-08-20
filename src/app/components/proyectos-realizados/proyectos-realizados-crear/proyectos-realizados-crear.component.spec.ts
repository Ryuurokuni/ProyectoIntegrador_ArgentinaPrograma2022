import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosRealizadosCrearComponent } from './proyectos-realizados-crear.component';

describe('ProyectosRealizadosCrearComponent', () => {
  let component: ProyectosRealizadosCrearComponent;
  let fixture: ComponentFixture<ProyectosRealizadosCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosRealizadosCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosRealizadosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
