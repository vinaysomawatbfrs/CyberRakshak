import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostVisitedUrlsComponent } from './most-visited-urls.component';

describe('MostVisitedUrlsComponent', () => {
  let component: MostVisitedUrlsComponent;
  let fixture: ComponentFixture<MostVisitedUrlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MostVisitedUrlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostVisitedUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
