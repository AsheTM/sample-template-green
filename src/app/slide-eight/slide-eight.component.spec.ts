import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideEightComponent } from './slide-eight.component';

describe('SlideEightComponent', () => {
  let component: SlideEightComponent;
  let fixture: ComponentFixture<SlideEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
