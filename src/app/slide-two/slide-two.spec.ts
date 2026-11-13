import { TestBed } from '@angular/core/testing';

import { SlideTwo } from './slide-two';

describe('SlideTwo', () => {
  it('renders its content', async () => {
    await TestBed.configureTestingModule({ imports: [SlideTwo] }).compileComponents();
    const fixture = TestBed.createComponent(SlideTwo);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.title')?.textContent).toContain('Smart Green');
  });
});
