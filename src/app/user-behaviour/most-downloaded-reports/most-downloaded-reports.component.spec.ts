import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostDownloadedReportsComponent } from './most-downloaded-reports.component';

describe('MostDownloadedReportsComponent', () => {
  let component: MostDownloadedReportsComponent;
  let fixture: ComponentFixture<MostDownloadedReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MostDownloadedReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostDownloadedReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
