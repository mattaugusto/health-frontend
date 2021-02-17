import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { HomeComponent } from './home/home.component';
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewBeneficiaryComponent } from './new-beneficiary/new-beneficiary.component';
import { EditBeneficiaryComponent } from './edit-beneficiary/edit-beneficiary.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BeneficiariesComponent,
    HomeComponent,
    NewBeneficiaryComponent,
    EditBeneficiaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
