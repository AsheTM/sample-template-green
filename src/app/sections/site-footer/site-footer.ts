import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NAV_LINKS } from '../../content/content';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-site-footer',
  imports: [Icon],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="top">
          <div class="brand">
            <span class="name">
              <span class="logo"><app-icon name="leaf" [size]="22" /></span>
              Smart Green
            </span>
            <span class="muted">Une terre connectée est une réalité.</span>
          </div>
          <nav class="links" aria-label="Pied de page">
            @for (link of links; track link.href) {
              <a [href]="link.href">{{ link.label }}</a>
            }
          </nav>
        </div>
        <div class="bottom muted">
          <span>© {{ year }} Smart Green · Code sous licence MIT</span>
          <span>Projet d'école encadré par Mr HASBAOUI</span>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      padding: 64px 0 32px;
      background: var(--dark);
      color: var(--on-dark);
    }
    .top {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 32px;
    }
    .brand {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .name {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 20px;
      font-weight: 800;
    }
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: var(--dark-raised);
      color: var(--accent);
    }
    .muted {
      color: var(--on-dark-muted);
    }
    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 32px;
      font-weight: 600;
    }
    .links a {
      text-decoration: none;
    }
    .links a:hover {
      color: var(--on-dark-green);
    }
    .bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 12px;
      margin-top: 40px;
      padding-top: 24px;
      border-top: 1px solid var(--dark-line);
      font-size: 14px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly links = NAV_LINKS;
  protected readonly year = new Date().getFullYear();
}
