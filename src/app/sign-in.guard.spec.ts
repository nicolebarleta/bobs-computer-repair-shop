/*
 ============================================
; Title:  sign-in.guard.spec.ts
; Author: Professor Krasso
; Date: 14 February 2021
; Modified By: Marie Nicole Barleta
; Description: Sign-in Guard spec ts file
;===========================================
 */

import { TestBed } from '@angular/core/testing';

import { SignInGuard } from './sign-in.guard';

describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
