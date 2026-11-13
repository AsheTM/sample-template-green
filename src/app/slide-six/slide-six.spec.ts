import { TestBed } from '@angular/core/testing';

import { SlideSix } from './slide-six';

describe('SlideSix', () => {
  it('renders its content', async () => {
    await TestBed.configureTestingModule({ imports: [SlideSix] }).compileComponents();
    const fixture = TestBed.createComponent(SlideSix);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.product1 .name')?.textContent).toContain('Smart Water');
  });
});
