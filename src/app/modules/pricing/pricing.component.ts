import { Component, OnInit } from '@angular/core';
import { PricingFeature } from './models/pricing.models';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {
  public specialBlockFeatures: PricingFeature[] = [
    { text: 'All standard elements included', icon: 'check' },
    { text: 'Over 1800 Components', icon: 'check' },
    { text: 'Best Figma techniques', icon: 'check' },
    { text: 'Up to 10 design editors', icon: 'minus' },
    { text: 'Email support', icon: 'minus' },
  ];

  public normalBlockFeatures: PricingFeature[] = [
    { text: 'All standard elements included', icon: 'check' },
    { text: 'Over 1800 Components', icon: 'check' },
    { text: 'Best Figma techniques', icon: 'check' },
    { text: 'Up to 10 design editors', icon: 'check' },
    { text: 'Email support', icon: 'check' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
