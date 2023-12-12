import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwbDetailsComponent } from './awb-details.component';

describe('AwbDetailsComponent', () => {
  let component: AwbDetailsComponent;
  let fixture: ComponentFixture<AwbDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AwbDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
