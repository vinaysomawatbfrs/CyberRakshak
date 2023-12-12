import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessHoursComponent } from './access-hours.component';

describe('AccessHoursComponent', () => {
  let component: AccessHoursComponent;
  let fixture: ComponentFixture<AccessHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AccessHoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
