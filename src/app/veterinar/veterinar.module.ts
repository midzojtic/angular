import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./home/home.component";
import {InsertComponent} from './insert/insert.component';
import {LoginComponent} from './login/login.component';
import {NavComponent} from './nav/nav.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    InsertComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    InsertComponent,
    NavComponent
  ],
  providers: [


  ]
})
export class VeterinarModule { }
