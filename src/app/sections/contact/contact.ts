import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-contact',
  imports: [Icon, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  protected readonly newsletterForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  protected isInvalid(control: AbstractControl): boolean {
    return control.invalid && (control.touched || control.dirty);
  }

  protected submitContact(): void {
    this.contactForm.markAllAsTouched();
  }

  protected submitNewsletter(): void {
    this.newsletterForm.markAllAsTouched();
  }
}
