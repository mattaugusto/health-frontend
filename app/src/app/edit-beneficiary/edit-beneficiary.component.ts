import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BeneficiariesService } from '../services/beneficiariesService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-beneficiary',
  templateUrl: './edit-beneficiary.component.html',
  styleUrls: ['./edit-beneficiary.component.scss'],
  providers: [BeneficiariesService]
})
export class EditBeneficiaryComponent implements OnInit {

  beneficiary: any
  beneficiaryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private beneficiariesService: BeneficiariesService
  ) {
    this.beneficiaryForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const beneficiaryId = Number(routeParams.get('beneficiaryId'));
    this.beneficiariesService.fetchBeneficiary(beneficiaryId).then(data => {
      this.beneficiary = data

      this.beneficiaryForm = this.fb.group({
        firstName: [this.beneficiary.firstName, Validators.required],
        lastName: [this.beneficiary.lastName, Validators.required],
        username: [this.beneficiary.username, Validators.required],
        city: [this.beneficiary.city, Validators.required],
        state: [this.beneficiary.state, Validators.required],
        zip: [this.beneficiary.zip, Validators.required]
      });
    })
  }

  onSubmit() {
    if (this.beneficiaryForm.status == 'INVALID') {
      Swal.fire('All the fields are required!', '', 'error')
      return
    }
    
    this.beneficiariesService.updateBeneficiary(
      this.beneficiary.id,
      this.beneficiaryForm.value
    ).then(() => {
      Swal.fire('Beneficiary updated!', '', 'success').then(() => {
        this.router.navigate(['/beneficiaries'])
      })
    })
  }
}
