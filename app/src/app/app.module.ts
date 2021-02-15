import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { HomeComponent } from './home/home.component';
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    BeneficiariesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
