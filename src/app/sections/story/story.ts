import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-story',
  imports: [NgOptimizedImage, Reveal],
  template: `
    <section class="story section" aria-labelledby="story-title">
      <div class="container layout" appReveal>
        <div class="copy">
          <h2 id="story-title" class="eyebrow">Jardinier merveilleux</h2>
          <blockquote class="quote">
            « La nature fait un excellent travail, mais parfois, elle a besoin d'un peu d'aide.
            C'est là que nous intervenons. »
          </blockquote>
          <p class="lead">
            Les abeilles sont un excellent exemple de ce processus remarquable et invisible qui aide
            vos plantes à se développer. En connectant votre système d'arrosage Smart Green à votre
            Wi-Fi, vous rejoignez à votre tour ce travail d'équipe.
          </p>
        </div>
        <img
          class="photo"
          ngSrc="/assets/Picture2.webp"
          width="1000"
          height="667"
          sizes="(max-width: 960px) 100vw, 45vw"
          alt="Un arrosoir verse de l'eau sur une jeune pousse"
        />
      </div>
    </section>
  `,
  styles: `
    .story {
      background: var(--surface-green);
    }
    .layout {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 56px;
    }
    .copy {
      display: flex;
      flex: 1 1 460px;
      flex-direction: column;
      gap: 20px;
      min-width: 0;
    }
    .quote {
      margin: 0;
      font-size: clamp(26px, 3vw, 36px);
      line-height: 1.25;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    .photo {
      flex: 1 1 400px;
      min-width: 0;
      height: 360px;
      object-fit: cover;
      border-radius: var(--radius-lg);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Story {}
