import { TestBed } from '@angular/core/testing';

import { App } from './app';

describe('App', () => {
  async function render(): Promise<HTMLElement> {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('renders the header and all ten slides', async () => {
    const el = await render();
    expect(el.querySelector('app-header')).not.toBeNull();
    expect(el.querySelectorAll('#Prez > .part')).toHaveLength(10);
  });

  it('has a target for every header link', async () => {
    const el = await render();
    const hrefs = Array.from(el.querySelectorAll('app-header .menu a')).map((a) => a.getAttribute('href')!);
    for (const href of hrefs) {
      expect(el.querySelector(href), href).not.toBeNull();
    }
  });
});
