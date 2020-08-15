import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../../models/Booking';
import { Schedule } from '../../models/Schedule';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:8085/";

  getBookings(userId:number){
    return this.http.get<Booking[]>(this.url+"customer/bookings/"+userId.toString());
  }

  cancelBooking(bookingId:number){
    return this.http.get<Booking>(this.url+"customer/cancelBooking/"+bookingId);
  }

  modifyBooking(bookingId:number,schedule:Schedule){
    return this.http.put(this.url+"customer/modifyBookings/"+bookingId,schedule,{ responseType: 'text' as 'json' });
  }
}
