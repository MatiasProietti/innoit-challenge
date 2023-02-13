import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { PricingBlockComponent } from './components/pricing-block/pricing-block.component';
import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';

@NgModule({
  declarations: [PricingComponent, PricingBlockComponent],
  imports: [CommonModule, PricingRoutingModule, ButtonModule, BadgeModule, DividerModule],
})
export class PricingModule {}
