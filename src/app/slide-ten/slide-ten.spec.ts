import { TestBed } from '@angular/core/testing';

import { SlideTen } from './slide-ten';

describe('SlideTen', () => {
  it('renders the footer section', async () => {
    await TestBed.configureTestingModule({ imports: [SlideTen] }).compileComponents();
    const fixture = TestBed.createComponent(SlideTen);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('.section')).not.toBeNull();
  });
});
