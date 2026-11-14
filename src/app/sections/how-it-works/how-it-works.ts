import { ChangeDetectionStrategy, Component } from '@angular/core';

import { STEPS } from '../../content/content';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-how-it-works',
  imports: [Icon, Reveal],
  template: `
    <section id="fonctionnement" class="section" aria-labelledby="how-title">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow eyebrow--blue">Fonctionnement</span>
          <h2 id="how-title" class="title">Mesurer, analyser, arroser.</h2>
          <p class="lead">
            Les données météorologiques croisées avec les caractéristiques de votre terrain
            permettent de maîtriser votre consommation d'eau, d'éviter le gaspillage et d'économiser
            de l'argent.
          </p>
        </div>
        <ol class="steps">
          @for (step of steps; track step.number) {
            <li class="card step" appReveal>
              <div class="top">
                <span class="icon-tile icon-tile--{{ step.tone }}">
                  <app-icon [name]="step.icon" [size]="26" [strokeWidth]="1.9" />
                </span>
                <span class="number" aria-hidden="true">{{ step.number }}</span>
              </div>
              <h3>{{ step.title }}</h3>
              <span class="chip">{{ step.product }}</span>
              <p class="lead">{{ step.text }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .step {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 32px;
    }
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .icon-tile {
      width: 56px;
      height: 56px;
      border-radius: 18px;
    }
    .number {
      font-size: 40px;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: var(--line);
    }
    h3 {
      font-size: 24px;
      font-weight: 800;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowItWorks {
  protected readonly steps = STEPS;
}
