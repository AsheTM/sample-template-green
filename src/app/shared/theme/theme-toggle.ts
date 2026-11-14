import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { Icon } from '../icon/icon';
import { Theme } from './theme';

@Component({
  selector: 'app-theme-toggle',
  imports: [Icon],
  template: `
    <button type="button" class="toggle" [attr.aria-label]="label()" [title]="label()" (click)="theme.toggle()">
      <app-icon [name]="theme.current() === 'dark' ? 'sun' : 'moon'" [size]="20" />
    </button>
  `,
  styles: `
    .toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border: 1px solid var(--line);
      border-radius: 50%;
      background: var(--surface);
      color: var(--text);
      cursor: pointer;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggle {
  protected readonly theme = inject(Theme);
  protected readonly label = computed(() =>
    this.theme.current() === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre',
  );
}
