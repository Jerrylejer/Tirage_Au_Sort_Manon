import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceSelectionListComponent } from './absence-selection-list.component';

describe('AbsenceSelectionListComponent', () => {
  let component: AbsenceSelectionListComponent;
  let fixture: ComponentFixture<AbsenceSelectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsenceSelectionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsenceSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
