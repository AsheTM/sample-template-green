import { Component } from '@angular/core';
import { SlidesService } from './services/slides.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sample-template-green';

  constructor(private slides: SlidesService){}
}
