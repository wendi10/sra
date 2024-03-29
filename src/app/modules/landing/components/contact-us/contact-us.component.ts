import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    fullname: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  public isLoading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  sendEmail(): void {
    this.isLoading = true;
    emailjs
      .send(
        'service_49en3ts',
        'template_hbyp3je',
        this.formGroup.getRawValue(),
        {
          publicKey: 'KPO9IKNFSeZ05h_tp',
        }
      )
      .then(
        () => {
          alert('Inquiry Sent!');
          this.formGroup.patchValue({
            fullname: '',
            phoneNumber: '',
            email: '',
            description: '',
          });
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
          alert('Failed to send inquiry, please try again.');
        }
      );
  }
}
