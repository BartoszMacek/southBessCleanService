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
  {name: 'bathroom-before', category: 'bathroom', status: 'Before cleaning', url: 'assets/images/bathroom-before.jpg'},
  {name: 'bathroom-after', category: 'bathroom', status: 'After cleaning', url: 'assets/images/bathroom-after.jpg'},

  {name: 'bathroom1-before', category: 'bathroom', status: 'Before cleaning', url: 'assets/images/bathroom1-before.jpg'},
  {name: 'bathroom1-after', category: 'bathroom', status: 'After cleaning', url: 'assets/images/bathroom1-after.jpg'},

  {name: 'bathroom2-before', category: 'bathroom', status: 'Before cleaning', url: 'assets/images/bathroom2-before.jpg'},
  {name: 'bathroom2-after', category: 'bathroom', status: 'After cleaning', url: 'assets/images/bathroom2-after.jpg'},

  {name: 'bathroom3-before', category: 'bathroom', status: 'Before cleaning', url: 'assets/images/bathroom3-before.jpg'},
  {name: 'bathroom3-after', category: 'bathroom', status: 'After cleaning', url: 'assets/images/bathroom3-after.jpg'},

  {name: 'bathroom4-before', category: 'bathroom', status: 'Before cleaning', url: 'assets/images/bathroom4-before.jpg'},
  {name: 'bathroom4-after', category: 'bathroom', status: 'After cleaning', url: 'assets/images/bathroom4-after.jpg'},

  {name: 'bathroom5-before', category: 'bathroom', status: 'Before cleaning', url: 'assets/images/bathroom5-before.jpg'},
  {name: 'bathroom5-after', category: 'bathroom', status: 'After cleaning', url: 'assets/images/bathroom5-after.jpg'},

  {name: 'bathroom6-before', category: 'bathroom', status: 'Before cleaning', url: 'assets/images/bathroom6-before.jpg'},
  {name: 'bathroom6-after', category: 'bathroom', status: 'After cleaning', url: 'assets/images/bathroom6-after.jpg'},

  {name: 'bathroom7-before', category: 'bathroom', status: 'Before cleaning', url: 'assets/images/bathroom7-before.jpg'},
  {name: 'bathroom7-after', category: 'bathroom', status: 'After cleaning', url: 'assets/images/bathroom7-after.jpg'},

  {name: 'kitchen-before', category: 'kitchen', status: 'Before cleaning', url: 'assets/images/kitchen-before.jpg'},
  {name: 'kitchen-after', category: 'kitchen', status: 'After cleaning', url: 'assets/images/kitchen-after.jpg'},

  {name: 'kitchen1-before', category: 'kitchen', status: 'Before cleaning', url: 'assets/images/kitchen1-before.jpg'},
  {name: 'kitchen1-after', category: 'kitchen', status: 'After cleaning', url: 'assets/images/kitchen1-after.jpg'},

  {name: 'kitchen2-before', category: 'kitchen', status: 'Before cleaning', url: 'assets/images/kitchen2-before.jpg'},
  {name: 'kitchen2-after', category: 'kitchen', status: 'After cleaning', url: 'assets/images/kitchen2-after.jpg'},

  {name: 'kitchen3-before', category: 'kitchen', status: 'Before cleaning', url: 'assets/images/kitchen3-before.jpg'},
  {name: 'kitchen3-after', category: 'kitchen', status: 'After cleaning', url: 'assets/images/kitchen3-after.jpg'},

  {name: 'kitchen4-before', category: 'kitchen', status: 'Before cleaning', url: 'assets/images/kitchen4-before.jpg'},
  {name: 'kitchen4-after', category: 'kitchen', status: 'After cleaning', url: 'assets/images/kitchen4-after.jpg'},

  {name: 'kitchen5-before', category: 'kitchen', status: 'Before cleaning', url: 'assets/images/kitchen5-before.jpg'},
  {name: 'kitchen5-after', category: 'kitchen', status: 'After cleaning', url: 'assets/images/kitchen5-after.jpg'},

  {name: 'kitchen6-before', category: 'kitchen', status: 'Before cleaning', url: 'assets/images/kitchen6-before.jpg'},
  {name: 'kitchen6-after', category: 'kitchen', status: 'After cleaning', url: 'assets/images/kitchen6-after.jpg'},

  {name: 'kitchen7-before', category: 'kitchen', status: 'Before cleaning', url: 'assets/images/kitchen7-before.jpg'},
  {name: 'kitchen7-after', category: 'kitchen', status: 'After cleaning', url: 'assets/images/kitchen7-after.jpg'},

  {name: 'kitchen8-before', category: 'kitchen', status: 'Before cleaning', url: 'assets/images/kitchen8-before.jpg'},
  {name: 'kitchen8-after', category: 'kitchen', status: 'After cleaning', url: 'assets/images/kitchen8-after.jpg'},

  {name: 'kitchen9-before', category: 'kitchen', status: 'Before cleaning', url: 'assets/images/kitchen9-before.jpg'},
  {name: 'kitchen9-after', category: 'kitchen', status: 'After cleaning', url: 'assets/images/kitchen9-after.jpg'},

  {name: 'living-room-before', category: 'living-room', status: 'Before cleaning', url: 'assets/images/living-room-before.jpg'},
  {name: 'living-room-after', category: 'living-room', status: 'After cleaning', url: 'assets/images/living-room-after.jpg'},

  {name: 'living-room1-before', category: 'living-room', status: 'Before cleaning', url: 'assets/images/living-room1-before.jpg'},
  {name: 'living-room1-after', category: 'living-room', status: 'After cleaning', url: 'assets/images/living-room1-after.jpg'},

  {name: 'living-room2-before', category: 'living-room', status: 'Before cleaning', url: 'assets/images/living-room2-before.jpg'},
  {name: 'living-room2-after', category: 'living-room', status: 'After cleaning', url: 'assets/images/living-room2-after.jpg'},

  {name: 'living-room3-before', category: 'living-room', status: 'Before cleaning', url: 'assets/images/living-room3-before.jpg'},
  {name: 'living-room3-after', category: 'living-room', status: 'After cleaning', url: 'assets/images/living-room3-after.jpg'},

  {name: 'living-room4-before', category: 'living-room', status: 'Before cleaning', url: 'assets/images/living-room4-before.jpg'},
  {name: 'living-room4-after', category: 'living-room', status: 'After cleaning', url: 'assets/images/living-room4-after.jpg'},

  {name: 'car-before', category: 'car', status: 'Before cleaning', url: 'assets/images/car-before.jpg'},
  {name: 'car-after', category: 'car', status: 'After cleaning', url: 'assets/images/car-after.jpg'},

  {name: 'car1-before', category: 'car', status: 'Before cleaning', url: 'assets/images/car1-before.jpg'},
  {name: 'car1-after', category: 'car', status: 'After cleaning', url: 'assets/images/car1-after.jpg'},

  {name: 'car2-before', category: 'car', status: 'Before cleaning', url: 'assets/images/car2-before.jpg'},
  {name: 'car2-after', category: 'car', status: 'After cleaning', url: 'assets/images/car2-after.jpg'},

  {name: 'car3-before', category: 'car', status: 'Before cleaning', url: 'assets/images/car3-before.jpg'},
  {name: 'car3-after', category: 'car', status: 'After cleaning', url: 'assets/images/car3-after.jpg'},

  {name: 'car4-before', category: 'car', status: 'Before cleaning', url: 'assets/images/car4-before.jpg'},
  {name: 'car4-after', category: 'car', status: 'After cleaning', url: 'assets/images/car4-after.jpg'},

  {name: 'car5-before', category: 'car', status: 'Before cleaning', url: 'assets/images/car5-before.jpg'},
  {name: 'car5-after', category: 'car', status: 'After cleaning', url: 'assets/images/car5-after.jpg'},

  {name: 'car6-before', category: 'car', status: 'Before cleaning', url: 'assets/images/car6-before.jpg'},
  {name: 'car6-after', category: 'car', status: 'After cleaning', url: 'assets/images/car6-after.jpg'},

  {name: 'car7-before', category: 'car', status: 'Before cleaning', url: 'assets/images/car7-before.jpg'},
  {name: 'car7-after', category: 'car', status: 'After cleaning', url: 'assets/images/car7-after.jpg'},

  {name: 'car8-before', category: 'car', status: 'Before cleaning', url: 'assets/images/car8-before.jpg'},
  {name: 'car8-after', category: 'car', status: 'After cleaning', url: 'assets/images/car8-after.jpg'},
];
