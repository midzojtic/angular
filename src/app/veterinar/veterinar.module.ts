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
import {CarListComponent} from './car-list/car-list.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from "@angular/material";
import {CarEditComponent} from './car-edit/car-edit.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HomeComponent,
    InsertComponent,
    LoginComponent,
    NavComponent,
    CarListComponent,
    CarEditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    RouterModule

  ],
  exports: [
    HomeComponent,
    InsertComponent,
    NavComponent,
    CarListComponent
  ],
  providers: [


  ]
})
export class VeterinarModule { }
