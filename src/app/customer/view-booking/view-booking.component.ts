import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customerservice/customer.service';
import {Booking} from '../../models/Booking';
import { Flight } from 'src/app/models/Flight';
import { Passenger } from 'src/app/models/Passenger';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  bookings:Booking[];
  flight:Flight;
  passenger:Passenger[];
  
  constructor(private service:CustomerService) { }

  ngOnInit() {
    this.service.getBookings(10001).subscribe(data=>{
      this.bookings=data;
      console.log(this.bookings);
    },err=>{
      console.log(err);
    });
  }

  viewFlight(index:number){
    this.flight=this.bookings[index].flight;
  }

  viewPassenger(index:number){
    this.passenger=this.bookings[index].passengers;
  }
}