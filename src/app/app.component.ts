/*
 ============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date: 08 February 2021
; Modified By: Marie Nicole Barleta
; Description: App component ts file
;===========================================
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.title = "Bob's Computer Repair Shop";
  }

  ngOnInit(): void {
  }
//This function will remove the session that it is on
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/']);
  }
}
