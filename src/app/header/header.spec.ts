import { TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header', () => {
  it('links each menu entry to its section', async () => {
    await TestBed.configureTestingModule({ imports: [Header] }).compileComponents();
    const fixture = TestBed.createComponent(Header);
    await fixture.whenStable();
    const links = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('.menu a'));
    expect(links.map((a) => [a.getAttribute('href'), a.textContent?.trim()])).toEqual([
      ['#SmartGreen', 'Smart Green'],
      ['#Products', 'Nos produits'],
      ['#Promises', 'Nos promesses'],
      ['#WhoWeAre', 'Qui sommes-nous?'],
      ['#Newsletter', 'Newsletter'],
      ['#About', 'A propos'],
    ]);
  });
});
