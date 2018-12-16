import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../services/slides.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private slides: SlidesService) { }

  ngOnInit() {
  }

}
