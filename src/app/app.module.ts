import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {VeterinarModule} from "./veterinar/veterinar.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './veterinar/app-routing.module';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    VeterinarModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    RouterModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
