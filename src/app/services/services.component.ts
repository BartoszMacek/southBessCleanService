import {Component, OnInit} from '@angular/core';
import {ServicesModel} from './services.model';
import {ServicesService} from './services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: ServicesModel[];

  constructor(private servicesService: ServicesService) {
  }

  ngOnInit() {
    this.services = this.servicesService.getServices();
  }

}
