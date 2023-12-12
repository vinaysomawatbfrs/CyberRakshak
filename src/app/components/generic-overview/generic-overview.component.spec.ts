import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericOverviewComponent } from './generic-overview.component';

describe('GenericOverviewComponent', () => {
  let component: GenericOverviewComponent;
  let fixture: ComponentFixture<GenericOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GenericOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
