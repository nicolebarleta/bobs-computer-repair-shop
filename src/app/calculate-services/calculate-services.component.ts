/**
 * Title: calculate-services.component.ts
 * Author: Professor Krasso
 * Date: 01 March 2021
 * Modified by: Marie Nicole Barleta
 * Description: Calculate services ts file
 */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-services',
  templateUrl: './calculate-services.component.html',
  styleUrls: ['./calculate-services.component.css']
})
export class CalculateServicesComponent implements OnInit {

//Declaration of variables in calculate-services component
selectedItems = [];
selectedIDs = [];
selectedValues= [];
total: number;

// The main offered services with the value of each service and a return value for check boxes
services = [
  {
     name: "Password Reset",
     value: 39.99,
     id: 'passwordReset',
     label: 'Password Reset - $39.99',
     selectedService: false
   },
   {
     name: "Spyware Removal",
     value: 99.99,
     id: 'spywareRemoval',
     label: 'Spyware Removal - $99.99',
     selectedService: false
   },
   {
     name: "RAM Upgrade",
     value: 129.99,
     id: 'RAMUpgrade',
     label: 'RAM Upgrade - $129.99',
     selectedService: false
   },
   {
     name: "Software Installation",
     value: 49.99,
     id: 'softwareInstallation',
     label: 'Software Installation - $49.99',
     selectedService: false
   },
   {
     name: "Tune Up",
     value: 89.99,
     id: 'tuneUp',
     label: 'Tune-up - $89.99',
     selectedService: false
   },
   {
     name: "Keyboard Cleaning",
     value: 45.00,
     id: 'keyboardCleaning',
     label: 'Keyboard Cleaning - $45.00',
     selectedService: false
   },
   {
     name: "Disk Clean-pp",
     value: 149.99,
     id: 'diskCleanUp',
     label: 'Disk Clean Up - $149.99',
     selectedService: false
   }
]

//Declaration function for zero value
ngOnInit(): void {
  this.total = 0;
  this.getSelectedItems()
  this.getSelectedIDs()
}
//Declaration function for change when services id is selected
changeSelection() {
  this.total = 0;
  this.getSelectedItems()
  this.getSelectedIDs()
}
//Filters services it returns the value of selected value
getSelectedItems() {
  this.selectedItems = this.services.filter((value) => {
    return value.selectedService
  });
}

/**
 * This function loops through each selected service and pushes the
 * selected value of the id which iterates and is added as the total.
 */
getSelectedIDs() {
  this.selectedIDs = []
  this.services.forEach((value) => {

    if (value.selectedService) {
      this.selectedIDs.push(value.id);
      this.total += value.value;
    }
  });
}
}
