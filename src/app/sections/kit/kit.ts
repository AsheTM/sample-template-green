import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PRODUCTS } from '../../content/content';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-kit',
  imports: [Icon, NgOptimizedImage, Reveal],
  template: `
    <section id="kit" class="kit section" aria-labelledby="kit-title">
      <div class="container">
        <div class="head">
          <div class="section-head">
            <span class="eyebrow">Le kit Smart Green</span>
            <h2 id="kit-title" class="title">Un système d'arrosage intelligent et connecté.</h2>
          </div>
          <p class="intro">
            Le kit programmateur Smart Green se gère depuis un smartphone, une tablette ou un
            ordinateur.
          </p>
        </div>
        <ul class="products">
          @for (product of products; track product.name) {
            <li class="product" appReveal>
              <div class="visual" [class.visual--photo]="product.image">
                @if (product.image; as image) {
                  <img
                    [ngSrc]="image.src"
                    [width]="image.width"
                    [height]="image.height"
                    [alt]="image.alt"
                  />
                } @else {
                  <app-icon [name]="product.icon" [size]="56" [strokeWidth]="1.6" />
                }
              </div>
              <h3>{{ product.name }}</h3>
              <p>{{ product.text }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .kit {
      background: var(--dark);
      color: var(--on-dark);
    }
    .eyebrow {
      color: var(--on-dark-green);
    }
    .head {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: space-between;
      gap: 0 24px;
      margin-bottom: 48px;
    }
    .head .section-head {
      margin: 0;
    }
    .intro {
      max-width: 420px;
      color: var(--on-dark-muted);
    }
    .products {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .product {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 16px 16px 32px;
      border: 1px solid var(--dark-line);
      border-radius: var(--radius-lg);
      background: var(--dark-raised);
    }
    .visual {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 220px;
      margin-bottom: 8px;
      padding: 16px;
      border-radius: 18px;
      background: var(--dark-sunken);
      color: var(--on-dark-blue);
    }
    .visual--photo {
      background: #fff;
    }
    .visual img {
      width: auto;
      height: 188px;
      object-fit: contain;
    }
    .product h3,
    .product p {
      padding-inline: 16px;
    }
    .product h3 {
      font-size: 22px;
      font-weight: 800;
    }
    .product p {
      color: var(--on-dark-muted);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kit {
  protected readonly products = PRODUCTS;
}
