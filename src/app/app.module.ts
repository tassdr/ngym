import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './members/list/list.component';
import { MembersService } from './services/members.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app.routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { MemberFormComponent } from './members/member-form/member-form.component'
import { ConfirmFormComponent } from './members/confirm-form/confirm-form.component';

import { SportsService } from './services/sports.service';
import { AngularMaterialModule } from './material.module';
import { FormService } from './services/form.service';
import { HttpIntercept } from './services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    MemberFormComponent,
    ConfirmFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
    
  ],
  providers: [MembersService, FormService, SportsService, {provide: HTTP_INTERCEPTORS, useClass: HttpIntercept, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [MemberFormComponent, ConfirmFormComponent]
})

export class AppModule { }
