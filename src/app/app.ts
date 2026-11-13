import { Component } from '@angular/core';

import { Header } from './header/header';
import { SlideOne } from './slide-one/slide-one';
import { SlideTwo } from './slide-two/slide-two';
import { SlideThree } from './slide-three/slide-three';
import { SlideFour } from './slide-four/slide-four';
import { SlideFive } from './slide-five/slide-five';
import { SlideSix } from './slide-six/slide-six';
import { SlideSeven } from './slide-seven/slide-seven';
import { SlideEight } from './slide-eight/slide-eight';
import { SlideNine } from './slide-nine/slide-nine';
import { SlideTen } from './slide-ten/slide-ten';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    SlideOne,
    SlideTwo,
    SlideThree,
    SlideFour,
    SlideFive,
    SlideSix,
    SlideSeven,
    SlideEight,
    SlideNine,
    SlideTen,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
