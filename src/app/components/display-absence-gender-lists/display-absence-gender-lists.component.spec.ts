import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAbsenceGenderListsComponent } from './display-absence-gender-lists.component';

describe('DisplayAbsenceGenderListsComponent', () => {
  let component: DisplayAbsenceGenderListsComponent;
  let fixture: ComponentFixture<DisplayAbsenceGenderListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAbsenceGenderListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAbsenceGenderListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
