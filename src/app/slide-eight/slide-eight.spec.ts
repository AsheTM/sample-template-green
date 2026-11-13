import { TestBed } from '@angular/core/testing';

import { SlideEight } from './slide-eight';

describe('SlideEight', () => {
  async function render(): Promise<HTMLElement> {
    await TestBed.configureTestingModule({ imports: [SlideEight] }).compileComponents();
    const fixture = TestBed.createComponent(SlideEight);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('renders four profile cards', async () => {
    const el = await render();
    expect(el.querySelectorAll('.card.card-2')).toHaveLength(4);
    expect(el.querySelectorAll('.img.me')).toHaveLength(4);
    expect(el.querySelector('.full-name')?.textContent).toContain('DAWOUD Haitham');
  });

  it('uses local social icons only', async () => {
    const el = await render();
    const icons = Array.from(el.querySelectorAll<HTMLImageElement>('.card:first-child .icons img'));
    expect(icons.map((i) => i.alt)).toEqual(['Facebook', 'Twitter', 'Instagram']);
    for (const icon of icons) {
      expect(icon.getAttribute('src')).toMatch(/^\/assets\/icons\//);
    }
    expect(el.querySelectorAll('.icon.facebook, .icon.twitter, .icon.instagram')).toHaveLength(12);
  });
});
