import {Component, Input, OnInit} from '@angular/core';
import {ServicesModel} from '../services.model';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {

  @Input() service: ServicesModel;
  @Input() index: number;

  constructor() {
  }

  ngOnInit() {
  }

}
