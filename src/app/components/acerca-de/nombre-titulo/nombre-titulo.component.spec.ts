import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreTituloComponent } from './nombre-titulo.component';

describe('NombreTituloComponent', () => {
  let component: NombreTituloComponent;
  let fixture: ComponentFixture<NombreTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
