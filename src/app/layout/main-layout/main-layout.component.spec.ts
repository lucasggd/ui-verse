import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutComponent } from './main-layout.component';
import { By } from '@angular/platform-browser';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutComponent],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render menu', () => {
    const navbarComponent = fixture.debugElement.query(By.css('[data-testid="nav-bar"]'));
    expect(navbarComponent).toBeTruthy();
  });

  it('should render menu items', () => {
    const navContentComponent = fixture.debugElement.query(By.css('[data-testid="nav--content"]'));
    expect(navContentComponent).toBeTruthy();

    const subItemMenuList = fixture.debugElement.queryAll(
      By.css('[data-testid="nav--content"] > .content--item'),
    );

    expect(subItemMenuList.length).toBeGreaterThan(0);
  });

  it('should trigger expandMenu func', () => {
    const spy = vi.spyOn(component, `expandMenu`);

    expect(spy).toHaveBeenCalledTimes(0);
    const menuToExpand = fixture.debugElement.query(By.css('[data-testid="menu--expand"]'))
      ?.nativeElement as HTMLElement;

    menuToExpand.dispatchEvent(new Event('click'));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should expand menu', () => {
    const menuRef = fixture.debugElement.query(By.css('[data-testid="menu--expand"]'))
      .nativeElement as HTMLElement;

    expect(menuRef.classList).not.toContain('expanded');
    component.expandMenu(menuRef);

    fixture.detectChanges();
    expect(menuRef.classList).toContain('expanded');
  });
});
