import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Injectable()
export class BeneficiariesService {
  constructor(private http: HttpClient) { }

  private static BENEFICIARIES_URL = 'beneficiaries';

  fetchBeneficiaries() {
    try {
      const data: any = this.http.get<any[]>(`${environment.apiUrl}/${BeneficiariesService.BENEFICIARIES_URL}`);
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }
}

@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.scss'],
  providers: [BeneficiariesService] 
})
export class BeneficiariesComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  beneficiaries: any[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

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
}
