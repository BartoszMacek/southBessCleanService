import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  image: any;

  constructor(private appService: AppService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.image = this.appService.getImage(
      this.route.snapshot.params['name']
    );

  }

}
