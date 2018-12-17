import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSevenComponent } from './slide-seven.component';

describe('SlideSevenComponent', () => {
  let component: SlideSevenComponent;
  let fixture: ComponentFixture<SlideSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
