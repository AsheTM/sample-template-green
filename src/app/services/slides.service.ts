import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  public slides: any = {
    one: 0,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
    six: 1
  }

  constructor() { }

  public switchTo(slideNumber: any){
    let slide: any = slideNumber;
    if(typeof slide == "number")
      slide = Object.entries(this.slides)[slide - 1][0];
    let curr = false;
    for(let k in this.slides){
      if(slide == k)curr = true;
      this.slides[k] = !curr && -1 || slide == k && 0 || slide != k && curr && 1;
    }
  }
}
