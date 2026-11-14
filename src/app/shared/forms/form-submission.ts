import { DOCUMENT, Injectable, inject } from '@angular/core';

export type FormName = 'contact' | 'newsletter';

/** Honeypot field name: real visitors leave it empty, bots fill it in. */
export const HONEYPOT_FIELD = 'bot-field';

/**
 * Sends a form to Netlify Forms. Each form also exists as a hidden static
 * copy in index.html so Netlify detects it at build time.
 */
@Injectable({ providedIn: 'root' })
export class FormSubmission {
  private readonly window = inject(DOCUMENT).defaultView;

  async send(form: FormName, fields: Record<string, string>): Promise<void> {
    if (!this.window) throw new Error('Forms can only be sent from a browser.');
    const body = new URLSearchParams({ 'form-name': form, ...fields });
    const response = await this.window.fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
    if (!response.ok)
      throw new Error(`Form "${form}" was rejected with status ${response.status}.`);
  }
}
