import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contactFormGroup: FormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.contactFormGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      termsOfService: [false, [Validators.requiredTrue]],
      build: [false],
      maintain: [false],
      consult: [false],
    });
  }

  ngOnInit(): void {}
}
