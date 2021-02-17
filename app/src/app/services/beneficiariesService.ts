import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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

  async fetchBeneficiary(id: number) {
    try {
      const data: any = await this.http.get<any[]>(`${environment.apiUrl}/${BeneficiariesService.BENEFICIARIES_URL}/${id}`).toPromise();
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }

  async saveBeneficiary(beneficiary: object) {
    try {
      const data: any = await this.http.post<any[]>(`${environment.apiUrl}/${BeneficiariesService.BENEFICIARIES_URL}`, beneficiary).toPromise();
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }

  async updateBeneficiary(id:number, beneficiary: object) {
    try {
      const data: any = await this.http.put<any[]>(`${environment.apiUrl}/${BeneficiariesService.BENEFICIARIES_URL}/${id}`, beneficiary).toPromise();
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }

  async deleteBeneficiary(id: number) {
    try {
      const data: any = await this.http.delete<any[]>(`${environment.apiUrl}/${BeneficiariesService.BENEFICIARIES_URL}/${id}`).toPromise();
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }
}