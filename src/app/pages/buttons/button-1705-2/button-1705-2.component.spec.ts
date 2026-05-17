import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button17052Component } from './button-1705-2.component';

describe('Button17052Component', () => {
  let component: Button17052Component;
  let fixture: ComponentFixture<Button17052Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button17052Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Button17052Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
