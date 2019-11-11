import {Injectable} from '@angular/core';
import {ServicesModel} from './services.model';

@Injectable()
export class ServicesService {
  private services: ServicesModel[] = [

    new ServicesModel('Domestic cleaning',
      'Regular Domestic Cleaning could be on a weekly basis – just once, or several ' +
      'times per week or on a fortnightly basis, all dependent on your needs. This cleaning service includes all general and thorough ' +
      'house duties done on a regular basis. Our experienced Southampton-based domestic cleaners are fully trained and guaranteed ' +
      'to clean your home to the highest standard, leaving you to enjoy your spare time free from the worry of household chores, ' +
      'in a house that sparkles clean.',
      ''),

    new ServicesModel('Carpet cleaning',
      'BeeFree Cleaning services LTD offers a Carpet & upholstery cleaning ' +
      'in Southampton for your residential property or commercial premises. Whether you require carpet cleaning, stain removal, ' +
      'rug cleaning, upholstery cleaning or sofa cleaning, our insured cleaners can help you get the fresh look back to your property. ' +
      'Our carpet & upholstery cleaners are well trained, and use the latest equipment to ensure that our customers receive the highest ' +
      'level of care when it comes to carpet, upholstery & furniture cleaning.',
      ''),

    new ServicesModel('Commercial cleaning',
      'BeeFree offers cleaning services for your business needs: office, nurseries, schools,shops and churches. ' +
      'The office cleaning services are carried out by our most experienced and well trained cleaners. Office cleaning is a ' +
      'weekly service, and we recommend it be carried out early in the morning or late afternoons to ensure that our ' +
      'cleaners do not get in your way. Communication is key! We ask for any specific instructions in order to deliver the the best ' +
      'possible office cleaning service.',
      ''),

    new ServicesModel('End of tenancy',
      'Just 24 hours after contacting us, we able to provide you with comprehensive end of tenancy cleaning. ' +
      'It is the most strongly recommended when you are selling a house or moving in/out. No matter if you are the owner of a property,' +
      ' a landlord of a flat or a tenant, a particular interior will be neat and shiny in the blink of an eye! We provide you with ' +
      'excellent cleaning services and we always meet any requirements of an estate agency. We focus on every single detail! ' +
      'Please note: The property must be ready to be cleaned at the moment of our arrival. We do not take responsibility of the ' +
      'ingrained dirt which is impossible to be eliminated with the use of detergents. You have to defrost your freezers before we come,' +
      ' because it takes too much time. If you want your wardrobes and cupboards to be washed as well, please empty them earlier. ' +
      'Our end of tenancy cleaning service does not concern walls or any old paint.',
      ''),

    new ServicesModel('After party cleaning',
      'The party was great but the, house looks terrible,right?Want the fun without the mess? Well we can take care of the ' +
      'mess with our specially designed after party cleaning service after you take care of the fun! Our after party cleaning is the ' +
      'service you need if you would like to enjoy the fun, but don’t want to deal with the mess. Our trained and experienced cleaners ' +
      'are able to clean the property into shape after a party, leaving no traces of the party from the night before. BeeFree cleaning ' +
      'services LTD is able to provide cleaners at the time and day that best suits its customers ensuring a swift after party ' +
      'cleaning service.',
      ''),

    new ServicesModel('One off cleaning',
      'One-off cleaning is a professional cleaning for clients who do not need a cleaner on a regular basis. ' +
      'You able to just order a cleaner when a need of cleaning arises. We can supply you with professional cleaning staff ' +
      'that can dust sweep, and clean your house into shape at a great price! A lot of people book this kind of cleaning ' +
      'services in Southampton just before some holidays, in the spring time, before some very important celebrations or just to ' +
      'refresh their houses. We can clean from top to bottom- including kitchen deep cleaning, oven and hob extractor cleaning, ' +
      'deep bathroom cleaning, carpet and upholstery cleaning services, window and conservatory cleaning and many more… ' +
      'The most important you need to know about this cleaning is that it’s take more time than usual cleaning. ' +
      'The DEEP cleaning services cant’t be done in 2- 3 hours and this is the reason to be more expensive. ' +
      'Our experienced and reliable cleaners will clean everything in details. Our minimum hours for this cleaning are 4. ' +
      'When you book this service with BeeFree cleaning services LTD we’ll give you a change to book one-off cleaning including ' +
      'professional cleaning materials or without materials. Our customers prefer to book the service with our cleaning materials ' +
      'and equipment- to be honest this better than going shopping and wondering which product works better for limescale, ' +
      'bathroom tiles, toilet clean, etc. The cleaning products we use for the job are subject to additional charge. ' +
      'Any other additional services can be booked as well- they are subject to additional charge.',
      ''),

    new ServicesModel('Car valeting',
      'BeeFree is offering a car valet which is designed for vehicles that require interior fully valeted consisting vacuum, ' +
      'shampooing and stain removal of seats, carpets, mats, door linings, roof lining and sun visors, all plastics and vinyl\'s cleaned ' +
      'and polished with boot valeted. We are fully insured. In our interior valet: We brush all interior fabric areas, seats, ' +
      'carpets and boot. We wash and polish ashtrays. All interior plastics are pre-sprayed and scrubbed we shampoo all fabric areas, ' +
      'seats (if fabric), carpets, headlining and panels. Please note that after valeting service your car will require drying. ' +
      'We will suck most of the water out however car will require final drying (engine running with heating on for at least 3 hrs).',
      ''),

    new ServicesModel('Pressure washing',
      'It happens that our client is not aware how dirty his or her patio, pathway or driveway was and reacts with total ' +
      'amazement to the final result of our work, as the difference is startling. Thanks to our innovative pressure washers, ' +
      'we can make any hard surface outside look neat, shiny and almost like new. It is important to take care of your pavements,' +
      ' patios, paths and driveways, as they usually affect the first impression that a guest has while coming to your house. ' +
      'Order our professional high pressure cleaning anywhere in Southampton and areas now! Thanks to our skills and modern equipment, ' +
      'we will take thorough care of your property. Namely, we can: clean your driveways, patios, exterior walls, deckings, ' +
      'wooden fences, house facades, conservatories, garden furniture, wash external horizontal surfaces, eliminate moss, ' +
      'remove chewing gums.',
      ''),

    new ServicesModel('Deep cleaning',
      'Deep cleaning is a much more intense process it is the most complete cleaning you can do in your house and needs ' +
      'to be well planned for. You may have a regular schedule to clean your house , however you need a deep house cleaning to reach ' +
      'those places that regular cleaning doesn’t. We highly recommend to use deep cleaning before you start using our regular ' +
      'domestic cleaning service. This way your property will be thoroughly cleaned from the start. You can also take advantage of the ' +
      'one off deep cleaning before a holiday season, special family event, it is ideal as occasional cleaning at any time of the ' +
      'year to make your home refreshed, sanitized , so no infections or bacteria will be able to spread there and sparkling like ' +
      'brand new, just the way you want it. You will benefit yourself and your family with hygienic and well-kept home where you ' +
      'can spend your quality time together. Deep cleaning is different from regular domestic cleaning or one - off cleaning because ' +
      'it reaches the deep grime and dirt. It covers areas which aren’t cover by regular clean.\n' +
      'Minimum 3 hours are required for deep cleaning.',
      ''),
  ];


  getServices() {
    return this.services.slice();
  }

  getService(index: number) {
    return this.services[index];
  }


}
