import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiiViewHistoryTableComponent } from './pii-view-history-table.component';

describe('PiiViewHistoryTableComponent', () => {
  let component: PiiViewHistoryTableComponent;
  let fixture: ComponentFixture<PiiViewHistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PiiViewHistoryTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiiViewHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
