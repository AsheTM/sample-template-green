import { TestBed } from '@angular/core/testing';

import { SlideOne } from './slide-one';

describe('SlideOne', () => {
  it('renders its content', async () => {
    await TestBed.configureTestingModule({ imports: [SlideOne] }).compileComponents();
    const fixture = TestBed.createComponent(SlideOne);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.title')?.textContent).toContain('Smart');
  });
});
