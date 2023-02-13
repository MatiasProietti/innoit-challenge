import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pricing', loadChildren: () => import('./modules/pricing/pricing.module').then((m) => m.PricingModule) },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then((m) => m.ContactModule) },
  { path: 'table', loadChildren: () => import('./modules/customer-table/customer-table.module').then((m) => m.CustomerTableModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
