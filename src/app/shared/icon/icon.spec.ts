import { TestBed } from '@angular/core/testing';

import { Icon, IconName } from './icon';

describe('Icon', () => {
  async function render(name: IconName, size?: number): Promise<SVGSVGElement> {
    await TestBed.configureTestingModule({ imports: [Icon] }).compileComponents();
    const fixture = TestBed.createComponent(Icon);
    fixture.componentRef.setInput('name', name);
    if (size) fixture.componentRef.setInput('size', size);
    await fixture.whenStable();
    return (fixture.nativeElement as HTMLElement).querySelector('svg')!;
  }

  it('draws the requested icon as decorative SVG', async () => {
    const svg = await render('droplet');
    expect(svg.namespaceURI).toBe('http://www.w3.org/2000/svg');
    expect(svg.getAttribute('aria-hidden')).toBe('true');
    expect(svg.querySelector('path')?.namespaceURI).toBe('http://www.w3.org/2000/svg');
    expect(svg.querySelectorAll('path')).toHaveLength(1);
  });

  it('applies the size', async () => {
    const svg = await render('leaf', 40);
    expect(svg.getAttribute('width')).toBe('40');
    expect(svg.getAttribute('height')).toBe('40');
  });
});
