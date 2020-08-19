import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminservice/admin.service';
import { ScheduleFlight } from 'src/app/models/scheduleFlight';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.css']
})
export class RescheduleComponent implements OnInit {
  submitted: boolean = false;

  constructor(private service:AdminService, private route:Router, private formBuilder:FormBuilder ) { }

  scheduleFlightsList:ScheduleFlight[];
  updatedSchedule:ScheduleFlight;
  rescheduleId:number;
  error: any;
  errorpass: string;
  
  rescheduleFlightForm: FormGroup;

  ngOnInit(): void 
  {
    this.service.getSchedulesFlights().subscribe(data=>
    {
      this.scheduleFlightsList = data;
    },
    error=>{
      alert("No data present in the database");
      console.log("No data present in the database");
    });
    this.rescheduleFlightForm = this.formBuilder.group({arrivalTime:['',[Validators.required]],departureTime:['',[Validators.required]]});
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
    this.updatedSchedule.scheduleFlightId = scheduleFlight.scheduleFlightId;
    this.rescheduleId = scheduleFlight.scheduleFlightId;

  }
  submitFunc()
  {
    this.submitted=true
    if(this.rescheduleFlightForm.invalid)
    {
      return;
    }
    this.updatedSchedule.schedule.departureTime = this.rescheduleFlightForm.controls.departureTime.value;
    this.updatedSchedule.schedule.arrivalTime = this.rescheduleFlightForm.controls.arrivalTime.value;
    if( this.updatedSchedule.schedule.departureTime == this.updatedSchedule.schedule.arrivalTime || this.updatedSchedule.schedule.arrivalTime < this.updatedSchedule.schedule.departureTime)
    {
      console.log("Invalid arguments");
      this.errorpass = "Invalid arguments";
      alert(this.errorpass);
    }
    else
    {
      this.service.rescheduleFlightSchedule(this.rescheduleId,this.updatedSchedule).subscribe(data => {
        this.service.getSchedulesFlights().subscribe(data=>
          {
            this.scheduleFlightsList = data;
          });
        }, error => {
          this.error = error;
          console.log(this.error.error.message);
          alert(this.error.error.message);
        });
    }
    window.location.reload(true);
  }
}
