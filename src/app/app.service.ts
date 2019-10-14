import {Injectable} from '@angular/core';
import {ContactUsViewModel} from './contact-us/contact-us.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {

  visibleImages = [];

  private API_EMAIL_SENDER_URL = 'http://localhost:3000/postData';

  constructor(private httpClient: HttpClient) {
  }


  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(name: string) {
    return IMAGES.slice(0).find(image => image.name === name);
  }

  getImageByCategory(category: string) {
    return IMAGES.slice(0).find(image => image.category === category);
  }

  //
  postContactForm(contactForm: ContactUsViewModel): Observable<any> {
    return this.httpClient.post(this.API_EMAIL_SENDER_URL, contactForm);
  }

}

const IMAGES = [
  {name: 'bathroom1-before', category: 'bathroom', status: 'Before cleaning', url: 'assets/images/bathroom1-before.jpg'},
  {name: 'bathroom1-after', category: 'bathroom', status: 'After cleaning', url: 'assets/images/bathroom1-after.jpg'},

  {name: 'bathroom2-before', category: 'bathroom', status: 'Before cleaning', url: 'assets/images/bathroom2-before.jpg'},
  {name: 'bathroom2-after', category: 'bathroom', status: 'After cleaning', url: 'assets/images/bathroom2-after.jpg'},

  {name: 'bathroom-before', category: 'bathroom', status: 'Before cleaning', url: 'assets/images/bathroom-before.jpg'},
  {name: 'bathroom-after', category: 'bathroom', status: 'After cleaning', url: 'assets/images/bathroom-after.jpg'},

  {name: 'kitchen-before', category: 'kitchen', status: 'Before cleaning', url: 'assets/images/kitchen-before.jpg'},
  {name: 'kitchen-after', category: 'kitchen', status: 'After cleaning', url: 'assets/images/kitchen-after.jpg'},

  {name: 'living-room-before', category: 'living-room', status: 'Before cleaning', url: 'assets/images/living-room-before.jpg'},
  {name: 'living-room-after', category: 'living-room', status: 'After cleaning', url: 'assets/images/living-room-after.jpg'},

  {name: 'living-room1-before', category: 'living-room', status: 'Before cleaning', url: 'assets/images/living-room1-before.jpeg'},
  {name: 'living-room1-after', category: 'living-room', status: 'After cleaning', url: 'assets/images/living-room1-after.jpeg'},

  {name: 'kitchen1-before', category: 'kitchen', status: 'Before cleaning', url: 'assets/images/kitchen1-before.jpg'},
  {name: 'kitchen1-after', category: 'kitchen', status: 'After cleaning', url: 'assets/images/kitchen1-after.jpg'},

  {name: 'kitchen2-before', category: 'kitchen', status: 'Before cleaning', url: 'assets/images/kitchen2-before.jpeg'},
  {name: 'kitchen2-after', category: 'kitchen', status: 'After cleaning', url: 'assets/images/kitchen2-after.jpeg'},

  {name: 'bathroom5-before', category: 'bathroom', status: 'Before cleaning', url: 'assets/images/bathroom5-before.jpeg'},
  {name: 'bathroom5-after', category: 'bathroom', status: 'After cleaning', url: 'assets/images/bathroom5-after.jpeg'},

  {name: 'bathroom4-before', category: 'bathroom', status: 'Before cleaning', url: 'assets/images/bathroom4-before.jpg'},
  {name: 'bathroom4-after', category: 'bathroom', status: 'After cleaning', url: 'assets/images/bathroom4-after.jpg'},

  {name: 'bathroom3-before', category: 'bathroom', status: 'Before cleaning', url: 'assets/images/bathroom3-before.jpg'},
  {name: 'bathroom3-after', category: 'bathroom', status: 'After cleaning', url: 'assets/images/bathroom3-after.jpg'},

  {name: 'car-before', category: 'car', status: 'Before cleaning', url: 'assets/images/car-before.jpeg'},
  {name: 'car-after', category: 'car', status: 'After cleaning', url: 'assets/images/car-after.jpeg'},

  {name: 'car1-before', category: 'car', status: 'Before cleaning', url: 'assets/images/car1-before.jpeg'},
  {name: 'car1-after', category: 'car', status: 'After cleaning', url: 'assets/images/car1-after.jpeg'},
];
