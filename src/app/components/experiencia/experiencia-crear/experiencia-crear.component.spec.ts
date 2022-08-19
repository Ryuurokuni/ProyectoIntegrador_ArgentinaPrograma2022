import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaCrearComponent } from './experiencia-crear.component';

describe('ExperienciaCrearComponent', () => {
  let component: ExperienciaCrearComponent;
  let fixture: ComponentFixture<ExperienciaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
