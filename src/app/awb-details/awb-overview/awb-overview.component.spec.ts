import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwbOverviewComponent } from './awb-overview.component';

describe('AwbOverviewComponent', () => {
  let component: AwbOverviewComponent;
  let fixture: ComponentFixture<AwbOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AwbOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwbOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
