/**
 * Title: calculate-services.component.ts
 * Author: Professor Krasso
 * Date: 01 March 2021
 * Modified by: Marie Nicole Barleta
 * Description: Calculate services ts file
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateServicesComponent } from './calculate-services.component';

describe('CalculateServicesComponent', () => {
  let component: CalculateServicesComponent;
  let fixture: ComponentFixture<CalculateServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
