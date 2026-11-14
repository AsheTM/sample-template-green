import { DOCUMENT, Injectable, computed, inject, signal } from '@angular/core';

export type ThemeName = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'sg-theme';

/**
 * Colour theme. Follows the system setting until the visitor picks one,
 * then remembers that choice. index.html applies a stored choice before
 * the first paint to avoid a flash.
 */
@Injectable({ providedIn: 'root' })
export class Theme {
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document.defaultView;
  private readonly media = this.window?.matchMedia?.('(prefers-color-scheme: dark)');

  private readonly stored = signal<ThemeName | null>(this.readStored());
  private readonly systemDark = signal(this.media?.matches ?? false);

  readonly current = computed<ThemeName>(
    () => this.stored() ?? (this.systemDark() ? 'dark' : 'light'),
  );

  constructor() {
    this.media?.addEventListener?.('change', (event) => this.systemDark.set(event.matches));
  }

  toggle(): void {
    this.set(this.current() === 'dark' ? 'light' : 'dark');
  }

  set(theme: ThemeName): void {
    this.stored.set(theme);
    this.document.documentElement.dataset['theme'] = theme;
    try {
      this.window?.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Storage can be unavailable (private mode); the choice then lasts for this visit.
    }
  }

  private readStored(): ThemeName | null {
    try {
      const value = this.window?.localStorage.getItem(THEME_STORAGE_KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  }
}
