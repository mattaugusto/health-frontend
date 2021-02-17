import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BeneficiariesService } from '../services/beneficiariesService';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-beneficiary',
  templateUrl: './new-beneficiary.component.html',
  styleUrls: ['./new-beneficiary.component.scss'],
  providers: [BeneficiariesService] 
})
export class NewBeneficiaryComponent implements OnInit {
  beneficiaryForm : FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private beneficiariesService: BeneficiariesService,
    private router: Router
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
    
  }

  onSubmit() {
    if (this.beneficiaryForm.status == 'INVALID') {
      Swal.fire('All the fields are required!', '', 'error')
      return
    }
    
    this.beneficiariesService.saveBeneficiary(this.beneficiaryForm.value).then(() => {
      Swal.fire('Beneficiary saved!', '', 'success').then(() => {
        this.router.navigate(['/beneficiaries'])
      })
    })
  }
}
