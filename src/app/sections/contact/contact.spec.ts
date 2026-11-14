import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact } from './contact';

describe('Contact', () => {
  let fixture: ComponentFixture<Contact>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Contact] }).compileComponents();
    fixture = TestBed.createComponent(Contact);
    el = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  function submit(form: HTMLFormElement): Promise<void> {
    form.dispatchEvent(new Event('submit'));
    return fixture.whenStable();
  }

  it('labels every field', () => {
    for (const field of Array.from(el.querySelectorAll('input, textarea'))) {
      expect(el.querySelector(`label[for="${field.id}"]`), field.id).not.toBeNull();
    }
  });

  it('shows an error for each empty contact field on submit', async () => {
    await submit(el.querySelectorAll('form')[0]);
    for (const id of ['contact-name', 'contact-email', 'contact-message']) {
      const field = el.querySelector(`#${id}`)!;
      expect(field.getAttribute('aria-invalid'), id).toBe('true');
      expect(el.querySelector(`#${field.getAttribute('aria-describedby')}`), id).not.toBeNull();
    }
  });

  it('rejects an invalid newsletter e-mail', async () => {
    const input = el.querySelector<HTMLInputElement>('#newsletter-email')!;
    input.value = 'not-an-email';
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(input.classList).toContain('invalid');
    expect(el.querySelector('#newsletter-email-error')?.textContent).toContain('valide');
  });

  it('shows no error before the visitor interacts', () => {
    expect(el.querySelectorAll('.error')).toHaveLength(0);
    expect(el.querySelectorAll('[aria-describedby]')).toHaveLength(0);
  });
});
