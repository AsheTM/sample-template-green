import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly highlights = [
    'Pilotage à distance',
    'Météo en temps réel',
    "Moins d'eau gaspillée",
  ];
}
