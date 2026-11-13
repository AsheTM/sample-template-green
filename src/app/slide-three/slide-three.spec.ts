import { TestBed } from '@angular/core/testing';

import { SlideThree } from './slide-three';

describe('SlideThree', () => {
  it('renders its content', async () => {
    await TestBed.configureTestingModule({ imports: [SlideThree] }).compileComponents();
    const fixture = TestBed.createComponent(SlideThree);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.title')?.textContent).toContain('La nature');
  });
});
