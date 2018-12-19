import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideNineComponent } from './slide-nine.component';

describe('SlideNineComponent', () => {
  let component: SlideNineComponent;
  let fixture: ComponentFixture<SlideNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
