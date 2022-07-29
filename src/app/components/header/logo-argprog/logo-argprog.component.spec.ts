import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArgprogComponent } from './logo-argprog.component';

describe('LogoArgprogComponent', () => {
  let component: LogoArgprogComponent;
  let fixture: ComponentFixture<LogoArgprogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoArgprogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoArgprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
