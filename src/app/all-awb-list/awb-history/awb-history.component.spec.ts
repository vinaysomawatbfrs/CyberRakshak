import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwbHistoryComponent } from './awb-history.component';

describe('AwbHistoryComponent', () => {
  let component: AwbHistoryComponent;
  let fixture: ComponentFixture<AwbHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AwbHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwbHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
