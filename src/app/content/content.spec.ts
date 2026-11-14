import { NAV_LINKS, PRODUCTS, PROMISES, STEPS, TEAM, initials } from './content';

describe('content', () => {
  it('builds initials from a name', () => {
    expect(initials('Inès Moreau')).toBe('IM');
    expect(initials('jean  paul durand')).toBe('JP');
  });

  it('keeps identifiers unique for tracking', () => {
    const unique = (values: string[]) => new Set(values).size === values.length;
    expect(unique(NAV_LINKS.map((l) => l.href))).toBe(true);
    expect(unique(STEPS.map((s) => s.number))).toBe(true);
    expect(unique(PRODUCTS.map((p) => p.name))).toBe(true);
    expect(unique(PROMISES.map((p) => p.title))).toBe(true);
    expect(unique(TEAM.map((m) => m.name))).toBe(true);
  });

  it('gives every product image a size and alternative text', () => {
    for (const { image } of PRODUCTS.filter((p) => p.image)) {
      expect(image!.alt).toBeTruthy();
      expect(image!.width).toBeGreaterThan(0);
      expect(image!.height).toBeGreaterThan(0);
    }
  });
});
