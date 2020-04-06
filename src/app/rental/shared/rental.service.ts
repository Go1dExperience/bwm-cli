import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';


@Injectable()
export class RentalService {
  private rentals: Rental[] = [
    {
      id: '1',
      title: 'Central Apartment',
      city: 'New York',
      street: 'Time Square',
      category: 'Apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 4,
      description: 'Very nice apartment',
      dailyRates: 34,
      shared: false,
      createdAt: '24/12/2019'
    },
    {
      id: '2',
      title: 'Central Apartment',
      city: 'Toronto',
      street: 'Chelford Rd',
      category: 'House',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 2,
      description: 'Very nice house',
      dailyRates: 56,
      shared: true,
      createdAt: '24/12/2019'
    },
    {
      id: '3',
      title: 'Cozy Condo',
      city: 'Helsinki',
      street: 'Boulevardi',
      category: 'Condo',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 6,
      description: 'Very nice condo for many guests',
      dailyRates: 128,
      shared: true,
      createdAt: '24/12/2019'
    },
    {
      id: '4',
      title: 'Nice Apartment',
      city: 'Grand Rapids',
      street: 'Diamond Ave',
      category: 'Apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 2,
      description: 'Very nice apartment for four',
      dailyRates: 120,
      shared: true,
      createdAt: '24/12/2019'
    }
  ]
  public getRentals(): Observable<Rental[]> {
    const rentalObservable: Observable<Rental[]> = new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.rentals)
      }, 300)
    })
    return rentalObservable;
  }
  public getRentalById(rentalId: string): Observable<Rental> {
    return new Observable<Rental>((observer) => {
      setTimeout(() => {
        const foundRental = this.rentals.find((rental) => rental.id === rentalId);
        observer.next(foundRental);
      }, 500)
    })
  }
}