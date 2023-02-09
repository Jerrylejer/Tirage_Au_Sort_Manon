import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySelectedLearnerComponent } from './display-selected-learner.component';

describe('DisplaySelectedLearnerComponent', () => {
  let component: DisplaySelectedLearnerComponent;
  let fixture: ComponentFixture<DisplaySelectedLearnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySelectedLearnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySelectedLearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
