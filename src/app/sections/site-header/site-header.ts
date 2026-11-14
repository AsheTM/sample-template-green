import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { NAV_LINKS } from '../../content/content';
import { Icon } from '../../shared/icon/icon';
import { ThemeToggle } from '../../shared/theme/theme-toggle';

@Component({
  selector: 'app-site-header',
  imports: [Icon, ThemeToggle],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'menuOpen.set(false)' },
})
export class SiteHeader {
  protected readonly links = NAV_LINKS;
  protected readonly menuOpen = signal(false);
}
