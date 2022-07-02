import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServicesComponent} from './services/services.component';
import {GalleryComponent} from './gallery/gallery.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ImageDetailComponent} from './gallery/image-detail/image-detail.component';
import {AppService} from './app.service';
import {ImageFilterByCatPipe} from './filter.pipe';
import {RecaptchaModule} from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    GalleryComponent,
    TestimonialsComponent,
    ContactUsComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    ImageDetailComponent,
    ImageFilterByCatPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RecaptchaModule.forRoot(),
  ],
  providers: [AppService, ImageFilterByCatPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
