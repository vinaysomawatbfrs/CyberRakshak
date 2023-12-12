import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAwbComponent } from './download-awb.component';

describe('DownloadAwbComponent', () => {
  let component: DownloadAwbComponent;
  let fixture: ComponentFixture<DownloadAwbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DownloadAwbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadAwbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
