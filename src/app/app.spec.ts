import { TestBed } from '@angular/core/testing';

import { App } from './app';
import { NAV_LINKS } from './content/content';

describe('App', () => {
  async function render(): Promise<HTMLElement> {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('renders the header, every section and the footer in order', async () => {
    const el = await render();
    const order = Array.from(el.querySelectorAll('main > *')).map((node) => node.localName);
    expect(order).toEqual([
      'div',
      'app-hero',
      'app-story',
      'app-how-it-works',
      'app-kit',
      'app-promises',
      'app-team',
      'app-contact',
    ]);
    expect(el.querySelector('app-site-header')).not.toBeNull();
    expect(el.querySelector('app-site-footer')).not.toBeNull();
  });

  it('has exactly one h1', async () => {
    const el = await render();
    expect(el.querySelectorAll('h1')).toHaveLength(1);
  });

  it('has a target for every navigation link and the skip link', async () => {
    const el = await render();
    for (const { href } of [...NAV_LINKS, { href: '#accueil' }, { href: '#contenu' }]) {
      expect(el.querySelector(href), href).not.toBeNull();
    }
  });

  it('gives every image a text alternative', async () => {
    const el = await render();
    for (const img of Array.from(el.querySelectorAll('img'))) {
      expect(img.getAttribute('alt'), img.src).toBeTruthy();
    }
  });
});
