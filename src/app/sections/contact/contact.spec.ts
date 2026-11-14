import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmission } from '../../shared/forms/form-submission';
import { Contact } from './contact';

describe('Contact', () => {
  let fixture: ComponentFixture<Contact>;
  let el: HTMLElement;
  let send: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    send = vi.fn().mockResolvedValue(undefined);
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [{ provide: FormSubmission, useValue: { send } }],
    }).compileComponents();
    fixture = TestBed.createComponent(Contact);
    el = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  const forms = () => el.querySelectorAll('form');

  async function submit(form: HTMLFormElement): Promise<void> {
    form.dispatchEvent(new Event('submit'));
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve));
    await fixture.whenStable();
  }

  async function type(selector: string, value: string): Promise<void> {
    const field = el.querySelector<HTMLInputElement | HTMLTextAreaElement>(selector)!;
    field.value = value;
    field.dispatchEvent(new Event('input'));
    await fixture.whenStable();
  }

  async function fillContact(): Promise<void> {
    await type('#contact-name', 'Inès Moreau');
    await type('#contact-email', 'ines@example.com');
    await type('#contact-message', 'Bonjour');
  }

  it('labels every field', () => {
    for (const field of Array.from(el.querySelectorAll('input, textarea'))) {
      expect(el.querySelector(`label[for="${field.id}"]`), field.id).not.toBeNull();
    }
  });

  it('shows no error before the visitor interacts', () => {
    expect(el.querySelectorAll('.error')).toHaveLength(0);
    expect(el.querySelectorAll('[aria-describedby]')).toHaveLength(0);
  });

  it('shows an error for each empty contact field and sends nothing', async () => {
    await submit(forms()[0]);
    for (const id of ['contact-name', 'contact-email', 'contact-message']) {
      const field = el.querySelector(`#${id}`)!;
      expect(field.getAttribute('aria-invalid'), id).toBe('true');
      expect(el.querySelector(`#${field.getAttribute('aria-describedby')}`), id).not.toBeNull();
    }
    expect(send).not.toHaveBeenCalled();
  });

  it('rejects an invalid newsletter e-mail', async () => {
    await type('#newsletter-email', 'not-an-email');
    const input = el.querySelector('#newsletter-email')!;
    expect(input.classList).toContain('invalid');
    expect(el.querySelector('#newsletter-email-error')?.textContent).toContain('valide');
  });

  it('sends a valid contact form, confirms and clears it', async () => {
    await fillContact();
    await submit(forms()[0]);
    expect(send).toHaveBeenCalledWith('contact', {
      name: 'Inès Moreau',
      email: 'ines@example.com',
      message: 'Bonjour',
      'bot-field': '',
    });
    expect(forms()[0].querySelector('[role="status"]')?.textContent).toContain('bien été envoyé');
    expect(el.querySelector<HTMLInputElement>('#contact-name')!.value).toBe('');
  });

  it('keeps the message and reports a failure', async () => {
    send.mockRejectedValue(new Error('offline'));
    await fillContact();
    await submit(forms()[0]);
    expect(forms()[0].querySelector('[role="status"]')?.textContent).toContain('échoué');
    expect(el.querySelector<HTMLTextAreaElement>('#contact-message')!.value).toBe('Bonjour');
  });

  it('subscribes to the newsletter', async () => {
    await type('#newsletter-email', 'ines@example.com');
    await submit(forms()[1]);
    expect(send).toHaveBeenCalledWith('newsletter', {
      email: 'ines@example.com',
      'bot-field': '',
    });
    expect(forms()[1].querySelector('[role="status"]')?.textContent).toContain('inscription');
  });
});
