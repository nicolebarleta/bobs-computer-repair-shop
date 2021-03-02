/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Date: 01 March 2021
 * Modified by: Marie Nicole Barleta
 * Description: Declarations of functions and variables
 * for home.html, the employee's route to complete orders.
 */

import { Component, OnInit, NgModule } from '@angular/core';
import { IService } from '../services.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDetailsComponent } from '../invoice-details/invoice-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  servicesForm: FormGroup;
  parts: 0;
  labor: 0;
  services: Array<IService> = [];
  service: IService;
  services_list = [];

  keyPressNumbersDecimal(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
/**
 *
 * This is where the services list are,
 * for complete orders page. It's connected as a form and
 * in a MatDialog, so that the invoice can be easily calculated with a dialog.
 */
  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.services_list = [
      {
        name: "Password Reset",
        invoiceItem: "Password Reset",
        price: 39.99,
        selected: false
      }, {
        name: "Spyware Removal",
        invoiceItem: "Spyware Removal",
        price: 99.99,
        selected: false
      }, {
        name: "RAM Upgrade",
        invoiceItem: "RAM Upgrade",
        price: 129.99,
        selected: false
      }, {
        name: "Software Installation",
        invoiceItem: "Software Installation",
        price: 49.99,
        selected: false
      }, {
        name: "Tune-up",
        invoiceItem: "Tune-up",
        price: 89.99,
        selected: false
      }, {
        name: "Keyboard Cleaning",
        invoiceItem: "Keyboard Cleaning",
        price: 45.00,
        selected: false
      }, {
        name: "Disk Clean-up",
        invoiceItem: "Disk Clean-up",
        price: 149.99,
        selected: false
      }
    ]
  }

  //Checks the selected items
  list_change(check) {
    if (check.selected) {
    check.selected = false;
    }
    else if (!check.selected) {
      check.selected = true;
    }
  }
//Declaration function for zero value
  ngOnInit(): void {
    this.servicesForm = this.fb.group({
      parts: [''],
      labor: ['']
    })
  }
// This function controls the forms services
  get form() { return this.servicesForm.controls; }

/**
 * The calculated results is consists of,
 * The invoice total, the date of invoice's completion and
 * the selected services. All the values will be computed
 * as the total of the invoice
 */
  calculateResults() {
    let invoiceTotal: number = 0;
    let invoiceDate: Date = new Date();

// Looping over the services list and pushes the selected item's value
    for (let value of Object.values(this.services_list)) {
      if (value.selected) {
        invoiceTotal += value.price;
        this.services.push({
          name: value.invoiceItem,
          price: value.price
        });
      }
    }
// Parts value is retrieved from the form
    if (this.form.parts.value) {
      invoiceTotal += this.form.parts.value;
      this.services.push({
        name: 'Parts',
        price: this.form.parts.value
      });
    }
//The Additional labor is multiplied by 50 the value is retrieved from the form
    if (this.form.labor.value) {
      invoiceTotal += this.form.labor.value * 50;
      this.services.push({
        name: 'Labor',
        price: this.form.labor.value * 50
      });
    }
/***
 * The dialog is retrieved from the Invoice Details Component's html file,
 * it will show the selected services, invoice date and invoice total.
 */
    const dialogRef = this.dialog.open(InvoiceDetailsComponent, {
      data: {
        service: this.services,
        invoice: invoiceTotal,
        invoiceDate: invoiceDate
      },
      disableClose: true,
      width: '700px'
    })
//The dialog will close once the user hit confirm.
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.services = [];
      }
    });
  }

}
