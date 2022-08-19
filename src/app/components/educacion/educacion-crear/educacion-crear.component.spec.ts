import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionCrearComponent } from './educacion-crear.component';

describe('EducacionCrearComponent', () => {
  let component: EducacionCrearComponent;
  let fixture: ComponentFixture<EducacionCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
