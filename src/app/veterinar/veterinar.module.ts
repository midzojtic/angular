import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./home/home.component";
import { InsertComponent } from './insert/insert.component';

@NgModule({
  declarations: [
    HomeComponent,
    InsertComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    InsertComponent
  ],
  providers: [


  ]
})
export class VeterinarModule { }
