import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customerservice/customer.service';
import {Booking} from '../../models/Booking';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  bookings:Booking[];

  constructor(private service:CustomerService) { }

  ngOnInit() {
    this.service.getBookings(10001).subscribe(data=>{
      this.bookings=data;
    },err=>{
      console.log(err);
    });
  }
}
