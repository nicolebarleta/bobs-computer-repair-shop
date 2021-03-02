/**
 * Title: invoice-details.component.ts
 * Author: Professor Krasso
 * Date: 01 March 2021
 * Modified by: Marie Nicole Barleta
 * Description: Invoice dialog box
 */


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailsComponent } from './invoice-details.component';

describe('InvoiceDetailsComponent', () => {
  let component: InvoiceDetailsComponent;
  let fixture: ComponentFixture<InvoiceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
