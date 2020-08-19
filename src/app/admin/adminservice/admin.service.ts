import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airport } from 'src/app/models/Airport';
import { Schedule } from 'src/app/models/Schedule';
import { Flight } from 'src/app/models/Flight';
import { ScheduleFlight } from 'src/app/models/scheduleFlight';
import { Booking } from 'src/app/models/Booking';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:8085/";

  getAllAirports(){
    return this.http.get<Airport[]>(this.url+"/airports/all");
  }

  addAirport(airport : Airport){
    return this.http.post<Airport>(this.url + "airports/add", airport);
  }

  getFlights(){
    return this.http.get<Flight[]>(this.url + "/getFlights");
  }

  addSchedule(schedule: Schedule){
    return this.http.post<Schedule>(this.url + "Schedule/add", schedule);
  }

  addScheduleFlight(scheduleFlight: ScheduleFlight){
    return this.http.post<ScheduleFlight>(this.url + "/scheduleFlight/add", scheduleFlight);
  }

  getFlightById(id: number){
    return this.http.get<Flight>(this.url + "getFlights/" + id);
  }

  getAirportById(id: number){
    return this.http.get<Airport>(this.url + "/airports/id/" + id); 
  }

  getScheduleById(id: number){
    return this.http.get<Schedule>(this.url + "/Schedule/id/" + id);
  }
  
  getSchedulesFlights()
  {
    return this.http.get<ScheduleFlight[]>(this.url+"admin/scheduleFlight/viewAll");
  }

  getBookings()
  {
    return this.http.get<Booking[]>(this.url+"viewAllBooking");
  }

  deleteBooking(booking: Booking) 
  {
    return this.http.delete<Booking>(this.url+ "deleteBooking" + "/"+ booking.bookingId);
  }

  removeSchedule(scheduleFlightId:number)
  {
    console.log(scheduleFlightId);
    return this.http.delete(this.url+"admin/deleteSchedule/"+scheduleFlightId);
  }

  rescheduleFlightSchedule(rescheduleId:number, updatedSchedule:ScheduleFlight)
  {
    return this.http.put(this.url+"admin/rescheduleFlightSchedule/"+rescheduleId,updatedSchedule,{ responseType: 'text' as 'json' });
  }
}
