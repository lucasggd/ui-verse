import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button1705Component } from './button-1705.component';

describe('Button1705Component', () => {
  let component: Button1705Component;
  let fixture: ComponentFixture<Button1705Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button1705Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Button1705Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
