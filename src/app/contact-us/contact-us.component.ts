import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  recaptchaChecker = false;

  contactForm: ContactUsViewModel = {
    name: '',
    email: '',
    telephoneNumber: '',
    postCode: '',
    query: ''
  };

  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }

  sendForm() {
    this.appService.postContactForm(this.contactForm).subscribe(
      res => {

      },
      err => {
        alert('Something wen\'t wrong \(o_O\)');
      }
    );
    location.reload();
  }

  resolved(captchaResponse: string) {
    this.recaptchaChecker = true;
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}


export interface ContactUsViewModel {
  name: string;
  email: string;
  telephoneNumber: string;
  postCode: string;
  query: string;
}
