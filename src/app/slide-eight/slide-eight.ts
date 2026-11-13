import { Component } from '@angular/core';

export interface TeamMember {
  fullName: string;
  position: string;
  phone: string;
  email: string;
  photoClass: string;
}

export interface SocialLink {
  name: string;
  label: string;
  icon: string;
}

const PROFILE: TeamMember = {
  fullName: 'DAWOUD Haitham',
  position: 'Ingénieur Développeur FullStack JAVA/NodeJS Angular/React/Vue',
  phone: '+212 636 52 72 14',
  email: 'haithemalidaoud@gmail.com',
  photoClass: 'me',
};

@Component({
  selector: 'app-slide-eight',
  templateUrl: './slide-eight.html',
  styleUrl: './slide-eight.scss',
})
export class SlideEight {
  /** The original design shows the same profile card four times. */
  protected readonly members: readonly TeamMember[] = [PROFILE, PROFILE, PROFILE, PROFILE];

  protected readonly socials: readonly SocialLink[] = [
    { name: 'facebook', label: 'Facebook', icon: '/assets/icons/facebook.png' },
    { name: 'twitter', label: 'Twitter', icon: '/assets/icons/twitter.png' },
    { name: 'instagram', label: 'Instagram', icon: '/assets/icons/instagram.svg' },
  ];
}
