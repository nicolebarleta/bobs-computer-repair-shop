/*
 ============================================
; Title:  sign-in.guard.ts
; Author: Professor Krasso
; Date: 14 February 2021
; Modified By: Marie Nicole Barleta
; Description: Sign-in guard ts file
;===========================================
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {}

  /*
  * This function is has the cookieService which states,
  * whether the signed-in user is detected and once the session is
  * activated the user can access the page when it's false it will
  * go back to the sign-in form.
  */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const sessionUser = this.cookieService.get('session_user');

    if (sessionUser) {
      return true;
    } else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }
}
