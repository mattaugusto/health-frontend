import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { BeneficiariesService } from '../services/beneficiariesService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.scss'],
  providers: [BeneficiariesService] 
})
export class BeneficiariesComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  beneficiaries: any[] = [];

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private beneficiariesService: BeneficiariesService) { }

  ngOnInit(): void {
    this.beneficiariesService.fetchBeneficiaries().subscribe((data: any) => {
      this.beneficiaries = data
      this.dtTrigger.next()
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  onDelete(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process cannot be undone.',
      icon: 'info',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Delete',
      confirmButtonColor: '#343a40',
    }).then((result) => {
      if (result.isConfirmed) {
        this.beneficiariesService.deleteBeneficiary(id).then(data => {
          Swal.fire('Beneficiary removed!', '', 'success').then(() => {
            window.location.reload()
          })
        })
      }
    })
  }
}
