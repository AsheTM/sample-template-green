import { Component, inject } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-slide-nine',
  imports: [ReactiveFormsModule],
  templateUrl: './slide-nine.html',
  styleUrl: './slide-nine.scss',
})
export class SlideNine {
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly newsletterForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  protected readonly contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  protected isInvalid(control: AbstractControl): boolean {
    return control.invalid && (control.touched || control.dirty);
  }

  // No backend endpoint exists yet: submissions are only validated.
  protected submitNewsletter(): void {
    this.newsletterForm.markAllAsTouched();
  }

  protected submitContact(): void {
    this.contactForm.markAllAsTouched();
  }
}
