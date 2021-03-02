/*
 ============================================
; Title:  sign-in.component.ts
; Author: Professor Krasso
; Date: 14 February 2021
; Modified By: Marie Nicole Barleta
; Description: This is where the sign-in form is declared,
; with the function of onSubmit, to find out if the studentID is valid.
;===========================================
 */

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {
    console.log(this.cookieService.get('session_user'));
   }
//Creation of new angular form with validators
ngOnInit(): void {
  this.signinForm = this.fb.group({
    studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
  })
}
//Helper function to return the forms controls, to apply client-side validation in a predictable way
get form() { return this.signinForm.controls; }
  /**
   * This function validates the studentId from the sign-in.service.ts,
   * the studentIds are declared in sign-in.service.ts and has a,
   * validate function which checks if the entered value is equal to the declared
   * student ids value and also this function has a cookieService which runs
   * per session and will allow user to navigate the routed component.
   * Lastly, invalid studentId won't be able to access the page
   * and user will receive an error message.
  */
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1)
      this.router.navigate(['home'])
    } else {
      this.errorMessage = `The employee ID you entered is invalid, please try again.`;
    }
  }
}
