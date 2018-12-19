import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTenComponent } from './slide-ten.component';

describe('SlideTenComponent', () => {
  let component: SlideTenComponent;
  let fixture: ComponentFixture<SlideTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
