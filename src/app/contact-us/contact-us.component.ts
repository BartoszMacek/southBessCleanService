import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: ContactUsViewModel = {
    name: '',
    email: '',
    telephoneNumber: '',
    postCode: '',
    query: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

}


export interface ContactUsViewModel {
  name: string;
  email: string;
  telephoneNumber: string;
  postCode: string;
  query: string;
}
