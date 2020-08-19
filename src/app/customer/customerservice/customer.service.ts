import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Booking } from "../../models/Booking";
import { Schedule } from "../../models/Schedule";
import { ScheduleFlight } from "src/app/models/scheduleFlight";
import { Passenger } from "src/app/models/Passenger";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CustomerService {

  //injecting http object to run the http methods
  constructor(private http:HttpClient) { }

  //base url for the backend server
  url:string="http://localhost:8085/";

  getpaggenger(bookingid: any) {
    return this.http.get(this.url + "getpassengerdetails/" + bookingid);
  }

  setbookingstatus(bookingid: any, userid: any, status: any, amount: any) {
    return this.http.get(
      this.url +
        "setbookingstatusbyid/" +
        bookingid +
        "/" +
        userid +
        "/" +
        status +
        "/" +
        amount
    );
  }

  getbookingdetails(bookingid: any) {
    return this.http.get(this.url + "getbookingbyid/" + bookingid);
  }

  //to get a list of bookings
  getBookings(userId:number){
    return this.http.get<Booking[]>(this.url+"customer/bookings/"+userId.toString());
  }

  //to cancel a particular booking
  cancelBooking(bookingId:number){
    return this.http.get<Booking>(this.url+"customer/cancelBooking/"+bookingId);
  }
  
  getFlights(source:string, destination: string, dest_date:string, passengers:number)
  {
    return this.http.get<ScheduleFlight[]>(this.url+"customer/getFlights/"+source+"/"+destination+"/"+dest_date+"/"+passengers);
  }

  addPassenger(passenger: Passenger){
    return this.http.post(this.url + passenger, { responseType: "text" });
  }

  findScheduleFlightById(id: number) {
    return this.http.get<ScheduleFlight[]>(this.url + "getFlightById/" + id);
  }
}
