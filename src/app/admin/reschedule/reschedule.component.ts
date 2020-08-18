import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../adminservice/admin.service';
import { ScheduleFlight } from 'src/app/models/scheduleFlight';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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
  
  rescheduleFlightForm: FormGroup;

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
    return;
    

    this.updatedSchedule.schedule.departureTime = this.rescheduleFlightForm.controls.departureTime.value;
    this.updatedSchedule.schedule.arrivalTime = this.rescheduleFlightForm.controls.arrivalTime.value;
    this.service.rescheduleFlightSchedule(this.rescheduleId,this.updatedSchedule).subscribe(data => {
      this.service.getSchedulesFlights().subscribe(data=>
        {
          this.scheduleFlightsList = data;
        });
    });
    
    
  }
}
