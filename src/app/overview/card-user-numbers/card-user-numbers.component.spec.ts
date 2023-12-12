import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserNumbersComponent } from './card-user-numbers.component';

describe('CardUserNumbersComponent', () => {
  let component: CardUserNumbersComponent;
  let fixture: ComponentFixture<CardUserNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CardUserNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUserNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
