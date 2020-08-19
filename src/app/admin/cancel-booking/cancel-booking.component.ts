import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/Booking';
import { AdminService } from '../adminservice/admin.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {

  BookingList: Booking[];
  error: string;
  errorpass: string;
  bookings: Booking[] = [];


  constructor(private adminService:AdminService, private route:Router, private formBuilder:FormBuilder ) { }

  ngOnInit(): void 
  {
    this.adminService.getBookings().subscribe(data=>
      {
        this.BookingList = data;
      },
      error=>{
        alert("No data present in the database");
        console.log("No data present in the database");
      });
  }

cancelBooking(booking: Booking)
{
  booking.status = "Cancelled";
  this.adminService
      .modifyBooking(booking)
      .subscribe();
}


// deleteBookings(booking: Booking): void {
//     console.log("Row Deleted!!")
//     this.adminService.deleteBooking(booking)
//       .subscribe(data => {
//         this.bookings = this.bookings.filter(u => u !== booking);
//         console.log("Selected data deleted.");
//       })
//   };



}
