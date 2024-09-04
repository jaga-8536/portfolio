import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { from } from 'rxjs';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // form: FormGroup = this.fb.group({
  //   from_name: ['', Validators.required],
  //   to_name: ['admin'],
  //   from_email: ['', Validators.required],
  //   from_PhoneNumber: ['', Validators.required],
  //   message: [''],
  // });

  // errorMessages = {
  //   from_name: {
  //     required: 'Name is required.',
  //   },
  //   from_email: {
  //     required: 'Email is required.',
  //     email: 'Please enter a valid email address.',
  //   },
  //   from_PhoneNumber: {
  //     required: 'Phone number is required.',
  //   },
  // };


  // constructor(private fb: FormBuilder) { }

  // async send() {
  //   emailjs.init({
  //     publicKey: 'pnPSW7pkRKh_XijIB',
  //     blockHeadless: true,
  //   });


  //   if (this.form.valid) {
  //     let response = await emailjs.send("service_otwf14i", "template_1lyvokm", {
  //       from_name: this.form.value.from_name,
  //       to_name: this.form.value.to_name,
  //       from_email: this.form.value.from_email,
  //       message: this.form.value.message,
  //       from_PhoneNumber: this.form.value.from_PhoneNumber,
  //     });

  //     if (response.status === 200) {
  //       alert("The message has been successfully sent");
  //       this.form.reset();
  //     } else {
  //       console.error("Error sending email:", response.text);
  //     }
  //   } else {
  //     alert("Please fill out all form fields before submitting.");
  //   }
  // }
  form = {
    fname: "",
    number: "",
    email: "",

  }

  patternType = '^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$'

  emailPtype = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

  registerFrm() {
    console.log(this.form)
  }


}
