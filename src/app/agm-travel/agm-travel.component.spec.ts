import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmTravelComponent } from './agm-travel.component';

describe('AgmTravelComponent', () => {
  let component: AgmTravelComponent;
  let fixture: ComponentFixture<AgmTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgmTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
