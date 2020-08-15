import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleFlight } from 'src/app/models/scheduleFlight';
import { Timestamp } from 'rxjs';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:8085/";

  getSchedulesFlights()
  {
    return this.http.get<ScheduleFlight[]>(this.url+"scheduleFlight/viewAll");
  }

  removeSchedule(scheduleFlightId:number)
  {
    console.log(scheduleFlightId);
    return this.http.delete(this.url+"deleteSchedule/"+scheduleFlightId);
  }

  // rescheduleFlightSchedule(rescheduleId:number, arrivalTime:Time, departureTime:Time)
  // {
  //   return this.http.put(this.url+"/rescheduleFlightSchedule/"+rescheduleId+arrivalTime+departureTime);
  // }
}
