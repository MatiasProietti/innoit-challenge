import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Status } from '@app/shared/models/customer.models';
import { CustomerService } from '@app/shared/services/customer.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss'],
})
export class CustomerTableComponent implements OnInit {
  public customers!: Customer[];
  public loading: boolean = true;

  @ViewChild('dt') table!: Table;

  constructor(private customerService: CustomerService) {
    this.customerService.getCustomers().subscribe((customers: Customer[]) => {
      this.customers = customers;
      this.loading = false;
    });
  }

  ngOnInit(): void {}

  public getStatusBadgeSeverity(status: Status): string {
    switch (status) {
      case Status.NEW:
        return 'info';
      case Status.PROPOSAL:
        return 'warning';
      case Status.QUALIFIED:
        return 'primary';
      case Status.RENEWAL:
        return 'help';
      case Status.UNQUALIFIED:
        return 'danger';
    }
  }

  public globalFilter($event: Event) {
    this.table.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
}
