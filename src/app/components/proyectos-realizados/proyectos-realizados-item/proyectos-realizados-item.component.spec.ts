import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosRealizadosItemComponent } from './proyectos-realizados-item.component';

describe('ProyectosRealizadosItemComponent', () => {
  let component: ProyectosRealizadosItemComponent;
  let fixture: ComponentFixture<ProyectosRealizadosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosRealizadosItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosRealizadosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
