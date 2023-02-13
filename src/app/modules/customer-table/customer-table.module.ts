import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TableRoutingModule } from './customer-table-routing.module';
import { CustomerTableComponent } from './customer-table.component';

@NgModule({
  declarations: [CustomerTableComponent],
  imports: [CommonModule, TableRoutingModule, TableModule, InputTextModule, ButtonModule, BadgeModule],
})
export class CustomerTableModule {}
