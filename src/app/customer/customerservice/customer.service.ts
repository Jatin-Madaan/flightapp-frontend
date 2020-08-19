import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../../models/Booking';
import { Schedule } from '../../models/Schedule';
import { ScheduleFlight } from 'src/app/models/scheduleFlight';
import { Passenger } from 'src/app/models/Passenger';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:8085/";

  getpaggenger(bookingid:any){
    return this.http.get(this.url+"getpassengerdetails/"+bookingid);
  }

  setbookingstatus(bookingid:any,userid:any,status:any,amount:any){
    return this.http.get(this.url+"setbookingstatusbyid/"+bookingid+"/"+userid+"/"+status+"/"+amount);
  }

  getbookingdetails(bookingid:any){
    return this.http.get(this.url+"getbookingbyid/"+bookingid);
  }

  getBookings(userId:number){
    return this.http.get<Booking[]>(this.url+"customer/bookings/"+userId.toString());
  }

  cancelBooking(bookingId:number){
    return this.http.get<Booking>(this.url+"customer/cancelBooking/"+bookingId);
  }

  modifyBooking(bookingId:number,schedule:Schedule){
    return this.http.put(this.url+"customer/modifyBookings/"+bookingId,schedule,{ responseType: 'text' as 'json' });
  }
  
  getFlights(source:string, destination: string, dest_date:string, passengers:number)
  {
    return this.http.get<ScheduleFlight[]>(this.url+"customer/getFlights/"+source+"/"+destination+"/"+dest_date+"/"+passengers);
  }

  addPassenger(passenger:Passenger):Observable<any>
  {
    return this.http.post(this.url +passenger,{responseType:'text'})
  }

}
