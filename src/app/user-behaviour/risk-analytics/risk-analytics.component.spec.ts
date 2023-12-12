import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAnalyticsComponent } from './risk-analytics.component';

describe('RiskAnalyticsComponent', () => {
  let component: RiskAnalyticsComponent;
  let fixture: ComponentFixture<RiskAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RiskAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
