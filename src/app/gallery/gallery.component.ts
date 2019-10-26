import {Component, OnChanges, Input} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {

  @Input() filterBy = 'all';
  visibleImages: any[] = [];


  constructor(private  appService: AppService) {
    this.visibleImages = this.appService.getImages();
  }


  ngOnChanges() {
    this.visibleImages = this.appService.getImages();
  }

}
