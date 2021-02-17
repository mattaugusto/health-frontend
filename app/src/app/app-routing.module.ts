import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { HomeComponent } from './home/home.component';
import { NewBeneficiaryComponent } from './new-beneficiary/new-beneficiary.component';
import { EditBeneficiaryComponent } from './edit-beneficiary/edit-beneficiary.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'beneficiaries', component: BeneficiariesComponent },
  { path: 'beneficiaries/new', component: NewBeneficiaryComponent },
  { path: 'beneficiaries/edit/:beneficiaryId', component: EditBeneficiaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
