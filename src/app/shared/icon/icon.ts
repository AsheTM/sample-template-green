import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'arrow-right'
  | 'chart'
  | 'check'
  | 'clock'
  | 'close'
  | 'droplet'
  | 'expand'
  | 'leaf'
  | 'mail'
  | 'menu'
  | 'moon'
  | 'phone'
  | 'rain'
  | 'sensor'
  | 'sprout'
  | 'sun'
  | 'wifi';

/** Decorative stroke icon. Give the surrounding control an accessible name. */
@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styles: ':host { display: inline-flex; flex: none; }',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(24);
  readonly strokeWidth = input(2);
}
