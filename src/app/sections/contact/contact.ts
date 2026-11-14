import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { HONEYPOT_FIELD, FormName, FormSubmission } from '../../shared/forms/form-submission';
import { Icon } from '../../shared/icon/icon';

export type SendStatus = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  imports: [Icon, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly submission = inject(FormSubmission);

  protected readonly honeypot = HONEYPOT_FIELD;

  protected readonly contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    [HONEYPOT_FIELD]: [''],
  });

  protected readonly newsletterForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    [HONEYPOT_FIELD]: [''],
  });

  protected readonly contactStatus = signal<SendStatus>('idle');
  protected readonly newsletterStatus = signal<SendStatus>('idle');

  protected isInvalid(control: AbstractControl): boolean {
    return control.invalid && (control.touched || control.dirty);
  }

  protected submitContact(): Promise<void> {
    return this.send('contact', this.contactForm, this.contactStatus);
  }

  protected submitNewsletter(): Promise<void> {
    return this.send('newsletter', this.newsletterForm, this.newsletterStatus);
  }

  private async send(
    name: FormName,
    form: FormGroup,
    status: ReturnType<typeof signal<SendStatus>>,
  ): Promise<void> {
    if (status() === 'sending') return;
    form.markAllAsTouched();
    if (form.invalid) {
      status.set('idle');
      return;
    }
    status.set('sending');
    try {
      await this.submission.send(name, form.getRawValue() as Record<string, string>);
      form.reset();
      status.set('sent');
    } catch {
      status.set('error');
    }
  }
}
