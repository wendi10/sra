import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    fullname: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    description: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

  sendEmail(): void {
    emailjs.send('service_p34pd8r', 'template_xnrbphh', this.formGroup.getRawValue() , {
      publicKey: 'Pywl9oQ86f6W_0ze6',
    })
    .then(
      () => {
        alert('Inquiry Sent!')
      },
      (error) => {
        alert('Failed to send inquiry, please try again.')
      },
    );
  }

}
