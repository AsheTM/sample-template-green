import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TEAM, initials } from '../../content/content';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-team',
  imports: [Reveal],
  template: `
    <section id="equipe" class="team section" aria-labelledby="team-title">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Qui sommes-nous ?</span>
          <h2 id="team-title" class="title">Une équipe passionnée par la terre.</h2>
          <p class="lead">
            Smart Green propose une solution innovante pour l'arrosage des jardins et des terres
            agricoles, pour celles et ceux qui voient la terre comme un espace de vie, de récréation
            et une source de nourriture.
          </p>
        </div>
        <ul class="members">
          @for (member of members; track member.name; let odd = $odd) {
            <li class="member" appReveal>
              <span class="avatar" [class.avatar--blue]="odd" aria-hidden="true">
                {{ initials(member.name) }}
              </span>
              <span class="name">{{ member.name }}</span>
              <span class="lead">{{ member.role }}</span>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .team {
      background: var(--surface-alt);
    }
    .members {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 20px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .member {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      padding: 28px;
      border-radius: var(--radius);
      background: var(--surface);
      text-align: center;
    }
    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 96px;
      height: 96px;
      margin-bottom: 10px;
      border-radius: 50%;
      background: var(--green-soft);
      font-size: 30px;
      font-weight: 800;
    }
    .avatar--blue {
      background: var(--blue-soft);
    }
    .name {
      font-size: 18px;
      font-weight: 800;
    }
    .lead {
      font-size: 15px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Team {
  protected readonly members = TEAM;
  protected readonly initials = initials;
}
