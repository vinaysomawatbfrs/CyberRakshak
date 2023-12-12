import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAwbListComponent } from './all-awb-list.component';

describe('AllAwbListComponent', () => {
  let component: AllAwbListComponent;
  let fixture: ComponentFixture<AllAwbListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AllAwbListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAwbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
