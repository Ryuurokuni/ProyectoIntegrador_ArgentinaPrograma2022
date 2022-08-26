import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasCrearComponent } from './idiomas-crear.component';

describe('IdiomasCrearComponent', () => {
  let component: IdiomasCrearComponent;
  let fixture: ComponentFixture<IdiomasCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomasCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
