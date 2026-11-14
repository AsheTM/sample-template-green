import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAV_LINKS } from '../../content/content';
import { SiteHeader } from './site-header';

describe('SiteHeader', () => {
  let fixture: ComponentFixture<SiteHeader>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SiteHeader] }).compileComponents();
    fixture = TestBed.createComponent(SiteHeader);
    el = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  const burger = () => el.querySelector<HTMLButtonElement>('.burger')!;
  const nav = () => el.querySelector('nav')!;

  it('lists the navigation links', () => {
    const links = Array.from(nav().querySelectorAll('a')).map((a) => [
      a.getAttribute('href'),
      a.textContent?.trim(),
    ]);
    expect(links).toEqual(NAV_LINKS.map((link) => [link.href, link.label]));
  });

  it('opens and closes the mobile menu', async () => {
    expect(burger().getAttribute('aria-expanded')).toBe('false');
    expect(burger().getAttribute('aria-controls')).toBe(nav().id);

    burger().click();
    await fixture.whenStable();
    expect(burger().getAttribute('aria-expanded')).toBe('true');
    expect(burger().getAttribute('aria-label')).toBe('Fermer le menu');
    expect(nav().classList).toContain('nav--open');

    nav().querySelector('a')!.click();
    await fixture.whenStable();
    expect(burger().getAttribute('aria-expanded')).toBe('false');
  });

  it('closes the menu with Escape', async () => {
    burger().click();
    await fixture.whenStable();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(burger().getAttribute('aria-expanded')).toBe('false');
  });
});
