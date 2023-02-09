import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoterieButtonComponent } from './loterie-button.component';

describe('LoterieButtonComponent', () => {
  let component: LoterieButtonComponent;
  let fixture: ComponentFixture<LoterieButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoterieButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoterieButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
