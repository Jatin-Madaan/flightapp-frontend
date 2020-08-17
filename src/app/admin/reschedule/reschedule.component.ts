import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../adminservice/admin.service';
import { ScheduleFlight } from 'src/app/models/scheduleFlight';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.css']
})
export class RescheduleComponent implements OnInit {

  constructor(private service:AdminService, private route:Router ) { }

  scheduleFlightsList:ScheduleFlight[];
  updatedSchedule:ScheduleFlight;
  rescheduleId:number;
  // @ViewChild("formdata")
  // form: NgForm;

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
    this.service.getSchedulesFlights().subscribe(data=>
      {
        this.scheduleFlightsList = data;
      },
      error=>{
        alert("No data present in the database");
        console.log("No data present in the database");
      });
  }
  reschedule(scheduleFlight:ScheduleFlight)
  {
    this.updatedSchedule = scheduleFlight;
    this.rescheduleId = scheduleFlight.scheduleFlightId;
  }
  submitFunc()
  {
    this.service.rescheduleFlightSchedule(this.rescheduleId,this.updatedSchedule).subscribe(data => console.log(data));
    this.service.getSchedulesFlights().subscribe(data=>
      {
        this.scheduleFlightsList = data;
      },
      error=>{
        alert("No data present in the database");
        console.log("No data present in the database");
      });
    this.route.navigate(["/admin/reschedule"]);
  }
}
