import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PricingFeature } from '../../models/pricing.models';

@Component({
  selector: 'app-pricing-block',
  templateUrl: './pricing-block.component.html',
  styleUrls: ['./pricing-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingBlockComponent {
  @Input() price: string = '0';
  @Input() popular: boolean = false;
  @Input() features: PricingFeature[] = [];

  constructor() {}
}
