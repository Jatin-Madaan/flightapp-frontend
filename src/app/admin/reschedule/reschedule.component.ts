import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminservice/admin.service';
import { ScheduleFlight } from 'src/app/models/scheduleFlight';

@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.css']
})
export class RescheduleComponent implements OnInit {

  constructor(private service:AdminService) { }

  scheduleFlightsList:ScheduleFlight[];

  ngOnInit(): void 
  {
    this.service.getSchedulesFlights().subscribe(data=>
      {
        this.scheduleFlightsList = data;
      },
      error=>{
        alert("error occured while subscribing data from server");
        console.log("error occured while subscribing data from server");
      });
  }

  deleteScheduleFlight(scheduleFlight:ScheduleFlight)
  {
    console.log(scheduleFlight);
    this.service.removeSchedule(scheduleFlight.scheduleFlightId).subscribe(data => console.log(data));
  }

  reschedule(scheduleFlight:ScheduleFlight)
  {
    ;
  }

  cancelRescheduling()
  {
    ;
  }
}
