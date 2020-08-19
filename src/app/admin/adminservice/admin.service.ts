import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleFlight } from 'src/app/models/scheduleFlight';
import { Flight } from 'src/app/models/Flight';

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
  //Flight methods

  getFlights()
  {
    return this.http.get<Flight[]>(this.url+"Admin/flights/getFlights");
    }
    addFlight(flight:Flight)
    {
      return this.http.post(this.url+"Admin/flights/newFlight",flight,{responseType:"text"})
    }
    deleteFlight(id:number)
    {
      return this.http.delete(this.url+"Admin/flights/removeFlight/"+id,{responseType:"text"});
    }
    searchFlight(id:number)
    {
      return this.http.get<Flight>(this.url+"Admin/flights/getFlights/"+id);
    }
    updateFlight(id:number,flight:Flight)
    {
      return this.http.put(this.url+"Admin/flights/updateFlight/"+id,flight,{responseType:"text"});
    }
}
