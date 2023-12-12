import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiiViewHistoryComponent } from './pii-view-history.component';

describe('PiiViewHistoryComponent', () => {
  let component: PiiViewHistoryComponent;
  let fixture: ComponentFixture<PiiViewHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PiiViewHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiiViewHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
