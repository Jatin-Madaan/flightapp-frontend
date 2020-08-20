import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminservice/admin.service';
import { ScheduleFlight } from 'src/app/models/scheduleFlight';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

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
  today = new Date();
  rescheduleFlightForm: FormGroup;

  /* Method: ngOnInit
	 * Description: ngOnInit is a lifecycle hook called by angular at first, here we are getting the list of all SchedulesFlight by subscribing
	 * @author YashYo
	 */
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

  /* Method: deleteScheduleFlight
	 * Description: deleteScheduleFlight is used to subscribe removeSchedule service
	 * @params: scheduleFlight 
	 * @author YashYo
	 */
  deleteScheduleFlight(scheduleFlight:ScheduleFlight)
  {
    console.log(scheduleFlight);
    this.service.removeSchedule(scheduleFlight.scheduleFlightId).subscribe(data => 
      {
        console.log(data)
        alert("Deleted successfully the schedule associated with ID:"+scheduleFlight.scheduleFlightId);
      }, 
      error=>{
        alert("Error occured while deleting.");
        console.log(error);
      });
    this.service.getSchedulesFlights().subscribe(data=>
      {
        this.scheduleFlightsList = data;
      },
      error=>{
        alert("No data present in the database");
        console.log("No data present in the database");
      });
      window.location.reload(true);
  }

  /* Method: reschedule
	 * Description: reschedule() is used to activate the modal comprising of a Reschedule Form
	 * @params: scheduleFlight 
	 * @author YashYo
	 */
  reschedule(scheduleFlight:ScheduleFlight)
  {
    this.updatedSchedule = scheduleFlight;
    this.updatedSchedule.scheduleFlightId = scheduleFlight.scheduleFlightId;
    this.rescheduleId = scheduleFlight.scheduleFlightId;

  }

  /* Method: submitFunc
	 * Description: submitFunc() is used to fetch rescheduleFlightForm's data and use it accordingly and later to subscribe the respective service
	 * @author YashYo
	 */
  submitFunc()
  {
    let currentdate: any = formatDate(this.today, "yyyy-MM-dd", "en_US");
    this.submitted=true
    if(this.rescheduleFlightForm.invalid)
    {
      return;
    }
    this.updatedSchedule.schedule.departureTime = this.rescheduleFlightForm.controls.departureTime.value;
    this.updatedSchedule.schedule.arrivalTime = this.rescheduleFlightForm.controls.arrivalTime.value;
    if( this.updatedSchedule.schedule.departureTime < currentdate )
    {
      console.log("Invalid arguments condition:1");
      this.errorpass = "Departure date can't be less then Current date";
      alert(this.errorpass);
    } else if( this.updatedSchedule.schedule.arrivalTime < currentdate )
    {
      console.log("Invalid arguments condition:2");
      this.errorpass = "Arrival date can't be less then Current date";
      alert(this.errorpass);
    } else if( this.updatedSchedule.schedule.departureTime == this.updatedSchedule.schedule.arrivalTime )
    {
      console.log("Invalid arguments condition:3");
      this.errorpass = "Departure date and Arrival Date can't be same";
      alert(this.errorpass);
    } else if( this.updatedSchedule.schedule.arrivalTime < this.updatedSchedule.schedule.departureTime )
    {
      console.log("Invalid arguments condition:4");
      this.errorpass = "Arrival time is be greater then Departure time";
      alert(this.errorpass);
    } else
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
