import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterInputComponent } from './letter-input.component';

describe('LetterInputComponent', () => {
  let component: LetterInputComponent;
  let fixture: ComponentFixture<LetterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
