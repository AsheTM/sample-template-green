import { TestBed } from '@angular/core/testing';

import { SlideSeven } from './slide-seven';

describe('SlideSeven', () => {
  it('renders its content', async () => {
    await TestBed.configureTestingModule({ imports: [SlideSeven] }).compileComponents();
    const fixture = TestBed.createComponent(SlideSeven);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.title')?.textContent).toContain('Nos promesses?');
  });
});
