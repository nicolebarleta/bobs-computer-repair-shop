/*
 ============================================
; Title:  sign-in.service.ts
; Author: Professor Krasso
; Date: 14 February 2021
; Modified By: Marie Nicole Barleta
; Description: Sign-in service ts file
;===========================================
 */


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

//The student id's declared variables, it is used for validation

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

// The id will be the user's input and it checks if it's equal to the studentId variable

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
