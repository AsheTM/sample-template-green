import { TestBed } from '@angular/core/testing';

import { SlideFour } from './slide-four';

describe('SlideFour', () => {
  it('renders its content', async () => {
    await TestBed.configureTestingModule({ imports: [SlideFour] }).compileComponents();
    const fixture = TestBed.createComponent(SlideFour);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.title')?.textContent).toContain('Du terrain');
  });
});
