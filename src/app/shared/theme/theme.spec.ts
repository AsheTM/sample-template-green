import { TestBed } from '@angular/core/testing';

import { THEME_STORAGE_KEY, Theme } from './theme';
import { ThemeToggle } from './theme-toggle';

describe('Theme', () => {
  beforeEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset['theme'];
  });

  it('uses a stored choice', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    expect(TestBed.inject(Theme).current()).toBe('dark');
  });

  it('ignores an invalid stored value', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'purple');
    expect(['light', 'dark']).toContain(TestBed.inject(Theme).current());
  });

  it('toggles, applies and remembers the theme', () => {
    const theme = TestBed.inject(Theme);
    theme.set('light');
    theme.toggle();
    expect(theme.current()).toBe('dark');
    expect(document.documentElement.dataset['theme']).toBe('dark');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  });
});

describe('ThemeToggle', () => {
  beforeEach(() => localStorage.setItem(THEME_STORAGE_KEY, 'light'));

  it('names the action and switches theme on click', async () => {
    await TestBed.configureTestingModule({ imports: [ThemeToggle] }).compileComponents();
    const fixture = TestBed.createComponent(ThemeToggle);
    await fixture.whenStable();
    const button = (fixture.nativeElement as HTMLElement).querySelector('button')!;
    expect(button.getAttribute('aria-label')).toBe('Activer le thème sombre');

    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-label')).toBe('Activer le thème clair');
    expect(document.documentElement.dataset['theme']).toBe('dark');
  });
});
