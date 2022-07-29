import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedsocIconsComponent } from './redsoc-icons.component';

describe('RedsocIconsComponent', () => {
  let component: RedsocIconsComponent;
  let fixture: ComponentFixture<RedsocIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedsocIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedsocIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
