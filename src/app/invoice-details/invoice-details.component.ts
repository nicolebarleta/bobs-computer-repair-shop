/**
 * Title: invoice-details.component.ts
 * Author: Professor Krasso
 * Date: 01 March 2021
 * Modified by: Marie Nicole Barleta
 * Description: Invoice dialog box
 */



import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IService } from '../services.interface';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {
/**
 * These are declared so that the dialog can connect with the data from the IService,
 * which is connected to the home ts file.
 */
  service: Array<IService> = [];
  invoice: number;
  invoiceDate: Date;

  constructor(private dialogRef: MatDialogRef<InvoiceDetailsComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.service = data.service;
    this.invoice = data.invoice;
    this.invoiceDate = data.invoiceDate;
  }

  ngOnInit(): void {
  }
}
