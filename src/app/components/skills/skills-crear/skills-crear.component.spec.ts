import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCrearComponent } from './skills-crear.component';

describe('SkillsCrearComponent', () => {
  let component: SkillsCrearComponent;
  let fixture: ComponentFixture<SkillsCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
