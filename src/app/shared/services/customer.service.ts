import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customer, CustomerAdapter, CustomerBackend } from '../models/customer.models';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  /**
   * @description Asks the api for a list of customers
   * @returns {*}  {Observable<Customer[]>}
   */
  public getCustomers(): Observable<Customer[]> {
    return this.http.get<CustomerBackend[]>('http://fakeapi.com/customers').pipe(
      map((customersFromBackend: CustomerBackend[]) => {
        console.log(customersFromBackend);
        return customersFromBackend.map((customerFromBackend: CustomerBackend) => CustomerAdapter.fromBackend(customerFromBackend));
      })
    );
  }
}
