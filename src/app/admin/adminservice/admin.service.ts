import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleFlight } from 'src/app/models/scheduleFlight';

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

  rescheduleFlightSchedule(rescheduleId:number, updatedSchedule:ScheduleFlight)
  {
    return this.http.put(this.url+"rescheduleFlightSchedule/"+rescheduleId,updatedSchedule,{ responseType: 'text' as 'json' });
  }
}
