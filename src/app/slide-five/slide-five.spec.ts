import { TestBed } from '@angular/core/testing';

import { SlideFive } from './slide-five';

describe('SlideFive', () => {
  it('renders its content', async () => {
    await TestBed.configureTestingModule({ imports: [SlideFive] }).compileComponents();
    const fixture = TestBed.createComponent(SlideFive);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.title')?.textContent).toContain('Ce que nous vendons?');
  });
});
