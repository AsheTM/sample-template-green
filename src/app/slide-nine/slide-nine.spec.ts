import { TestBed } from '@angular/core/testing';

import { SlideNine } from './slide-nine';

describe('SlideNine', () => {
  async function render() {
    await TestBed.configureTestingModule({ imports: [SlideNine] }).compileComponents();
    const fixture = TestBed.createComponent(SlideNine);
    await fixture.whenStable();
    return fixture;
  }

  it('labels every field', async () => {
    const el = (await render()).nativeElement as HTMLElement;
    const fields = el.querySelectorAll('input, textarea');
    expect(fields).toHaveLength(4);
    fields.forEach((field) => {
      expect(el.querySelector(`label[for="${field.id}"]`)).not.toBeNull();
    });
  });

  it('uses e-mail inputs for e-mail fields', async () => {
    const el = (await render()).nativeElement as HTMLElement;
    expect(el.querySelector<HTMLInputElement>('#newsletter-email')?.type).toBe('email');
    expect(el.querySelector<HTMLInputElement>('#contact-email')?.type).toBe('email');
  });

  it('flags an invalid newsletter e-mail on submit', async () => {
    const fixture = await render();
    const el = fixture.nativeElement as HTMLElement;
    const input = el.querySelector<HTMLInputElement>('#newsletter-email')!;
    input.value = 'not-an-email';
    input.dispatchEvent(new Event('input'));
    input.closest('form')!.dispatchEvent(new Event('submit'));
    await fixture.whenStable();
    expect(input.classList).toContain('invalid');
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });

  it('accepts a valid newsletter e-mail', async () => {
    const fixture = await render();
    const el = fixture.nativeElement as HTMLElement;
    const input = el.querySelector<HTMLInputElement>('#newsletter-email')!;
    input.value = 'someone@example.com';
    input.dispatchEvent(new Event('input'));
    input.closest('form')!.dispatchEvent(new Event('submit'));
    await fixture.whenStable();
    expect(input.classList).not.toContain('invalid');
  });
});
