import { DOCUMENT, Directive, ElementRef, OnDestroy, afterNextRender, inject } from '@angular/core';

/**
 * Fades an element in the first time it scrolls into view.
 * Content stays visible without JavaScript, without IntersectionObserver
 * and when the visitor prefers reduced motion.
 */
@Directive({ selector: '[appReveal]' })
export class Reveal implements OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly window = inject(DOCUMENT).defaultView;
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => this.start());
  }

  private start(): void {
    const reducedMotion = this.window?.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!this.window || !('IntersectionObserver' in this.window) || reducedMotion) return;

    // Already on screen at load: leave it alone instead of flashing it.
    const rect = this.element.getBoundingClientRect();
    if (rect.top < this.window.innerHeight && rect.bottom > 0) return;

    this.element.classList.add('reveal');
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          this.element.classList.add('reveal--visible');
          this.observer?.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    this.observer.observe(this.element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
