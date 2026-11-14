import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Contact } from './sections/contact/contact';
import { Hero } from './sections/hero/hero';
import { HowItWorks } from './sections/how-it-works/how-it-works';
import { Kit } from './sections/kit/kit';
import { Promises } from './sections/promises/promises';
import { SiteFooter } from './sections/site-footer/site-footer';
import { SiteHeader } from './sections/site-header/site-header';
import { Story } from './sections/story/story';
import { Team } from './sections/team/team';

@Component({
  selector: 'app-root',
  imports: [SiteHeader, Hero, Story, HowItWorks, Kit, Promises, Team, Contact, SiteFooter],
  template: `
    <a class="skip-link" href="#contenu">Aller au contenu</a>
    <app-site-header />
    <main id="contenu">
      <div id="accueil"></div>
      <app-hero />
      <app-story />
      <app-how-it-works />
      <app-kit />
      <app-promises />
      <app-team />
      <app-contact />
    </main>
    <app-site-footer />
  `,
  styles: `
    .skip-link {
      position: absolute;
      top: -100px;
      left: 16px;
      z-index: 20;
      padding: 12px 20px;
      border-radius: 999px;
      background: var(--accent);
      color: var(--on-accent);
      font-weight: 700;
    }
    .skip-link:focus {
      top: 12px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
