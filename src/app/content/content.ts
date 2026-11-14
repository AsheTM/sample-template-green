import { IconName } from '../shared/icon/icon';

// All page copy that repeats lives here, so content changes never touch templates.

export type Tone = 'green' | 'blue';

export interface NavLink {
  readonly href: `#${string}`;
  readonly label: string;
}

export interface Step {
  readonly number: string;
  readonly icon: IconName;
  readonly tone: Tone;
  readonly title: string;
  readonly product: string;
  readonly text: string;
}

export interface Product {
  readonly name: string;
  readonly text: string;
  readonly image?: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
  readonly icon: IconName;
}

export interface Benefit {
  readonly icon: IconName;
  readonly tone: Tone;
  readonly title: string;
  readonly text: string;
}

export interface TeamMember {
  readonly name: string;
  readonly role: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { href: '#kit', label: 'Le kit' },
  { href: '#fonctionnement', label: 'Fonctionnement' },
  { href: '#promesses', label: 'Nos promesses' },
  { href: '#equipe', label: 'Qui sommes-nous ?' },
  { href: '#contact', label: 'Contact' },
];

export const STEPS: readonly Step[] = [
  {
    number: '01',
    icon: 'sensor',
    tone: 'blue',
    title: 'Mesurer',
    product: 'Smart Sensor',
    text: "Comme un œil et un capteur météo, il collecte des données stratégiques dans l'espace cultivé et les transmet en temps réel.",
  },
  {
    number: '02',
    icon: 'phone',
    tone: 'green',
    title: 'Analyser',
    product: 'Smart App',
    text: "L'application croise la météo et votre terrain, et vous indique si les quantités d'arrosage sont en phase avec le temps qu'il fait.",
  },
  {
    number: '03',
    icon: 'droplet',
    tone: 'blue',
    title: 'Arroser',
    product: 'Smart Water Control',
    text: 'Le programmateur arrose en quelques clics, à tout moment et où que vous soyez, ou ajuste les doses automatiquement, sans votre intervention.',
  },
];

export const PRODUCTS: readonly Product[] = [
  {
    name: 'Smart Water Control',
    text: 'Pour programmer, piloter et ajuster avec précision le besoin en eau de vos plantes.',
    icon: 'droplet',
    image: {
      src: '/assets/product1.webp',
      alt: "Programmateur d'arrosage Smart Water Control",
      width: 315,
      height: 344,
    },
  },
  {
    name: 'Smart Sensor',
    text: 'Un œil et un capteur météo dans votre espace cultivé, avec des données transmises en temps réel.',
    icon: 'sensor',
    image: {
      src: '/assets/product2.webp',
      alt: 'Capteur Smart Sensor à planter dans le sol',
      width: 329,
      height: 390,
    },
  },
  {
    name: 'Smart App',
    text: "Pilotez tout à distance, depuis un smartphone, une tablette ou un ordinateur, et soyez prévenu quand l'arrosage n'est plus en phase avec la météo.",
    icon: 'phone',
  },
];

export const PROMISES: readonly Benefit[] = [
  {
    icon: 'phone',
    tone: 'green',
    title: 'Irriguer à distance',
    text: "Irriguer indépendamment du temps et de l'espace avec son appareil intelligent.",
  },
  {
    icon: 'clock',
    tone: 'green',
    title: 'Gagner du temps',
    text: 'Optimiser le temps de travail.',
  },
  {
    icon: 'sprout',
    tone: 'green',
    title: 'Se libérer',
    text: "Libérer l'exploitant pour s'adonner à d'autres activités de la chaîne de valeur agricole.",
  },
  {
    icon: 'expand',
    tone: 'green',
    title: 'Produire plus',
    text: 'Augmenter la superficie irrigable et accroître la production.',
  },
  {
    icon: 'droplet',
    tone: 'blue',
    title: "Préserver l'eau",
    text: "Gérer efficacement les ressources naturelles, notamment l'eau.",
  },
  {
    icon: 'chart',
    tone: 'blue',
    title: 'Données en temps réel',
    text: "Disposer en temps réel des données climatiques d'une zone.",
  },
];

// Fictional team for the demo site; no real personal details.
export const TEAM: readonly TeamMember[] = [
  { name: 'Inès Moreau', role: 'Cheffe de projet' },
  { name: 'Karim Benali', role: 'Ingénieur IoT' },
  { name: 'Léa Dubois', role: 'Agronome' },
  { name: 'Yanis Haddad', role: 'Développeur mobile' },
];

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);
}
