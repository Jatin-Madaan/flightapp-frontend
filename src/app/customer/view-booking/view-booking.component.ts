import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customerservice/customer.service';
import {Booking} from '../../models/Booking';
import { Flight } from 'src/app/models/Flight';
import { Passenger } from 'src/app/models/Passenger';
declare var $: any;

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  bookings:Booking[];
  flight:Flight;
  passenger:Passenger[];
  checkFlight:boolean=false;
  checkPassenger:boolean=false;
  index:number;

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
    this.checkFlight=true;
    this.flight=this.bookings[index].flight;
  }

  viewPassenger(index:number){
    this.checkPassenger=true;
    this.passenger=this.bookings[index].passengers;
  }

  setIndex(index:number){
    this.index=index;
  }

  cancelBooking(){
    this.service.cancelBooking(this.bookings[this.index].bookingId).subscribe(data=>{
      this.bookings[this.index]=data;
      $('#cancelModal').modal('hide');
    },err=>{
      console.log(err);
    });
  }
}