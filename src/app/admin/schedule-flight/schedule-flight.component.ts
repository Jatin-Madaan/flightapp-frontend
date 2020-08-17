import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AdminService } from '../adminservice/admin.service';
import { Airport } from 'src/app/models/Airport';
import { Flight } from 'src/app/models/Flight';
import { Schedule } from 'src/app/models/Schedule';
import { ScheduleFlight } from 'src/app/models/scheduleFlight';

@Component({
  selector: 'app-schedule-flight',
  templateUrl: './schedule-flight.component.html',
  styleUrls: ['./schedule-flight.component.css']
})
export class ScheduleFlightComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  airports?: Airport[];
  flights?: Flight[];
  schedule: Schedule = new Schedule();
  scheduleFlight: ScheduleFlight = new ScheduleFlight();
  scheduleSubmitted: Schedule;

  airportForm = new FormGroup({
    airportName: new FormControl(''),
    address: new FormControl(''),
  });

  scheduleFlightForm = new FormGroup({
    scheduleFlightId: new FormControl(0),
    scheduleId: new FormControl(0),
    departureAirport: new FormControl(0),
    arrivalAirport: new FormControl(0),
    dipartureTime: new FormControl(''),
    arrivalTime: new FormControl(''),
    flights: new FormControl(0),
    ticketCost: new FormControl(0),
    status: new FormControl(''),
    availableSeats: new FormControl(0)
  });

  ngOnInit() {
    this.adminService.getAllAirports().subscribe(data => {
      this.airports = data;
      console.log(this.airports)
    })

    this.adminService.getFlights().subscribe(data => {
      this.flights = data;
      console.log(this.flights);
    })
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.airportForm.value);
    this.adminService.addAirport(this.airportForm.value).subscribe();
    window.location.reload(true);
  }

  onScheduleSubmit(){
    this.schedule.arrivalTime = this.scheduleFlightForm.value.arrivalTime;
    this.schedule.departureTime = this.scheduleFlightForm.value.dipartureTime;
    this.adminService.getAirportById(this.scheduleFlightForm.controls.departureAirport.value).subscribe(data => {
      this.schedule.sourceAirport = data;
      this.adminService.getAirportById(this.scheduleFlightForm.controls.arrivalAirport.value).subscribe(data => {
        this.schedule.destinationAirport = data;
        this.adminService.addSchedule(this.schedule).subscribe(data => {
          this.scheduleSubmitted = data;
          this.scheduleSubmitted.scheduleId = 0;
          this.scheduleFlight.schedule = this.scheduleSubmitted;
          this.adminService.getFlightById(this.scheduleFlightForm.controls.flights.value).subscribe(data => {
            this.scheduleFlight.flight = data;
            this.scheduleFlight.availableSeats = data.seatCapacity;
            this.scheduleFlight.status = this.scheduleFlightForm.controls.status.value;
            this.scheduleFlight.ticketCost = this.scheduleFlightForm.controls.ticketCost.value;
            console.log(this.scheduleFlight);
            this.adminService.addScheduleFlight(this.scheduleFlight).subscribe(data => {
              console.log(data);
            })
          });       
        });
      });
    });   
  }
}
