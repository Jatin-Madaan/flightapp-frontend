import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/Booking';
import { Schedule } from '../models/Schedule';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:8085/";

  setbookingstatus(bookingid:any,userid:any,status:any,amount:any){
    return this.http.get(this.url+"setbookingstatusbyid/"+bookingid+"/"+userid+"/"+status+"/"+amount);
  }

  getbookingdetails(bookingid:any){
    return this.http.get(this.url+"getbookingbyid/"+bookingid);
  }

  getBookings(userId:number){
    return this.http.get<Booking[]>(this.url+"customer/bookings/"+userId);
  }

  cancelBooking(bookingId:number){
    return this.http.get<Booking>(this.url+"customer/cancelBooking/"+bookingId);
  }

  modifyBooking(bookingId:number,schedule:Schedule){
    return this.http.put(this.url+"customer/modifyBookings/"+bookingId,schedule,{ responseType: 'text' as 'json' });
  }
}
