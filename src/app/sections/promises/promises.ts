import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROMISES } from '../../content/content';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-promises',
  imports: [Icon, NgOptimizedImage, Reveal],
  template: `
    <section id="promesses" class="section" aria-labelledby="promises-title">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Nos promesses</span>
          <h2 id="promises-title" class="title">Ce que Smart Green change pour vous.</h2>
        </div>
        <img
          class="banner"
          appReveal
          ngSrc="/assets/Picture6.webp"
          width="1280"
          height="765"
          sizes="100vw"
          alt="Champ de maïs au coucher du soleil"
        />
        <ul class="list">
          @for (item of promises; track item.title) {
            <li class="item" appReveal>
              <span class="icon-tile icon-tile--{{ item.tone }}">
                <app-icon [name]="item.icon" [strokeWidth]="1.9" />
              </span>
              <div>
                <h3>{{ item.title }}</h3>
                <p class="lead">{{ item.text }}</p>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .banner {
      width: 100%;
      height: clamp(220px, 28vw, 340px);
      margin-bottom: 56px;
      object-fit: cover;
      border-radius: var(--radius-lg);
    }
    .list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
      gap: 40px 48px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .item {
      display: flex;
      gap: 18px;
    }
    h3 {
      margin-bottom: 6px;
      font-size: 19px;
      font-weight: 800;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Promises {
  protected readonly promises = PROMISES;
}
