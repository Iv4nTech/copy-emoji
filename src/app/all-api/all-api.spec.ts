import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApi } from './all-api';

describe('AllApi', () => {
  let component: AllApi;
  let fixture: ComponentFixture<AllApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
