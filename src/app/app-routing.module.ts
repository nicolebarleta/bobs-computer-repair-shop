/*
 ============================================
; Title:  app-routing.module.ts
; Author: Professor Krasso
; Date: 14 February 2021
; Modified By: Marie Nicole Barleta
; Description: App routing module
; This is where all navigation path is connected.
; If the user goes to the right link and directory the user will access the sign-in session.
; If the user goes to a wrong directory with the link the not-found session will show.
; Once the user's input is authenticated in the sign-in form the user will be able to access
; the baseLayoutComponent as well as the homeComponent.
;===========================================
 */



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { CalculateServicesComponent } from './calculate-services/calculate-services.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'calculate-services',
    component: CalculateServicesComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]
 },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
